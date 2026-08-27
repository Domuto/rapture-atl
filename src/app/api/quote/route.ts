import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type QuotePayload = Record<string, string>;

const REQUIRED = ["name", "email", "service", "quantity"] as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Send valid JSON." }, { status: 400 });
  }

  // Honeypot — silently accept so bots don't retry
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED.filter((field) => !body[field]?.trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing required field: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const rows = Object.entries(body)
    .filter(([key, value]) => key !== "company_website" && value)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 12px;font-family:monospace;text-transform:uppercase;font-size:12px;color:#777">${escapeHtml(
          key,
        )}</td><td style="padding:6px 12px">${escapeHtml(String(value))}</td></tr>`,
    )
    .join("");

  const html = `<h2>New quote request — ${escapeHtml(site.name)}</h2><table cellspacing="0" cellpadding="0">${rows}</table>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  // No mail provider configured yet — log it so nothing is lost in dev.
  if (!apiKey || !to || !from) {
    console.log("[quote request]", body);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `Quote request — ${body.name} (${body.service})`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[quote request] Resend error", detail);
      return NextResponse.json({ error: "We couldn't send that just now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[quote request] failed", error);
    return NextResponse.json({ error: "We couldn't send that just now." }, { status: 502 });
  }
}

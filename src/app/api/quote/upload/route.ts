import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/gif", "image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const filename = new URL(request.url).searchParams.get("filename") || "artwork";
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (!ALLOWED_TYPES.has(contentType) || contentLength > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "Upload a JPG, PNG, GIF, or WEBP image under 10MB." },
      { status: 400 },
    );
  }

  try {
    const blob = await put(`quote-artwork/${Date.now()}-${filename}`, request.body!, {
      access: "public",
      contentType,
      addRandomSuffix: true,
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error("[quote artwork upload] failed", error);
    return NextResponse.json({ error: "We couldn't upload that image." }, { status: 502 });
  }
}
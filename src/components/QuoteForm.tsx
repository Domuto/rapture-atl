"use client";

import { useState } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_ACCESS_KEY = "99859e8c-0972-40b6-9684-8fe131cace98";

async function uploadToBlob(file: File): Promise<string> {
  const res = await fetch(`/api/quote/upload?filename=${encodeURIComponent(file.name)}`, {
    method: "POST",
    body: file,
  });
  const json = await res.json();

  if (!res.ok || !json?.url) {
    throw new Error(json?.error || "We couldn't upload that image.");
  }
  return json.url as string;
}

const fieldClass =
  "w-full border border-paper/20 bg-ink-2 px-4 py-3.5 text-paper placeholder:text-paper/30 focus:border-spot focus:outline-none";

const labelClass = "label mb-2 block text-paper/55";

export default function QuoteForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // web3forms' free plan rejects file attachments, so upload to Vercel Blob
    // instead and send the public links as text fields.
    const fileInput = form.elements.namedItem("artwork") as HTMLInputElement | null;
    const files = fileInput?.files ? Array.from(fileInput.files) : [];
    formData.delete("artwork");

    if (files.length) {
      const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
      if (totalBytes > 25 * 1024 * 1024) {
        setStatus("error");
        setError("Those files are too large — keep it under 25MB total.");
        return;
      }

      setStatus("sending");
      setError("");

      try {
        const links = await Promise.all(files.map(uploadToBlob));
        links.forEach((link, index) => {
          formData.append(`artwork_${index + 1}`, link);
        });
      } catch (err) {
        setStatus("error");
        setError(err instanceof Error ? err.message : "We couldn't upload your artwork.");
        return;
      }
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Quote request — ${formData.get("name") || "New lead"} (${formData.get("service") || "unspecified"})`);
    formData.append("from_name", "Rapture Fabrications website");
    // Route inquiries to the shop inbox; reply goes straight back to the lead.
    formData.append("to", "info@rapturefabrications.com");
    const leadEmail = formData.get("email");
    if (leadEmail) formData.append("replyto", String(leadEmail));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok || !json?.success) {
        throw new Error(json?.message || "That didn't go through.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "That didn't go through.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-spot bg-ink-2 p-10">
        <span className="regmark text-spot" />
        <h3 className="display mt-6 text-4xl">Quote request received</h3>
        <p className="mt-4 max-w-lg text-lg text-paper/70">
          We read every one of these ourselves. Expect a real price and a real timeline
          back within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="label mt-8 border border-paper/25 px-6 py-3 transition-colors hover:bg-paper hover:text-ink"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
      </div>

      <div>
        <label className={labelClass} htmlFor="company">
          Company or project
        </label>
        <input id="company" name="company" className={fieldClass} placeholder="Brand, band, venue" />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="(404) 000-0000" />
      </div>

      <div>
        <label className={labelClass} htmlFor="service">
          What do you need? *
        </label>
        <select id="service" name="service" required defaultValue={initialService} className={fieldClass}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — help me pick</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="quantity">
          Quantity *
        </label>
        <input
          id="quantity"
          name="quantity"
          required
          className={fieldClass}
          placeholder="e.g. 150 tees, 40 hats"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="garment">
          Garment or item
        </label>
        <input
          id="garment"
          name="garment"
          className={fieldClass}
          placeholder="Comfort Colors 1717, dad caps, whatever you have in mind"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="deadline">
          Need it by
        </label>
        <input id="deadline" name="deadline" type="date" className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="artwork">
          Artwork upload
        </label>
        <input
          id="artwork"
          name="artwork"
          type="file"
          accept="image/*"
          multiple
          className="block w-full cursor-pointer border border-paper/20 bg-ink-2 text-paper/70 file:mr-4 file:cursor-pointer file:border-0 file:bg-spot file:px-5 file:py-3.5 file:text-ink file:transition-colors hover:file:brightness-110 focus:border-spot focus:outline-none"
        />
        <p className="mt-2 text-sm text-paper/40">
          PNG, JPG, GIF or WEBP. Up to 25MB total. For vector files (AI, EPS, PSD, PDF) drop a
          download link in the notes below.
        </p>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="details">
          Anything else
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          className={fieldClass}
          placeholder="Ink colors, print placement, sizes breakdown, event date — the more you give us, the tighter the quote."
        />
      </div>

      {/* Honeypot — bots fill this, people never see it */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="sm:col-span-2">
        {status === "error" ? (
          <p className="mb-5 border border-spot px-4 py-3 text-spot">
            {error} Email us directly and we&apos;ll pick it up from there.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-flash px-8 py-5 text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <span className="display text-2xl">
            {status === "sending" ? "Sending…" : "Send quote request"}
          </span>
        </button>
        <p className="mt-4 text-sm text-paper/40">
          One business day for a response. No mailing list, no drip campaign.
        </p>
      </div>
    </form>
  );
}

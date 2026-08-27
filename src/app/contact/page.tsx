import type { Metadata } from "next";
import Link from "next/link";
import Misprint from "@/components/Misprint";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit, call or email ${site.name} in ${site.address.city}. Walk-ins welcome ${site.hours}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
      <p className="label flex items-center gap-3 text-paper/55">
        <span className="regmark text-spot" />
        Contact
      </p>
      <h1 className="mt-8 text-[clamp(2.75rem,10vw,7rem)]">
        <Misprint>Come see the press.</Misprint>
      </h1>

      <div className="mt-16 grid gap-px border border-paper/12 bg-paper/12 lg:grid-cols-3">
        <div className="bg-ink p-8">
          <h2 className="label text-spot">Shop</h2>
          <address className="mt-5 not-italic text-lg leading-relaxed text-paper/75">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="label ink-link mt-6 inline-block text-paper/55"
          >
            Open in maps →
          </a>
        </div>

        <div className="bg-ink p-8">
          <h2 className="label text-spot">Reach us</h2>
          <div className="mt-5 flex flex-col gap-3 text-lg">
            <a href={site.phoneHref} className="ink-link text-paper/75 hover:text-paper">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="ink-link text-paper/75 hover:text-paper">
              {site.email}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="ink-link text-paper/75 hover:text-paper"
            >
              Instagram DMs
            </a>
          </div>
        </div>

        <div className="bg-ink p-8">
          <h2 className="label text-spot">Hours</h2>
          <p className="mt-5 text-lg text-paper/75">{site.hours}</p>
          <p className="mt-3 text-paper/45">{site.hoursNote}</p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-6 border border-paper/12 bg-ink-2 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <h2 className="display text-3xl">Have a job in mind?</h2>
          <p className="mt-2 text-paper/60">The quote form gets you a real number fastest.</p>
        </div>
        <Link href="/quote" className="bg-spot px-8 py-5 text-center transition-transform hover:-translate-y-0.5">
          <span className="display text-2xl">Get a quote</span>
        </Link>
      </div>

      {/* TODO: drop in a Google Maps embed here once the address is final */}
    </section>
  );
}

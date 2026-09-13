import Link from "next/link";
import Misprint from "./Misprint";
import Marquee from "./Marquee";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper/10 bg-ink">
      <div
        aria-hidden="true"
        className="halftone halftone-fade pointer-events-none absolute inset-0 text-paper/[0.09]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pt-28">
        <p className="label flex items-center gap-3 text-paper/60">
          <span className="regmark text-spot" />
          Atlanta screen printing &amp; embroidery
        </p>

        <h1 className="mt-8 text-[clamp(3.25rem,13vw,10rem)]">
          <Misprint className="block">You bring the art.</Misprint>
          <Misprint className="mt-2 block text-spot">We pull the ink.</Misprint>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl">
            {site.name} prints custom apparel for the brands, bands, restaurants and
            events that make this city loud. Low minimums, real pricing up front, and
            a crew that will tell you when your file needs work instead of printing it
            badly.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/quote"
              className="group flex items-center gap-3 bg-spot px-7 py-4 text-ink transition-transform hover:-translate-y-0.5"
            >
              <span className="display text-2xl">Get a quote</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-3 border border-paper/25 px-7 py-4 transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              <span className="display text-2xl">See what we print</span>
            </Link>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border border-paper/10 bg-paper/10 sm:grid-cols-4">
          {[
            { k: "Minimum order", v: "1 piece" },
            { k: "Standard turnaround", v: "7–10 days" },
            { k: "Max ink colors", v: "8 spot" },
            { k: "Rush jobs", v: "Ask us" },
          ].map((stat) => (
            <div key={stat.k} className="bg-ink p-5">
              <dt className="label text-paper/45">{stat.k}</dt>
              <dd className="display mt-2 text-3xl">{stat.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Marquee
        items={site.ticker}
        className="border-t border-paper/10 bg-paper py-3 text-ink"
        duration={38}
      />
    </section>
  );
}

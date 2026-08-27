import type { Metadata } from "next";
import Misprint from "@/components/Misprint";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a quote",
  description: `Request a custom printing quote from ${site.name}. Real pricing back within one business day.`,
};

const roughPricing = [
  {
    method: "Screen Printing",
    from: "$8",
    unit: "/ shirt",
    note: "24 piece minimum. Price drops as the run grows and colors come down. About $20 per color for screen setup.",
  },
  {
    method: "DTG",
    from: "$14",
    unit: "/ shirt",
    note: "No minimum, no setup fee. Full color, softest hand — best on 100% cotton. Great for one-offs and small runs.",
  },
  {
    method: "Embroidery",
    from: "$9",
    unit: "/ piece",
    note: "12 piece minimum plus a one-time ~$45 digitizing fee that's yours to keep for reorders.",
  },
];

export default function QuotePage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="halftone halftone-fade pointer-events-none absolute inset-0 text-paper/[0.07]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
        {/* Rough pricing */}
        <div className="border-b border-paper/12 pb-16">
          <p className="label flex items-center gap-3 text-paper/55">
            <span className="regmark text-flash" />
            Ballpark pricing
          </p>
          <h2 className="mt-6 display text-[clamp(1.75rem,5vw,3rem)]">
            Rough starting prices
          </h2>
          <p className="mt-4 max-w-xl text-paper/65">
            Ranges to set expectations — the real number depends on quantity, garment,
            colors and placement. Fill out the form and we&apos;ll price it exactly.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {roughPricing.map((tier) => (
              <div key={tier.method} className="border border-paper/15 bg-ink-2 p-7">
                <h3 className="display text-2xl">{tier.method}</h3>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="label text-paper/45">from</span>
                  <span className="display text-4xl text-flash">{tier.from}</span>
                  <span className="label text-paper/45">{tier.unit}</span>
                </p>
                <p className="mt-5 text-sm leading-relaxed text-paper/60">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-14 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="label flex items-center gap-3 text-paper/55">
              <span className="regmark text-spot" />
              Quote request
            </p>
            <h1 className="mt-8 text-[clamp(2.5rem,8vw,5rem)]">
              <Misprint>Tell us the job.</Misprint>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-paper/70">
              Every quote is priced by hand, so the more you give us, the tighter the number
              comes back.
            </p>

            <div className="mt-10 space-y-6 border-t border-paper/12 pt-8">
              <div>
                <p className="label text-paper/45">Rather talk?</p>
                <a href={site.phoneHref} className="display mt-2 block text-3xl hover:text-spot">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="label text-paper/45">Rather email?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="ink-link mt-2 block text-lg text-paper/75 hover:text-paper"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="label text-paper/45">Rather walk in?</p>
                <p className="mt-2 text-paper/75">
                  {site.address.street}, {site.address.city}
                  <br />
                  {site.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="border border-paper/12 bg-ink-2 p-6 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

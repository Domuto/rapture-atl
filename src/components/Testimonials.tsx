import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="border-t border-ink/10 bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Word of mouth"
          title="What the shop gets told"
          tone="ink"
          intro="Placeholder reviews — drop in your real Google and Instagram quotes."
        />

        <div className="mt-14 grid gap-px bg-ink/15 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={i * 80} className="bg-paper p-8 sm:p-10">
              <p className="text-xl leading-snug sm:text-2xl">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4">
                <span className="regmark text-spot" />
                <div>
                  <p className="display text-xl">{t.author}</p>
                  <p className="label text-ink/50">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

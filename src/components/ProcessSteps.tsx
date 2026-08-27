import Reveal from "./Reveal";

const steps = [
  {
    title: "Send us the job",
    body: "Artwork, quantity, garment, deadline. Rough idea is fine — we'll ask the questions that matter.",
    detail: "Quote back within one business day",
  },
  {
    title: "Approve the proof",
    body: "You get a mockup with exact placement and ink colors, plus a price with nothing hidden in it. Nothing prints until you sign off.",
    detail: "Deposit locks your spot on the press",
  },
  {
    title: "Pick it up",
    body: "Counted, folded and boxed. Local pickup is free, or we ship anywhere in the country with tracking.",
    detail: "Reorders skip straight to the press",
  },
];

export default function ProcessSteps() {
  return (
    <div className="grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 100} className="flex flex-col bg-paper p-8 sm:p-10">
          <span className="display text-6xl text-spot">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="display mt-6 text-3xl">{step.title}</h3>
          <p className="mt-4 flex-1 text-ink/70">{step.body}</p>
          <p className="label mt-8 text-ink/45">{step.detail}</p>
        </Reveal>
      ))}
    </div>
  );
}

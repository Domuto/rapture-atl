import Misprint from "./Misprint";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "paper" | "ink";
  misprint?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "paper",
  misprint = false,
}: Props) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const muted = tone === "paper" ? "text-paper/60" : "text-ink/70";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className={`label flex items-center gap-3 ${muted}`}>
          <span className="regmark text-spot" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-[clamp(2.25rem,6vw,4.5rem)]">
        {misprint ? <Misprint>{title}</Misprint> : <span className="display">{title}</span>}
      </h2>
      {intro ? <p className={`max-w-2xl text-lg leading-relaxed ${muted}`}>{intro}</p> : null}
    </div>
  );
}

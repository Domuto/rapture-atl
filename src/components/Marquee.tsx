type Props = {
  items: readonly string[];
  className?: string;
  duration?: number;
};

export default function Marquee({ items, className = "", duration = 34 }: Props) {
  const row = (
    <div className="marquee-track" aria-hidden="true">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="label flex items-center gap-10 whitespace-nowrap">
          {item}
          <span className="regmark opacity-60" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${className}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {row}
      {row}
      <span className="sr-only">{items.join(". ")}</span>
    </div>
  );
}

type Props = {
  children: string;
  className?: string;
  /** Turns off the ink layers — use for smaller headings */
  plain?: boolean;
};

const layers = [
  { color: "var(--color-flash)", dx: "-10px", dy: "6px", delay: "0ms" },
  { color: "var(--color-spot)", dx: "9px", dy: "-7px", delay: "90ms" },
  { color: "var(--color-gold)", dx: "4px", dy: "10px", delay: "180ms" },
];

/**
 * The signature element: a headline printed slightly out of registration,
 * with the spot-ink layers pulling toward alignment on load.
 */
export default function Misprint({ children, className = "", plain }: Props) {
  if (plain) {
    return <span className={`display ${className}`}>{children}</span>;
  }

  return (
    <span className={`misprint display ${className}`}>
      {layers.map((layer) => (
        <span
          key={layer.color}
          aria-hidden="true"
          className="misprint-layer"
          style={
            {
              color: layer.color,
              "--dx": layer.dx,
              "--dy": layer.dy,
              animationDelay: layer.delay,
            } as React.CSSProperties
          }
        >
          {children}
        </span>
      ))}
      <span className="misprint-top">{children}</span>
    </span>
  );
}

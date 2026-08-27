import Link from "next/link";
import type { Service } from "@/lib/services";

const accentText = {
  spot: "text-spot",
  flash: "text-flash",
  gold: "text-gold",
} as const;

const accentBorder = {
  spot: "group-hover:border-spot",
  flash: "group-hover:border-flash",
  gold: "group-hover:border-gold",
} as const;

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex h-full flex-col justify-between border border-paper/12 bg-ink-2 p-7 transition-colors hover:bg-ink-3 ${accentBorder[service.accent]}`}
    >
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className={`label ${accentText[service.accent]}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="label text-paper/35">{service.minimum} min</span>
        </div>
        <h3 className="display mt-6 text-3xl">{service.name}</h3>
        <p className="mt-3 text-paper/65">{service.short}</p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-paper/10 pt-4">
        <span className="label text-paper/45">{service.turnaround}</span>
        <span
          aria-hidden="true"
          className={`text-xl transition-transform group-hover:translate-x-1 ${accentText[service.accent]}`}
        >
          →
        </span>
      </div>
    </Link>
  );
}

import Link from "next/link";

const services = [
  {
    label: "Screen Printing",
    href: "/quote?service=screen-printing",
    image: "/services/screen-printing.jpg",
  },
  { label: "DTG", href: "/quote?service=dtg", image: "/services/dtg.jpg" },
  {
    label: "Embroidery",
    href: "/quote?service=embroidery",
    image: "/services/embroidery.jpg",
  },
];

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute inset-0 text-[#2fff00]/[0.07]"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-7xl flex-col justify-center px-6 py-14 sm:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative isolate min-h-72 overflow-hidden border border-paper/20 bg-ink-2 focus-visible:outline-offset-[-5px]"
            >
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-ink/10 transition-colors duration-300 group-hover:from-ink/90 group-hover:via-ink/45" />
              <div className="flex h-full min-h-72 flex-col justify-between p-6 sm:p-7">
                <span className="label text-[#2fff00]">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex items-end justify-between gap-4 border-t border-paper/30 pt-4">
                  <span className="display text-4xl leading-none sm:text-5xl">{service.label}</span>
                  <span
                    aria-hidden="true"
                    className="mb-1 text-2xl text-[#2fff00] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

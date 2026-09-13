import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Misprint from "@/components/Misprint";
import CtaBanner from "@/components/CtaBanner";
import ServiceCard from "@/components/ServiceCard";
import { getService, services } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: `${service.name} in Atlanta`,
    description: service.short,
    openGraph: { title: `${service.name} in Atlanta`, description: service.short },
  };
}

const accent = {
  spot: "text-spot",
  flash: "text-flash",
  gold: "text-gold",
} as const;

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-paper/10">
        <div
          aria-hidden="true"
          className="halftone halftone-fade pointer-events-none absolute inset-0 text-paper/[0.08]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pt-28">
          <Link href="/services" className="label ink-link text-paper/50">
            ← All services
          </Link>

          <h1 className="mt-8 text-[clamp(2.75rem,10vw,7rem)]">
            <Misprint>{service.name}</Misprint>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-paper/70">{service.blurb}</p>

          <dl className="mt-14 grid gap-px border border-paper/12 bg-paper/12 sm:grid-cols-3">
            {[
              { k: "Best for", v: service.bestFor },
              { k: "Minimum", v: service.minimum },
              { k: "Turnaround", v: service.turnaround },
            ].map((row) => (
              <div key={row.k} className="bg-ink p-6">
                <dt className={`label ${accent[service.accent]}`}>{row.k}</dt>
                <dd className="mt-3 text-lg text-paper/80">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="display text-4xl sm:text-5xl">What you get</h2>
          <ul className="border-t border-paper/12">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-6 border-b border-paper/12 py-6">
                <span className="regmark mt-1.5 text-spot" />
                <span className="text-lg text-paper/75">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/quote"
            className="bg-spot px-8 py-5 transition-transform hover:-translate-y-0.5"
          >
            <span className="display text-2xl">Quote this job</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-paper/10 bg-ink-2 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="label text-paper/50">Also in the shop</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <ServiceCard key={other.slug} service={other} index={services.indexOf(other)} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

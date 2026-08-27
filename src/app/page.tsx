import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import LogoWall from "@/components/LogoWall";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

const learnMore = [
  { slug: "screen-printing", label: "Screen Printing" },
  { slug: "dtg", label: "DTG" },
  { slug: "embroidery", label: "Embroidery" },
].map((item) => ({
  ...item,
  service: services.find((s) => s.slug === item.slug)!,
}));

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Learn more — pick a method */}
      <section className="border-b border-paper/10 bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <p className="label flex items-center gap-3 text-paper/55">
            <span className="regmark text-flash" />
            Start here
          </p>
          <h2 className="mt-6 display text-[clamp(2rem,6vw,3.5rem)]">
            I&apos;d like to learn more about
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {learnMore.map((item, i) => (
              <Reveal key={item.slug} delay={i * 70} className="h-full">
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col justify-between border border-paper/15 bg-ink p-8 transition-colors hover:border-flash hover:bg-ink-3"
                >
                  <span className="label text-flash">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display mt-12 text-4xl sm:text-5xl">{item.label}</span>
                  <span className="mt-4 text-paper/60">{item.service.short}</span>
                  <span className="mt-8 flex items-center gap-2 border-t border-paper/10 pt-4">
                    <span className="label text-paper/70 group-hover:text-paper">Learn more</span>
                    <span
                      aria-hidden="true"
                      className="text-flash transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Every method under one roof"
          intro="Different jobs want different machines. Here's the honest version of what each one is good at."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.slug} delay={i * 70} className="h-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {services.slice(4).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="label border border-paper/20 px-5 py-3 text-paper/65 transition-colors hover:border-paper hover:text-paper"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </section>

      <LogoWall />

      {/* Process */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps, no runaround"
            tone="ink"
            intro="Most shops make you chase them. This is the whole process."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Before you ask" title="Questions we get daily" />
            <Link
              href="/faq"
              className="label mt-8 inline-flex border border-paper/25 px-6 py-4 transition-colors hover:bg-paper hover:text-ink"
            >
              Read all FAQs
            </Link>
          </div>
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CtaBanner
        title="Let's print something."
        body={`Walk in during business hours or send it over — ${site.name} quotes every job by hand.`}
      />
    </>
  );
}

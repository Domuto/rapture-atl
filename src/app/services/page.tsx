import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Screen printing, DTF transfers, embroidery, DTG, posters, finishing, fulfillment and live event printing in Atlanta.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Services"
          title="Pick a method, or let us pick for you"
          misprint
          intro="Quantity, art and fabric decide the method. Tell us those three things and we'll route the job to the right machine."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 70} className="h-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not sure which one?"
        body="Send the artwork and the quantity. We'll tell you which method costs less and looks better — even when that's the cheaper one for us."
      />
    </>
  );
}

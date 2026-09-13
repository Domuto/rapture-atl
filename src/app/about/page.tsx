import type { Metadata } from "next";
import Misprint from "@/components/Misprint";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is an Atlanta print shop doing screen printing, embroidery, DTF and DTG for local brands, bands and businesses.`,
};

const equipment = [
  { name: "Manual press", detail: "8 color, 8 head" },
  { name: "Embroidery heads", detail: "Single head, 15 needle" },
  { name: "DTG printer", detail: "White + CMYK" },
  { name: "Conveyor dryer", detail: "Electric, 320°F cure" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-paper/10">
        <div
          aria-hidden="true"
          className="halftone halftone-fade pointer-events-none absolute inset-0 text-paper/[0.08]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">
          <p className="label flex items-center gap-3 text-paper/55">
            <span className="regmark text-spot" />
            About the shop
          </p>
          <h1 className="mt-8 text-[clamp(2.75rem,10vw,7rem)]">
            <Misprint>Ink, not middlemen.</Misprint>
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <p className="text-xl leading-relaxed text-paper/75">
              {site.name} is a print shop in {site.address.city}. Everything is printed here — no
              brokering your job out to a warehouse three states away, no waiting a week to find
              out your file won&apos;t work.
            </p>
            <p className="text-xl leading-relaxed text-paper/75">
              We started this from our own passion to create garments locally after dealing with
              unreliable printers. Working with us you get quick responses, accurate dates, and a
              phone that someone actually answers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <h2 className="display text-4xl sm:text-5xl">On the floor</h2>
        <div className="mt-10 grid gap-px border border-paper/12 bg-paper/12 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 70} className="bg-ink p-7">
              <p className="display text-2xl">{item.name}</p>
              <p className="label mt-3 text-paper/45">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-paper/10 bg-paper py-20 text-ink sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          {[
            {
              title: "Straight pricing",
              body: "You get the number before you commit, and the number doesn't move unless you change the order.",
            },
            {
              title: "We check the file",
              body: "Low-res, wrong color mode, art that'll fall apart at 14 inches — we catch it before the screens get burned, not after.",
            },
            {
              title: "Local first",
              body: `${site.address.city} brands, venues and kitchens keep this shop running. Walk in, see the press, meet whoever is printing your job.`,
            },
          ].map((value) => (
            <div key={value.title}>
              <span className="regmark text-spot" />
              <h3 className="display mt-5 text-3xl">{value.title}</h3>
              <p className="mt-4 text-ink/70">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

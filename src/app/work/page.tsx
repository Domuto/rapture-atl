import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent print jobs out of the Rapture Fabrications shop — apparel, headwear, posters and live event printing.",
};

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="Out of the shop"
          misprint
          intro="A slice of what's come off the press lately. Every job here started as a file someone emailed us."
        />
        <div className="mt-14">
          <WorkGrid />
        </div>
      </section>

      <CtaBanner
        title="Yours could be next."
        body="Send the art, the count and the deadline. We'll come back with a price."
      />
    </>
  );
}

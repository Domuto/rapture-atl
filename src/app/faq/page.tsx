import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Minimums, pricing, file formats, turnaround times and shipping — answered for Atlanta custom printing.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="FAQ"
          title="The short answers"
          misprint
          intro={`Still stuck? Call the shop at ${site.phone} and ask a human.`}
        />
        <div className="mt-14 max-w-4xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Ready when you are."
        body="Send over the details and you'll have a price back by tomorrow."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

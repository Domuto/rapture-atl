/**
 * PLACEHOLDER COPY — replace with real reviews, real clients and real jobs.
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dropped off art on a Tuesday, had 300 shirts for the tour by the following Friday. Print's still crisp after a season of merch table abuse.",
    author: "Placeholder Name",
    role: "Band manager",
  },
  {
    quote:
      "They caught a problem in my file before it cost me a whole run and walked me through the fix. That's the part nobody else does.",
    author: "Placeholder Name",
    role: "Streetwear label",
  },
  {
    quote:
      "We do four staff drops a year and the color matches every single time. Front of house, kitchen, everybody looks like one restaurant.",
    author: "Placeholder Name",
    role: "Restaurant group",
  },
  {
    quote:
      "Ordered twelve hats to test, then six hundred. Same care on both orders, which is not what I expected.",
    author: "Placeholder Name",
    role: "Nonprofit director",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What's your minimum order?",
    a: "One piece on DTF and DTG — no minimum, no setup fee. Screen printing starts at 24 pieces because that's where the setup cost stops eating your budget. Not sure which method fits your run? Send us the art and the quantity and we'll tell you which one actually saves you money.",
  },
  {
    q: "What does custom printing cost?",
    a: "It comes down to four things: quantity, number of colors, garment, and print method. Per-piece price drops hard as quantity climbs. Send a quote request with your details and you'll get real numbers back — not a range designed to get you on the phone.",
  },
  {
    q: "What file should I send?",
    a: "Vector is best: .ai, .eps, or a print-ready PDF with fonts outlined. A 300 DPI PNG with a transparent background works for DTF and DTG. If all you have is a phone screenshot, send it anyway — we'll tell you honestly whether it can be printed or needs a redraw, and what that costs.",
  },
  {
    q: "How long does an order take?",
    a: "Standard screen printing is 7–10 business days from approved art, signed proof and deposit. DTF and DTG run 3–5. Embroidery runs 10–12 because of digitizing. Rush is available — tell us the deadline up front and we'll either hit it or say so.",
  },
  {
    q: "Do you print on garments I bring in?",
    a: "Yes, with one condition: customer-supplied goods are printed at your risk. We're careful, but if a garment scorches or a print fails on unknown fabric, we can't replace something we didn't sell you. Bring two extras and we'll test first.",
  },
  {
    q: "Where are you and do you ship?",
    a: `We're on the west side of ${"Atlanta"}. Walk-ins welcome during business hours, and we ship anywhere in the country. Local pickup is free.`,
  },
];

/**
 * PLACEHOLDER — swap for real client names once you have permission to use them.
 * Wordmarks are set in type so there are no logo files to chase.
 */
export const clients: string[] = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
  "Client Seven",
  "Client Eight",
];

export type WorkItem = {
  title: string;
  category: "Apparel" | "Headwear" | "Posters" | "Events";
  method: string;
  detail: string;
  /** Drop a file in /public/work and set this to "/work/your-file.jpg" */
  image?: string;
  /** Show the whole image (letterboxed) instead of cropping to fill the tile */
  contain?: boolean;
  tone: "spot" | "flash" | "gold" | "paper";
};

export const workItems: WorkItem[] = [
  { title: "Tour merch run", category: "Apparel", method: "4-color screen print", detail: "480 tees", image: "/work/work-1.jpg", tone: "spot" },
  { title: "Staff uniform drop", category: "Apparel", method: "Discharge print", detail: "120 tees", image: "/work/work-2.jpg", tone: "paper" },
  { title: "Show poster", category: "Posters", method: "Split-fountain flatstock", detail: "100 numbered", image: "/work/work-4.jpg", tone: "flash" },
  { title: "Launch activation", category: "Events", method: "Live manual press", detail: "6 hours on site", image: "/work/work-5.jpg", tone: "spot" },
  { title: "Capsule hoodies", category: "Apparel", method: "Puff + relabel", detail: "80 pieces", image: "/work/work-6.jpg", tone: "gold" },
  { title: "Festival crew kit", category: "Apparel", method: "DTF transfers", detail: "Mixed blanks", image: "/work/work-7.jpg", tone: "flash" },
  { title: "Gallery print series", category: "Posters", method: "5-color flatstock", detail: "50 signed", image: "/work/work-8.jpg", tone: "paper" },
  { title: "Dad cap program", category: "Headwear", method: "3D puff embroidery", detail: "250 caps", image: "/work/work-3.jpg", tone: "gold" },
  { title: "Tylil live on Twitch", category: "Events", method: "Live stream print session", detail: "On-air merch drop", image: "/work/work-9.jpg", contain: true, tone: "flash" },
];

export const workCategories = ["All", "Apparel", "Headwear", "Posters", "Events"] as const;

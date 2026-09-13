/**
 * Single source of truth for shop info.
 * Everything with a TODO is placeholder copy — change it here once and it updates sitewide.
 */
export const site = {
  name: "Rapture Fabrications",
  shortName: "Rapture",
  legalName: "Rapture ATL LLC", // TODO
  city: "Atlanta",
  tagline: "Atlanta's print shop for people with something to say.",
  description:
    "Custom screen printing, DTF transfers, embroidery and DTG in Atlanta. Low minimums, honest pricing, fast turnarounds for brands, bands, restaurants and events.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://raptureatl.com"),

  // TODO — real contact details
  phone: "(404) 477-4536",
  phoneHref: "tel:+14044774536",
  textLine: "(404) 477-4536",
  email: "info@rapturefabrications.com",

  address: {
    street: "1234 Marietta St NW, Suite B", // TODO
    city: "Atlanta",
    state: "GA",
    zip: "30318",
    mapsUrl: "https://maps.google.com/?q=Atlanta+GA", // TODO
  },

  hours: "Mon–Fri, 10am–6pm",
  hoursNote: "Walk-ins welcome during business hours. Closed federal holidays.",

  social: {
    instagram: "https://instagram.com/raptureatl", // TODO
    tiktok: "https://tiktok.com/@raptureatl", // TODO
    youtube: "https://youtube.com/@raptureatl", // TODO
  },

  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],

  ticker: [
    "No minimums on DTF + DTG",
    "Atlanta owned & operated",
    "Walk-in consultations",
    "7–10 day standard turnaround",
    "Rush jobs, straight answers",
  ],
} as const;

export type NavItem = (typeof site.nav)[number];

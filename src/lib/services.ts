export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  bestFor: string;
  minimum: string;
  turnaround: string;
  bullets: string[];
  accent: "spot" | "flash" | "gold";
};

export const services: Service[] = [
  {
    slug: "screen-printing",
    name: "Screen Printing",
    short: "Bold, durable ink for runs of 24 and up.",
    blurb:
      "The workhorse. Ink pushed through a mesh screen, one color at a time, cured at 320°F so it outlives the shirt. Best value once you get past two dozen pieces, and the only method that gives you true specialty inks — puff, metallic, glow, water-based soft hand.",
    bestFor: "Logos, vector art, merch runs, band and event tees",
    minimum: "24 pieces",
    turnaround: "7–10 business days",
    bullets: [
      "Up to 8 spot colors, wet-on-wet or flashed",
      "Water-based and discharge for a no-feel print",
      "Oversize prints up to 16\" x 20\"",
      "Pantone matching on request",
    ],
    accent: "spot",
  },
  {
    slug: "dtf-transfers",
    name: "DTF Transfers",
    short: "Full color, no minimum, works on almost any fabric.",
    blurb:
      "Direct-to-film. We print your art on film, powder it, cure it, and heat press it onto the garment. Full-color gradients and photo detail with no color-count charges, and it sticks to blends, nylon and poly that screen printing fights with.",
    bestFor: "Small runs, gradients, photo art, mixed garment types",
    minimum: "1 piece",
    turnaround: "3–5 business days",
    bullets: [
      "Unlimited colors at one flat price",
      "Prints on cotton, poly, blends, nylon, canvas",
      "Gang sheets available if you press your own",
      "Great for one-offs and samples before a big run",
    ],
    accent: "flash",
  },
  {
    slug: "embroidery",
    name: "Embroidery",
    short: "Stitched logos for hats, polos, jackets and bags.",
    blurb:
      "Thread instead of ink. We digitize your logo into a stitch file, then run it on multi-head machines. It reads as premium instantly, holds up forever, and it's the right call for anything corporate, hospitality or headwear.",
    bestFor: "Hats, polos, workwear, jackets, totes",
    minimum: "12 pieces",
    turnaround: "10–12 business days",
    bullets: [
      "One-time digitizing fee, yours to keep",
      "Flat, 3D puff and tonal stitching",
      "Left chest, back, sleeve and cap-front placements",
      "Woven and leather patch options",
    ],
    accent: "gold",
  },
  {
    slug: "dtg",
    name: "Direct to Garment",
    short: "Photo-quality prints straight onto cotton, one at a time.",
    blurb:
      "Ink jetted directly into the fibers. Softest hand of any method and no setup cost, so a single sample costs about what a single sample should. Cotton-heavy garments only — we'll tell you straight if your art or blank isn't a fit.",
    bestFor: "Samples, one-offs, detailed illustration, print-on-demand",
    minimum: "1 piece",
    turnaround: "3–5 business days",
    bullets: [
      "No screens, no setup fees",
      "Best on 100% ringspun cotton",
      "Light and dark garment printing",
      "Ideal for testing a design before you commit",
    ],
    accent: "flash",
  },
  {
    slug: "posters-flatstock",
    name: "Posters & Flatstock",
    short: "Hand-pulled prints on heavy paper stock.",
    blurb:
      "Screen printed art prints and gig posters on 100lb cover. Each color pulled by hand, signed and numbered if you want them that way. The kind of thing people frame instead of throw away.",
    bestFor: "Gig posters, art prints, limited drops",
    minimum: "25 prints",
    turnaround: "10–14 business days",
    bullets: [
      "Sizes up to 18\" x 24\"",
      "Metallic, fluorescent and split-fountain inks",
      "Numbering and signing station on site",
      "Shipped flat in rigid mailers",
    ],
    accent: "gold",
  },
  {
    slug: "finishing-relabeling",
    name: "Finishing & Relabeling",
    short: "Tag removal, woven labels, hang tags, poly bagging.",
    blurb:
      "The details that make a blank feel like your brand. We cut out manufacturer tags, heat press or stitch in your own, add hang tags and size stickers, then fold and bag so it's shelf-ready out of the box.",
    bestFor: "Streetwear labels, retail-ready product, wholesale orders",
    minimum: "24 pieces",
    turnaround: "Added to your print timeline",
    bullets: [
      "Tagless neck prints and woven label sewing",
      "Custom hang tags with your artwork",
      "Fold, poly bag and size sticker",
      "Barcode and SKU labeling for retail",
    ],
    accent: "spot",
  },
  {
    slug: "fulfillment",
    name: "Storage & Fulfillment",
    short: "We hold your inventory and ship orders as they come in.",
    blurb:
      "Print once, ship forever. We warehouse your finished goods, pull and pack against your store's orders, and hand them to the carrier. You stop living in a room full of boxes.",
    bestFor: "Online stores, subscription drops, tour merch restocks",
    minimum: "Talk to us",
    turnaround: "Same or next business day on in-stock orders",
    bullets: [
      "Pick, pack and ship from our Atlanta floor",
      "Inventory counts you can actually check",
      "Kitting and bundle assembly",
      "Direct handoff for tour and event restocks",
    ],
    accent: "flash",
  },
  {
    slug: "live-event-printing",
    name: "Live Event Printing",
    short: "A working press at your event, printing in front of the crowd.",
    blurb:
      "We roll a manual press, inks and blanks into your space and print live. Guests pick a design, watch it get pulled, and walk out wearing it. Activations, store openings, festivals, conferences.",
    bestFor: "Brand activations, launches, festivals, conferences",
    minimum: "Book by the hour",
    turnaround: "Book 3+ weeks out",
    bullets: [
      "Up to 4 designs on rotation",
      "Print on your blanks or ours",
      "Branded press setup and signage",
      "Two-person crew, load-in to load-out",
    ],
    accent: "gold",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

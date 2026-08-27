# Rapture ATL

Marketing site for Rapture ATL — Atlanta screen printing, DTF, embroidery and DTG.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Copy `.env.example` to `.env.local` and fill in what you need.

---

## Edit these first

| What | Where |
| --- | --- |
| Phone, email, address, hours, social links, nav | `src/lib/site.ts` |
| Services (names, copy, minimums, turnarounds) | `src/lib/services.ts` |
| Testimonials, FAQs, client list, portfolio tiles | `src/lib/content.ts` |
| Colors, fonts, halftone / misprint effects | `src/app/globals.css` |
| Typefaces | `src/lib/fonts.ts` |

Everything marked `TODO` is placeholder copy.

### Portfolio images
Drop files into `public/work/`, then set `image: "/work/your-file.jpg"` on the matching
entry in `src/lib/content.ts`. Tiles without an image render as colored placeholders.

---

## Routes

```
/                       home
/services               all services
/services/[slug]        8 static service pages (generateStaticParams)
/work                   filterable portfolio grid
/about                  shop story + equipment
/faq                    accordion + FAQPage schema
/contact                address, hours, direct lines
/quote                  quote request form
/api/quote              POST endpoint for the form
/sitemap.xml            auto-generated
/robots.txt             auto-generated
```

---

## Quote form email

`POST /api/quote` validates the payload, filters a honeypot field, and emails it
through Resend. Set these in Vercel → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxx
QUOTE_TO_EMAIL=quotes@raptureatl.com
QUOTE_FROM_EMAIL=Rapture ATL Site <site@raptureatl.com>
```

Without them the route still returns success and logs the submission to the server
console, so the form never looks broken in dev. Swap in SendGrid/Postmark/a webhook by
editing `src/app/api/quote/route.ts` — it's one `fetch` call.

---

## Deploy (Vercel + GitHub)

```bash
git init
git add .
git commit -m "Rapture ATL site"
git branch -M main
git remote add origin git@github.com:YOURNAME/rapture-atl.git
git push -u origin main
```

Import the repo in Vercel, add the env vars above, deploy. Framework preset detects
Next.js automatically — no build config needed. Set `NEXT_PUBLIC_SITE_URL` to the live
domain so metadata, OG tags and the sitemap use the right host.

---

## Design notes

- **Palette** — ink `#0d0d0f`, paper `#f1efe9`, and three spot inks: red `#ff3b21`,
  cyan `#16d0e6`, gold `#ffc93c`. Tokens live in the `@theme` block in `globals.css`,
  so `bg-spot`, `text-flash`, `border-gold` etc. all work as Tailwind utilities.
- **Type** — Anton (display/poster), Space Grotesk (body), JetBrains Mono (spec labels).
- **Signature element** — `Misprint.tsx` stacks four copies of a headline and offsets the
  three ink layers, then pulls them toward registration on load, the way a press comes
  into register on the first few pulls. Respects `prefers-reduced-motion`.
- **Accessibility floor** — skip link, visible focus rings, `aria-expanded` on the menu
  and accordion, reduced-motion honored on every animation.

# The Kore

Marketing site for The Kore, a brand strategy and growth consultancy. Built
with Next.js (App Router, TypeScript), Tailwind CSS v4, Framer Motion, and
React Hook Form + EmailJS for the contact form.

## Stack

| Concern       | Choice                                             |
| ------------- | --------------------------------------------------- |
| Framework     | Next.js 16 (App Router, TypeScript, Turbopack)      |
| Styling       | Tailwind CSS v4 (CSS-first `@theme` config)         |
| Animation     | Framer Motion                                       |
| Forms         | React Hook Form                                     |
| Email delivery| EmailJS (`@emailjs/browser`) — no backend needed    |
| Fonts         | Playfair Display (serif, headings), Inter (sans, body) via `next/font/google` |
| Hosting       | Vercel                                               |

Node **20.9+** is required (Next.js 16's minimum) — one version newer than
the 18+ originally specified; the scaffold tool installed the current Next.js
release, which raised the floor.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in your EmailJS credentials
npm run dev                        # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # ESLint
```

## Environment variables

The contact form sends mail client-side via EmailJS, so there's no server
or API route to configure — just three public env vars. See
`.env.local.example` for the full explanation and where to find each value
in your EmailJS dashboard. In short:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Your EmailJS template should expect these variables: `from_name`,
`from_email`, `subject`, `message`. Set the template's "To email" to wherever
inquiries should land (`admin@thekore.com` by default in the site copy —
update `CONTACT.email` in `src/lib/constants.ts` if that changes).

Without these three variables set, the form fails gracefully into its error
state rather than throwing — see `src/components/ContactForm.tsx`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          root layout: fonts, metadata, JSON-LD, nav/footer
│   ├── page.tsx             homepage (hero + teasers)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx, terms/page.tsx   (linked from footer)
│   ├── sitemap.ts, robots.ts, opengraph-image.tsx
│   └── globals.css          Tailwind v4 @theme — all design tokens live here
├── components/               Navigation, Hero, Footer, ContactForm, cards, Button, Section, FadeIn
└── lib/
    └── constants.ts          site copy, nav links, case studies, services — the CMS-lite
```

## Design system

**Tailwind v4, not `tailwind.config.ts`.** The scaffolding tool (`create-next-app`)
installed Tailwind v4, which moved configuration from a JS config file into
CSS itself via the `@theme` directive. Design tokens (`--color-sea-foam`,
`--font-serif`, etc.) live in `src/app/globals.css` and Tailwind generates
utility classes from them automatically (`bg-sea-foam`, `text-stone-moss`,
`font-serif`, ...). This is the current idiomatic approach for this Tailwind
version — there's no separate config file to also maintain.

**Spacing.** Tailwind v4's spacing scale is generated algorithmically as
multiples of a 4px base unit, so `py-20`/`py-30` resolve to exactly
80px/120px — the section padding called for — without any custom scale.

**Fonts.** Playfair Display for headlines (editorial, high-contrast serif —
reads as considered rather than decorative at large sizes) and Inter for
body copy (a workhorse grotesque with excellent readability at 16px). Both
load via `next/font/google`, which self-hosts and subsets them at build
time — no runtime request to Google Fonts, no layout shift.

**One documented deviation from the brand spec, for accessibility.** The
brief's literal hex values don't all clear WCAG AA on their own:

- `#999999` (secondary text) is ~2.9:1 on white — far short of the 4.5:1
  AA minimum for body text. `--color-muted` uses `#6e6e6e` instead, which
  clears 4.5:1 against Ivory (#F8F6F2), the lightest background it's used on.
- Sea Foam (`#7C9182`) as a button fill with white text is ~3.4:1, short of
  4.5:1. A `--color-sea-foam-deep` token (`#697b6e`, ~15% darker) is used
  for button/interactive text specifically; the original hex is kept as
  `--color-sea-foam` for borders, icons, and decorative fills, where the
  3:1 non-text threshold applies and the original color is fine.
- Footer body text uses white rather than Porcelain (`#ECE8E3`) at reduced
  opacity — Porcelain-on-Stone-Moss tops out around 4.1:1 even at full
  opacity, and any transparency pushes it lower. White clears ~5:1.

Everything else — palette usage, typography scale, animation timing, spacing
rhythm — follows the brief as given.

## Accessibility

- Skip-to-content link, semantic landmarks (`nav`, `main`, `footer`), one
  `h1` per page.
- Visible focus rings (`:focus-visible`) throughout; nothing removes an
  outline without replacing it.
- Mobile menu: keyboard-dismissible (Escape), `aria-expanded`/`aria-controls`
  on the trigger, focus-visible styles on menu links.
- `prefers-reduced-motion` is respected two ways: CSS transitions collapse
  via a global media query, and Framer Motion animations are governed by
  `<MotionConfig reducedMotion="user">` in the root layout, which reduces
  transform-based motion to opacity-only for users who've asked for it.
- Form fields use `<label htmlFor>`, `aria-invalid`, and `aria-describedby`
  pointing at live-announced (`role="alert"`) error text.
- Color contrast audited by hand against WCAG's relative-luminance formula
  for every text/background pairing actually used (see "Design system"
  above) — not just the raw brand hexes in isolation.

## SEO

- Per-page `<title>`/`<meta description>` via the App Router `metadata`
  export, templated through a shared `%s — The Kore` pattern in the root
  layout.
- `sitemap.ts` / `robots.ts` (Next.js's typed route handlers — no manual XML).
- `opengraph-image.tsx` generates the OG/Twitter card image at build time
  via `next/og`, so social shares get a branded image without a static asset.
- JSON-LD `Organization` structured data in the root layout.
- `/privacy` and `/terms` are set `robots: { index: false }` — placeholder
  legal pages, not meant to rank.

## Performance

- Every route is statically prerendered (`npm run build` output shows `○` /
  Static for all pages) — no server-side work per request.
- Fonts are self-hosted and subset via `next/font`; no external font request.
- No `<img>` usage yet (case study art is CSS gradient placeholders, per the
  brief's "no photography to start" direction) — when real photography is
  added, use `next/image` for automatic optimization/lazy-loading.

## Deployment (Vercel + GitHub)

This repo has not been pushed anywhere yet — that step needs your GitHub and
Vercel accounts. To finish it:

```bash
# 1. Create a GitHub repo (via github.com or `gh repo create`) and push
git remote add origin <your-repo-url>
git push -u origin main

# 2. Deploy with the Vercel CLI (prompts a browser login on first use)
npx vercel          # preview deploy, links the project
npx vercel --prod    # production deploy
```

Or connect the GitHub repo at vercel.com/new — either path works. Either
way, add the three `NEXT_PUBLIC_EMAILJS_*` variables from `.env.local.example`
in the Vercel project's Settings → Environment Variables before the contact
form will work in production.

After the first deploy, update `SITE.url` in `src/lib/constants.ts` to your
real Vercel/custom domain (it feeds canonical URLs, the sitemap, and Open
Graph tags) and redeploy.

## Content

All site copy — nav labels, hero text, case studies, service descriptions,
contact info — lives in `src/lib/constants.ts`. It's realistic placeholder
content written in The Kore's voice (confident, specific, no filler); swap
in real client names, results, and contact details before launch.

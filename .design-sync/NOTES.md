# design-sync notes

## Repo shape

Kore is a Next.js **application**, not a publishable component library — there's
no `dist/` build, no `main`/`module`/`exports` in `package.json`. The sync uses
the `package` shape's synth-entry path via a hand-written barrel at
`.design-sync/entry-src/index.ts`, which re-exports only the 7 files scoped
into this sync (12 named components) and deliberately excludes `Navigation`,
`Footer`, `Hero`, and `ContactForm` — those are one-off compositions tied to
this site's real routing (`next/navigation`), content (`@/lib/constants`),
and EmailJS env vars, not reusable design-system components.

`cfg.componentSrcMap` pins each component name to its real file under
`src/components/` so JSDoc/`@category` enrichment and grouping work even
though the bundle entry point is the barrel, not those files directly.

## CSS source (re-sync risk — regenerate before every build)

`cfg.cssEntry` points at `.design-sync/.cache/tailwind/css/compiled.css`, a
**gitignored, manually-copied snapshot** of Tailwind v4's real compiled
output. Tailwind v4 has no standalone "build the CSS" step separate from a
real Next.js build, so the process was:

```bash
npm run build   # next build — produces .next/static/chunks/<hash>.css
mkdir -p .design-sync/.cache/tailwind/css .design-sync/.cache/tailwind/media
cp .next/static/chunks/<hash>.css .design-sync/.cache/tailwind/css/compiled.css
cp .next/static/media/*.woff2 .design-sync/.cache/tailwind/media/
```

The compiled CSS's `@font-face` rules reference fonts via `../media/*.woff2`
(relative to the CSS file's own location), which is why the media dir is
mirrored one level up from the CSS file — same relative structure as Next's
own `.next/static/{chunks,media}/`. **Any re-sync must repeat this exact
copy step first** (the hashed filename changes every build) or the CSS entry
goes stale / the font `url()`s break.

## Known render warns

- `LeafMark` and `VeinDivider`: `[RENDER_THIN]` ("mounts have no text and paint
  nothing") on every variant. False positive — both are pure line/shape SVG
  graphics with no text content by design (a leaf glyph, a divider line).
  Screenshots confirmed visually correct (leaf glyph renders in 3 color/size
  variants; divider renders as a subtle wavy line at 2 heights). Triaged as
  legitimate on first sync — a re-sync seeing this same warn on these two
  components is expected, not new.

## FadeIn — intentionally on the floor card, not authored

`FadeIn` wraps children in a Framer Motion `whileInView` reveal
(`initial: {opacity:0, y:24}`, `once: true, margin: "-80px"`). In the real
site this works correctly (verified live). In every isolated single-story
capture tried (`package-capture.mjs`'s `?story=` path), the
`IntersectionObserver` never fires and the screenshot is solid white — even
though the render-check's grid/contact-sheet view (whole page, not one
isolated story) showed it working. `cfg.overrides.<Name>.skip` suppresses a
story from the render-check gate, but `package-capture.mjs` doesn't consult
`cfg.overrides` at all, so a skipped-but-still-authored story stays stuck
"needs grading" forever with no way to produce a non-blank capture.

Rather than force a verdict on a screenshot that can never show the real
behavior, `.design-sync/previews/FadeIn.tsx` was removed — the component
ships on the **floor card** (an explicit, gate-passing state per the skill,
not a failure). The floor card's typographic placeholder is honestly more
useful here than a blank white capture would have been. If a future sync
wants a real preview, it'd need either a capture-tool change (out of scope
for this repo to fork) or composing the story pre-settled (e.g. rendering
past the animation) — worth revisiting if `package-capture.mjs` ever adds a
post-load settle delay or an `animate` (skip-to-end) capture mode.

## CaseStudyCard — needed a taller capture viewport

`CaseStudyCard`'s `aspect-[4/3]` image, at the default 900x700 capture
viewport width, renders ~630px tall — leaving no room for the client label,
title, description, and link below it, so the solo `?story=` capture
clipped them out (confirmed via the raw screenshot: image only, text cut
off). The render-check's grid view didn't show this because grid cells are
narrower there. Fix: `cfg.overrides.CaseStudyCard.viewport: "900x900"`. If
the card's copy grows longer, this may need to grow further.

## Re-sync risks

- The CSS snapshot above is the single biggest staleness risk — it's a point
  -in-time copy, not live-linked to the source. If component styling changes
  (new Tailwind utilities, new custom `@theme` tokens), re-run the copy step
  before re-running the converter, or the bundle ships old styles.
- **`next/link` breaks the whole bundle, not just its own component.**
  `Button`, `ServiceCard`, and `CaseStudyCard` import `next/link`. Its real
  implementation reads `process.env.__NEXT_ROUTER_BASEPATH` (and similar
  Next-internal flags) at module-init time — normally inlined away by Next's
  own bundler, but `process` doesn't exist in this browser bundle, so it
  throws `ReferenceError: process is not defined` while the IIFE is still
  initializing, which aborts the whole bundle before ANY of the 12
  components' exports get assigned (confirmed: all 12 failed identically,
  not just the 3 that use Link). **Fix**: `cfg.tsconfig` points at
  `.design-sync/tsconfig.json`, a design-sync-only tsconfig (not the repo's
  real one) whose `paths` aliases `next/link` to
  `.design-sync/shims/next-link.tsx` — a ~15-line component rendering a
  plain `<a>`. Only affects this bundle; the real site still imports the
  real `next/link`. If `next/link` usage changes (new props relied on),
  update the shim to match.
- `GrowthSpiral`'s infinite CSS `@keyframes` animation is honored globally by
  Kore's own `prefers-reduced-motion` CSS override — that override lives in
  `src/app/globals.css` and is **not** part of this bundle's CSS closure
  (only `_ds_bundle.css`/`styles.css` ship). A design built with this
  component in Claude Design won't inherit that reduced-motion behavior
  unless the design agent's own global CSS includes an equivalent rule.
- If `Navigation`/`Footer`/`Hero`/`ContactForm` are ever wanted in a future
  sync, they'll need either a Next.js router mock (`cfg.provider`) or a
  rewrite to drop the Next.js-specific dependencies — they weren't scoped in
  for exactly this reason.

## Using The Kore UI components

This is a small, curated slice of The Kore's real site components (Button,
Section, FadeIn, three card types, and six leaf-motif decorative graphics) —
not a full app. It intentionally excludes site-specific composed components
(Navigation, Footer, Hero, ContactForm), which depend on real routing and
site content and aren't reusable outside that one site.

### No wrapper required

None of these 12 components read from React context — there is no theme
provider, router provider, or similar to wrap the tree in. Import and render
them directly.

### Styling idiom: Tailwind utility classes, brand palette on top of default Tailwind

Style with Tailwind classes. Layout/spacing/typography-scale utilities are
plain Tailwind (`p-8`, `rounded-sm`, `text-sm`, `flex`, etc.) — nothing
custom there. The brand adds a small set of named color + font tokens on top
(verified present in the shipped `_ds_bundle.css` — don't use tokens outside
this list, they won't resolve):

| Utility | Use |
|---|---|
| `bg-sea-foam` / `border-sea-foam` | decorative accents, borders — NOT for text-bearing buttons (fails contrast with white text) |
| `bg-sea-foam-deep` / `text-sea-foam-deep` | primary CTA button fill; the AA-safe darkened variant |
| `bg-stone-moss` / `text-stone-moss` / `border-stone-moss` | the brand's dark accent — hover states, dark surfaces (e.g. footers), links |
| `bg-ink` / `text-ink` | primary body/heading text color |
| `text-muted` | secondary/supporting text (already darkened for AA contrast — don't substitute Tailwind's default `gray-*`) |
| `bg-ivory` / `bg-linen` | page background / alternate section background (very light, near-white) |
| `font-serif` | headlines — resolves to Playfair Display |

Body copy uses the system default sans stack via the `body` selector, not a
`font-sans` utility class (that utility isn't shipped — nothing in this
component set uses it as a literal class).

Buttons/links animate with `transition-all duration-300` and the brand's
easing curve, applied as an arbitrary value — copy this pattern rather than
inventing a named "ease" utility: `` ease-[var(--ease-luxury)] ``.

### Where the truth lives

`styles.css` is the single stylesheet to load — it `@import`s
`fonts/fonts.css` and `_ds_bundle.css` (which holds all 88 CSS custom
properties, including every token in the table above, plus every component's
compiled styles). Read `_ds_bundle.css` directly if a class's exact value is
ever in question. Each component's `.prompt.md` documents its own props.

### Composing components

Wrap page sections in `<Section>` (handles the 80px/120px responsive
vertical padding + 6xl max-width container) and reveal content with
`<FadeIn>` as it scrolls in:

```tsx
<Section>
  <FadeIn>
    <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
      What we do
    </p>
    <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
      Three disciplines, one strategy
    </h2>
  </FadeIn>
  <div className="mt-14 grid gap-6 md:grid-cols-3">
    <ServiceCard
      title="Brand Strategy"
      description="We define the position, voice, and narrative your brand owns."
      href="/services"
    />
  </div>
</Section>
```

`Button`, `ServiceCard`, and `CaseStudyCard` render a `<Link>`-style anchor
internally; pass a real `href` — they don't work as pure click handlers.

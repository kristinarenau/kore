import { Section } from "the-kore-ui";

export const Default = () => (
  <Section>
    <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
      About The Kore
    </p>
    <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
      We work at the core, not the surface.
    </h2>
    <p className="mt-4 max-w-xl text-muted">
      A small, senior team of brand strategists working close to the
      founders and leaders who hire us.
    </p>
  </Section>
);

export const AsDiv = () => (
  <Section as="div" className="bg-linen/40">
    <p className="text-sm text-muted">
      Rendered as a plain &lt;div&gt; instead of &lt;section&gt; — used on
      interior pages where the page root already provides the landmark.
    </p>
  </Section>
);

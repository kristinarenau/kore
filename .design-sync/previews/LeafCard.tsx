import { LeafCard } from "the-kore-ui";

export const Default = () => (
  <LeafCard>
    <p className="font-serif text-4xl font-semibold text-stone-moss">45+</p>
    <p className="mt-2 text-sm font-medium tracking-wide text-ink">Brands guided</p>
    <p className="mt-3 text-sm leading-relaxed text-muted">
      From seed-stage startups to category leaders, across consumer, B2B,
      and hospitality.
    </p>
  </LeafCard>
);

export const StoneMossAccent = () => (
  <LeafCard color="#6D750A">
    <p className="text-sm text-muted">A leaf-motif alternative to ValueCard for organic layouts.</p>
  </LeafCard>
);

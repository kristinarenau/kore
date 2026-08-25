import { CaseStudyCard } from "the-kore-ui";

export const SeaFoamVariant = () => (
  <CaseStudyCard
    client="Meridian Outfitters"
    title="Repositioning a legacy outdoor brand for a younger buyer"
    description="A 30-year-old outdoor retailer had lost relevance with the customer driving category growth. We rebuilt the narrative around craft, not nostalgia."
    href="/work#meridian-outfitters"
    variant={0}
  />
);

export const StoneMossVariant = () => (
  <CaseStudyCard
    client="North & Vine"
    title="Building a category-defining narrative pre-Series A"
    description="North & Vine needed a brand story sharp enough to anchor an institutional raise. We built the positioning investors and customers repeated back verbatim."
    href="/work#north-and-vine"
    variant={1}
  />
);

export const LinenVariant = () => (
  <CaseStudyCard
    client="Harlow Hospitality Group"
    title="Unifying eleven properties under one growth strategy"
    description="Eleven independently branded properties, one ownership group, zero shared story. We built a house-of-brands architecture that let each property keep its identity."
    href="/work#harlow-hospitality-group"
    variant={2}
  />
);

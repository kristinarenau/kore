// Curated entry for the Claude Design sync — re-exports only the components
// scoped in for this sync (see .design-sync/config.json / NOTES.md). Kore's
// repo is a Next.js app, not a publishable package, so there's no dist/ build
// to point the converter at; this hand-written barrel stands in for one,
// deliberately excluding the site-specific components (Navigation, Footer,
// Hero, ContactForm) that depend on real routing/site content/env vars and
// aren't meaningfully reusable outside this one site.
export { default as Button } from "../../src/components/Button";
export { default as Section } from "../../src/components/Section";
export { default as FadeIn } from "../../src/components/FadeIn";
export { default as ValueCard } from "../../src/components/ValueCard";
export { default as ServiceCard } from "../../src/components/ServiceCard";
export { default as CaseStudyCard } from "../../src/components/CaseStudyCard";
export * from "../../src/components/LeafComponents";

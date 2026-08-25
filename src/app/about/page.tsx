import type { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import ValueCard from "@/components/ValueCard";
import { LeafAccent } from "@/components/LeafComponents";
import { CORE_VALUES } from "@/lib/constants";

const HOW_WE_WORK = [
  "Senior strategist on every engagement, start to finish",
  "Fewer deliverables, built to hold up under pressure",
  "Strategy first — every recommendation traces back to it",
] as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "The Kore is a small, senior team of brand strategists who work close to the founders and leaders who hire us.",
};

export default function AboutPage() {
  return (
    <Section as="div" className="min-h-[70vh] items-center">
      <div className="grid gap-16 md:grid-cols-2 md:items-start">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
            About The Kore
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
            We work at the core, not the surface.
          </h1>
          <div className="mt-8 space-y-5 text-muted">
            <p>
              The Kore was founded on a simple observation: most brands don&rsquo;t
              have a marketing problem, they have a clarity problem. Campaigns,
              rebrands, and new hires all struggle to land when the strategy
              underneath them was never fully resolved.
            </p>
            <p>
              We&rsquo;re a small, senior team — no account layers, no
              junior hand-offs. Every engagement is led by a strategist who
              has done this work for nearly a decade, across consumer,
              B2B, and hospitality brands at every stage from pre-seed to
              category leader.
            </p>
            <p>
              Our approach is deliberately restrained: fewer deliverables,
              built to hold up under pressure. We&rsquo;d rather hand you
              one page of positioning that&rsquo;s genuinely true than a
              deck of one hundred slides that isn&rsquo;t.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {HOW_WE_WORK.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 shrink-0">
                  <LeafAccent size={16} />
                </span>
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="space-y-6">
          {CORE_VALUES.map((value, i) => (
            <FadeIn key={value.label} delay={i * 0.1}>
              <ValueCard {...value} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

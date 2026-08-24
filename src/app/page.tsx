import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import { CASE_STUDIES, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  description:
    "The Kore is a brand strategy and growth consultancy. We uncover the essence at the core of every brand and translate it into strategy that compounds.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-linen/40" as="div">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Strategy first. Everything else follows.
          </h2>
          <p className="mt-6 text-muted">
            We work with founders and marketing leaders who know their product
            is right but sense their story isn&rsquo;t. Our job is to find
            the position only you can own — then build the systems that make
            it repeatable across every channel, hire, and decision.
          </p>
        </FadeIn>
      </Section>

      <Section as="div">
        <FadeIn className="mb-14 max-w-xl">
          <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
            Three disciplines, one strategy
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
              <ServiceCard title={service.title} description={service.description} href="/services" />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-linen/40" as="div">
        <FadeIn className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Recent engagements
            </h2>
          </div>
          <Button href="/work" variant="secondary">
            View all work
          </Button>
        </FadeIn>
        <div className="grid gap-10 md:grid-cols-2">
          {CASE_STUDIES.slice(0, 2).map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.1}>
              <CaseStudyCard
                client={study.client}
                title={study.title}
                description={study.description}
                href={`/work#${study.slug}`}
                variant={i as 0 | 1}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section as="div">
        <FadeIn className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Ready to find your position?
          </h2>
          <p className="mt-6 text-muted">
            Tell us where your brand stands today and where growth needs to
            come from. We&rsquo;ll tell you if we&rsquo;re the right partner.
          </p>
          <div className="mt-10">
            <Button href="/contact">Start Your Strategy</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

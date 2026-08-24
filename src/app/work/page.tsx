import type { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from The Kore: brand repositioning, pre-raise narrative, and identity work for growth-stage companies.",
};

export default function WorkPage() {
  return (
    <Section as="div" className="min-h-[70vh]">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
          Selected work
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
          Case studies
        </h1>
      </FadeIn>

      <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {CASE_STUDIES.map((study, i) => (
          <FadeIn key={study.slug} delay={(i % 2) * 0.1}>
            <article id={study.slug} className="scroll-mt-28">
              <div
                role="img"
                aria-label={`${study.client} — abstract brand-mark placeholder`}
                className="aspect-[4/3] w-full rounded-sm"
                style={{
                  background: [
                    "linear-gradient(135deg, #7c9182 0%, #ece8e3 100%)",
                    "linear-gradient(135deg, #6d750a 0%, #a8b8a1 100%)",
                    "linear-gradient(135deg, #eee9e4 0%, #7c9182 100%)",
                    "linear-gradient(135deg, #a8b8a1 0%, #6d750a 100%)",
                  ][i % 4],
                }}
              />
              <div className="mt-5">
                <p className="text-xs font-medium tracking-[0.1em] text-stone-moss uppercase">
                  {study.client}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {study.description}
                </p>

                <details className="group mt-4">
                  <summary className="cursor-pointer list-none text-sm font-medium text-stone-moss underline underline-offset-4 [&::-webkit-details-marker]:hidden">
                    View case study details
                  </summary>
                  <div className="mt-4 space-y-3 border-l-2 border-sea-foam pl-4">
                    <p className="text-sm text-muted">
                      <span className="font-medium text-ink">Challenge: </span>
                      {study.challenge}
                    </p>
                    <p className="text-sm text-muted">
                      <span className="font-medium text-ink">Result: </span>
                      {study.result}
                    </p>
                  </div>
                </details>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

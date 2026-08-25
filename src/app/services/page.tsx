import type { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import { GrowthSpiral } from "@/components/LeafComponents";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand strategy, growth advisory, and identity & messaging — three disciplines The Kore uses to build brand systems that compound.",
};

export default function ServicesPage() {
  return (
    <Section as="div" className="min-h-[70vh]">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
          Services
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
          Strategy, translated into every discipline that touches your brand
        </h1>
        <p className="mt-6 text-muted">
          Each engagement starts with strategy and ends somewhere specific —
          a narrative, a go-to-market plan, a name. We scope to what your
          brand actually needs next.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.slug} delay={i * 0.1}>
            <div className="relative">
              {service.slug === "growth-advisory" && (
                <span aria-hidden="true" className="absolute top-6 right-6">
                  <GrowthSpiral size={28} />
                </span>
              )}
              <ServiceCard title={service.title} description={service.description} href="/contact" />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

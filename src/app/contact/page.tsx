import type { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Kore to discuss brand strategy, growth advisory, or identity and messaging work.",
};

export default function ContactPage() {
  return (
    <Section as="div" className="min-h-[70vh]">
      <div className="grid gap-16 md:grid-cols-2">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.2em] text-stone-moss uppercase">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Let&rsquo;s talk about your brand.
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Tell us a little about where things stand. We read every message
            and reply within two business days.
          </p>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${CONTACT.email}`} className="text-ink hover:text-stone-moss">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`} className="text-ink hover:text-stone-moss">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Address</dt>
              <dd className="mt-1 text-ink">{CONTACT.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Follow</dt>
              <dd className="mt-1 flex gap-4">
                {CONTACT.social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-stone-moss"
                  >
                    {s.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </Section>
  );
}

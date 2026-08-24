import type { Metadata } from "next";
import Section from "@/components/Section";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <Section as="div" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold text-ink">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
          <p>
            The Kore collects only the information you submit through our
            contact form — your name, email address, subject, and message —
            in order to respond to your inquiry. We do not sell or share this
            information with third parties.
          </p>
          <p>
            Submitted messages are delivered via EmailJS to our inbox and are
            not stored in any database we operate. You may request deletion
            of any correspondence by emailing {CONTACT.email}.
          </p>
          <p>
            This is placeholder policy text for demonstration purposes and
            should be reviewed by counsel before production use.
          </p>
        </div>
      </div>
    </Section>
  );
}

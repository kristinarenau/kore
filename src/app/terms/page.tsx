import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <Section as="div" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold text-ink">Terms of Service</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
          <p>
            By using this website, you agree to use it for lawful purposes
            only. Content on thekore.com — including strategy frameworks,
            case study write-ups, and brand assets — is the property of The
            Kore and may not be reproduced without permission.
          </p>
          <p>
            Case studies presented on this site describe past client
            engagements; results are specific to each client&rsquo;s context
            and are not guaranteed for future engagements.
          </p>
          <p>
            This is placeholder terms text for demonstration purposes and
            should be reviewed by counsel before production use.
          </p>
        </div>
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { FutureContent } from "@/components/ui/FutureContent";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Certifications — SanMateo FixHub Stove Repair",
  description:
    "SanMateo FixHub credentials and certifications. Any verified training or credentials will be listed here as they are documented — we never publish claims we can't back up.",
  path: "/certifications",
  // Placeholder ("coming soon") page — keep out of the index until real,
  // verified credentials exist. Re-enable indexing when populated.
  noindex: true,
});

export default function CertificationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Certifications", href: "/certifications/" }]} />
      <PageHero
        eyebrow="Credentials"
        title="Certifications &amp; Credentials"
        intro="Any verified credentials tied to our stove repair work will be published here — clearly and only once we can document them."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We don&apos;t have certifications to list on this page yet, and we won&apos;t claim any we can&apos;t back
            up. As verifiable credentials or training tied to our stove repair work are documented, we&apos;ll add them
            here so you can see exactly what applies.
          </QuickAnswer>
          <FutureContent
            title="Credentials will be listed here once verified"
            description="This section is reserved for genuine, documented credentials. Until they are confirmed, we leave it empty rather than post anything unverified."
            icon="shield"
          />
          <p className="text-ink-soft leading-relaxed">
            In the meantime, you can learn how we approach diagnosis and repair on our repair process page, or reach out
            with any questions about your stove.
          </p>
        </Container>
      </Section>
      <CTASection source="certifications" />
    </>
  );
}

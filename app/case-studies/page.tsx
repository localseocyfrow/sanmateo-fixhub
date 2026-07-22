import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { FutureContent } from "@/components/ui/FutureContent";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — SanMateo FixHub Stove Repair",
  description:
    "SanMateo FixHub stove repair case studies. Detailed, real repair examples will be published here as they're documented — we never invent stories or outcomes.",
  path: "/case-studies",
  // Placeholder ("coming soon") page — keep out of the index until real,
  // documented case studies exist. Re-enable indexing when populated.
  noindex: true,
});

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies/" }]} />
      <PageHero
        eyebrow="Case Studies"
        title="Stove Repair Case Studies"
        intro="Real, documented examples of stove diagnosis and repair will be shared here as we build out this section."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We don&apos;t have case studies published yet, and we won&apos;t invent them. As we document real stove,
            range, and cooktop repairs &mdash; with genuine details on the symptom, diagnosis, and fix &mdash; we&apos;ll
            add them here so you can see how we approach different problems.
          </QuickAnswer>
          <FutureContent
            title="Case studies coming soon"
            description="Detailed, real repair examples will appear here as they're documented. Until then, we keep this space empty rather than post fabricated stories."
            icon="search"
          />
          <p className="text-ink-soft leading-relaxed">
            Curious how a typical stove repair unfolds? Our repair process page outlines the steps from first symptom to
            confirmed fix, and you&apos;re welcome to reach out with questions about your own stove.
          </p>
        </Container>
      </Section>
      <CTASection source="case-studies" />
    </>
  );
}

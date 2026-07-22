import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { FutureContent } from "@/components/ui/FutureContent";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Before & After — SanMateo FixHub Stove Repair",
  description:
    "Before-and-after stove repair photos from SanMateo FixHub. We'll only ever publish real, customer-approved images — never stock or fabricated results.",
  path: "/before-after",
  // Placeholder ("coming soon") page — keep out of the index until real,
  // customer-approved before/after images exist. Re-enable when populated.
  noindex: true,
});

export default function BeforeAfterPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Before & After", href: "/before-after/" }]} />
      <PageHero
        eyebrow="Before &amp; After"
        title="Before &amp; After Stove Repairs"
        intro="Real before-and-after photos from stove repairs will be shared here — only with genuine images and customer permission."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We don&apos;t have before-and-after photos to show yet. When we do, they&apos;ll be real images from actual
            stove repairs, shared only with the customer&apos;s permission &mdash; never stock photos or fabricated
            results. Authenticity matters more to us than filling the page quickly.
          </QuickAnswer>
          <FutureContent
            title="Before & after photos coming soon"
            description="This gallery will feature only genuine, customer-approved images from real stove repairs. Until those are collected, we leave it intentionally empty."
            icon="stove"
          />
          <p className="text-ink-soft leading-relaxed">
            In the meantime, you can read about how we diagnose and repair stoves on our repair process page, or reach
            out to ask about a specific issue.
          </p>
        </Container>
      </Section>
      <CTASection source="before-after" />
    </>
  );
}

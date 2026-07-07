import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { FutureContent } from "@/components/ui/FutureContent";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Reviews — SanMateo FixHub Stove Repair",
  description:
    "SanMateo FixHub stove repair reviews. We publish only verified customer feedback and never post fabricated ratings or testimonials. See how reviews will appear here.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews/" }]} />
      <PageHero
        eyebrow="Customer Reviews"
        title="SanMateo FixHub Stove Repair Reviews"
        intro="We believe reviews should be earned and real, so this page will fill in only as we collect verified feedback from stove repair customers."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We don&apos;t have published reviews to show yet, and we won&apos;t invent them. As we complete stove repairs
            in San Mateo and the Peninsula, we&apos;ll add verified customer feedback here so you can read genuine
            experiences rather than made-up ratings or testimonials.
          </QuickAnswer>
          <FutureContent
            title="Verified reviews coming soon"
            description="Real, verified customer feedback will appear here as it is collected. Until then, we would rather show nothing than post anything that isn't authentic."
            icon="check"
          />
          <p className="text-ink-soft leading-relaxed">
            If we&apos;ve helped with your stove and you&apos;d like to share your experience, we&apos;d be glad to hear
            from you. In the meantime, you can learn about how we work on our repair process page or reach out with any
            questions.
          </p>
        </Container>
      </Section>
      <CTASection source="reviews" />
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { FutureContent } from "@/components/ui/FutureContent";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Our Technicians — SanMateo FixHub Stove Repair",
  description:
    "Meet the SanMateo FixHub stove repair team. Technician profiles with real names and photos will be added here — we don't invent people or backgrounds.",
  path: "/technicians",
  // Placeholder ("coming soon") page — keep out of the index until real
  // technician profiles exist. Re-enable indexing when populated.
  noindex: true,
});

export default function TechniciansPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Technicians", href: "/technicians/" }]} />
      <PageHero
        eyebrow="Our Team"
        title="Our Stove Repair Technicians"
        intro="Technician profiles with real names and photos will be added here as we introduce the people who handle stove repairs."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We haven&apos;t published technician profiles yet, and we won&apos;t invent people or backgrounds to fill the
            space. When we introduce the team who handles stove, range, and cooktop repairs, you&apos;ll see real names
            and photos here &mdash; nothing fabricated.
          </QuickAnswer>
          <FutureContent
            title="Technician profiles coming soon"
            description="Profiles with real names and photos will appear here once they're ready. We would rather leave this empty than present made-up team members."
            icon="wrench"
          />
          <p className="text-ink-soft leading-relaxed">
            Want to know how our work is done in the meantime? Our repair process page walks through how a stove
            diagnosis and repair typically goes, and you&apos;re always welcome to reach out with questions.
          </p>
        </Container>
      </Section>
      <CTASection source="technicians" />
    </>
  );
}

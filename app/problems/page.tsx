import type { Metadata } from "next";
import { problems } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { ProblemCard } from "@/components/cards/Cards";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Common Stove Problems & What They Mean",
  description:
    "Stove not heating, clicking but not lighting, a gas smell, or a dead burner? SanMateo FixHub explains common stove problems, likely causes, and safe next steps.",
  path: "/problems",
});

export default function ProblemsIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Problems", href: "/problems/" }]} />
      <PageHero
        eyebrow="Stove Symptom Guides"
        title="Common Stove Problems &amp; What They Mean"
        intro="Start with the symptom you're seeing. Each guide explains the likely causes, safety notes, and what to do next."
        showCall={false}
      />
      <Section tint="surface">
        <Container>
          <QuickAnswer>
            Most stove problems trace back to ignition, burners, heating elements, controls, or the gas and electrical
            supply. These guides help you understand what your stove is doing — like not heating, clicking without
            lighting, or shutting off — and point you toward the right repair with SanMateo FixHub.
          </QuickAnswer>
          <div className="mt-10">
            <SectionHeading eyebrow="Pick your symptom" title="Stove Problem Guides" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((p) => (
                <ProblemCard key={p.slug} problem={p} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CTASection source="problems-index" />
    </>
  );
}

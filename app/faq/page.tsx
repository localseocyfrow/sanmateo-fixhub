import type { Metadata } from "next";
import Link from "next/link";
import { globalFaqs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair FAQ — SanMateo FixHub",
  description:
    "Answers to common questions about stove repair in San Mateo: service areas, gas vs electric stoves, brands, diagnosis, cost factors, and how to request service.",
  path: "/faq",
  titleAbsolute: true,
});

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq/" }]} />
      <PageHero
        eyebrow="Questions & Answers"
        title="Stove Repair FAQs"
        intro="Common questions about how SanMateo FixHub handles stove repair across San Mateo and the Peninsula."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-10">
          <FAQAccordion faqs={globalFaqs} heading="Frequently Asked Questions" />
          <p className="text-ink-soft">
            Have a question that isn&apos;t answered here?{" "}
            <Link href="/contact/" className="font-semibold text-navy-700 underline">Contact us</Link> and we&apos;ll help.
          </p>
          <RelatedLinks
            title="Explore More"
            links={[
              { label: "Common Stove Problems", href: "/problems/", description: "Symptom-by-symptom guides." },
              { label: "Stove Repair Cost", href: "/stove-repair-cost-san-mateo-ca/", description: "What affects pricing." },
              { label: "Our Repair Process", href: "/repair-process/", description: "What to expect." },
              { label: "Service Areas", href: "/locations/", description: "Where we work." },
            ]}
          />
        </Container>
      </Section>
      <CTASection source="faq" />
      <JsonLd data={faqSchema(globalFaqs)} />
    </>
  );
}

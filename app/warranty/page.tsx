import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Repair Terms & What to Ask — SanMateo FixHub",
  description:
    "What to expect on stove repair terms with SanMateo FixHub. Parts, labor, and any workmanship assurances are discussed and confirmed per job before work begins.",
  path: "/warranty",
  // Placeholder ("coming soon") page — keep out of the index until concrete
  // repair-terms content exists. Re-enable indexing when populated.
  noindex: true,
});

const faqs = [
  {
    question: "Do you offer a warranty on stove repairs?",
    answer:
      "Repair terms, including any assurance on parts or workmanship, are discussed and confirmed for your specific job before work begins. Because stoves, parts, and faults differ, we don't advertise a single fixed guarantee length. Ask us about the terms that would apply to your repair.",
  },
  {
    question: "What about manufacturer warranties on parts?",
    answer:
      "Many replacement components carry their own manufacturer coverage that is separate from anything we discuss. If a part we install has manufacturer terms, we'll point you to what those are so you know what the maker stands behind.",
  },
  {
    question: "When are repair terms confirmed?",
    answer:
      "Before any work starts. After diagnosis, we review the proposed repair, the estimate, and the terms that apply, and you decide whether to proceed. Nothing is finalized until you've agreed to it.",
  },
  {
    question: "What should I ask before approving a repair?",
    answer:
      "Ask what part is being replaced and why, what the repair is expected to resolve, what it will cost, and what happens if the same issue returns. We're happy to walk through each of these before you make a decision.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Repair Terms", href: "/warranty/" }]} />
      <PageHero
        eyebrow="Repair Terms"
        title="Stove Repair Terms &amp; What to Expect"
        intro="Here's how we handle repair terms, parts, and any workmanship assurances — clearly, and confirmed with you before any work begins."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We don&apos;t advertise a one-size-fits-all guarantee. Instead, the terms for your stove repair &mdash;
            covering parts, labor, and any workmanship assurance &mdash; are discussed and confirmed for your specific
            job before work starts. This page explains what to expect and what to ask about.
          </QuickAnswer>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">How we handle repair terms</h2>
            <p className="text-ink-soft leading-relaxed">
              Every stove, fault, and replacement part is a little different, so we prefer to be specific rather than
              make broad marketing promises. After we diagnose the problem, we&apos;ll explain the proposed repair and
              review any terms that would apply, including how parts and labor are handled. You approve the plan before
              we proceed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Parts and components</h2>
            <p className="text-ink-soft leading-relaxed">
              When a repair needs a replacement part, we&apos;ll tell you what it is and why. Some parts carry their own
              manufacturer coverage separate from our work; where that applies, we&apos;ll point you to it so you know
              what the maker stands behind.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Questions worth asking</h2>
            <p className="text-ink-soft leading-relaxed">
              Before approving any repair, it&apos;s reasonable to ask what&apos;s being fixed, what it should resolve,
              what it costs, and what happens if the same symptom comes back. We welcome those questions and will answer
              them plainly so you can make an informed decision.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </Container>
      </Section>
      <CTASection source="warranty" />
    </>
  );
}

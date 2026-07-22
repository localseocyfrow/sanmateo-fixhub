import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { ComparisonBlock } from "@/components/ui/ComparisonBlock";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Cost in San Mateo, CA — Pricing Guide",
  description:
    "What drives stove repair cost in San Mateo? SanMateo FixHub explains the factors behind pricing for gas and electric stoves and how we quote before any work begins.",
  path: "/stove-repair-cost-san-mateo-ca",
});

const factors = [
  { icon: "wrench", title: "The Failed Part", detail: "An igniter, surface element, switch, valve, or control board each carry different part costs and labor." },
  { icon: "range", title: "Brand & Model", detail: "Mainstream brands often have widely available parts; pro-style and specialty ranges can require specific components." },
  { icon: "flame", title: "Gas vs. Electric", detail: "Gas repairs range from an igniter or spark module to a valve or gas-flow fault, while electric work covers elements, receptacles, or wiring — each differs in complexity and safety steps." },
  { icon: "search", title: "Diagnosis & Access", detail: "Time to diagnose the fault and reach the component affects the overall repair." },
] as const;

const faqs = [
  { question: "How much does stove repair cost in San Mateo?", answer: "There isn't a single fixed price. Stove repair cost depends on the failed part, the brand and model, whether it's gas or electric, and the diagnosis involved. We provide a clear estimate before any work begins." },
  { question: "How much does gas stove repair cost?", answer: "Gas stove repair cost depends on the specific fault — an igniter, spark module, valve, or burner assembly — along with the parts involved and their availability, the brand and model, and the on-site diagnosis. We explain the likely repair and give a clear estimate before any work begins, and we never guess with your gas system." },
  { question: "Do you charge for a diagnosis?", answer: "Diagnosis terms are explained up front when you contact us, so you know what to expect before we start. We won't proceed with a repair without your agreement." },
  { question: "Is it cheaper to repair or replace a stove?", answer: "It depends on the fault, the age of the stove, and the part cost. A single failed igniter or element is usually a straightforward repair, while multiple major failures on an older unit can tip toward replacement. We help you weigh it." },
  { question: "Why can't you give an exact price online?", answer: "An honest price needs the actual symptom and, in most cases, an on-site look at the stove. Quoting a fixed number sight-unseen would risk being wrong. We give a clear estimate once we understand the problem." },
];

const comparison = {
  title: "Stove Repair vs. Replacement",
  intro: "A quick way to think about whether repair makes sense.",
  leftLabel: "Lean Toward Repair",
  rightLabel: "Consider Replacement",
  rows: [
    { aspect: "Fault", left: "A single failed part (igniter, element, switch)", right: "Several major components failing at once" },
    { aspect: "Age", left: "Stove is within typical service life", right: "Stove is well past its expected lifespan" },
    { aspect: "Cost balance", left: "Repair is a fraction of a new stove", right: "Repair approaches the cost of replacing" },
    { aspect: "Availability", left: "Parts are readily available", right: "Parts are discontinued or hard to source" },
  ],
};

export default function CostPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Stove Repair Cost", href: "/stove-repair-cost-san-mateo-ca/" }]} />
      <PageHero eyebrow="Pricing Guidance · San Mateo, CA" title="Stove Repair Cost in San Mateo, CA" />
      <Section tint="white">
        <Container className="max-w-3xl space-y-10">
          <QuickAnswer>
            Stove repair cost in San Mateo depends on the failed part, the stove&apos;s brand and model, whether it&apos;s gas
            or electric, and the diagnosis involved — not a single flat rate. SanMateo FixHub explains the likely repair
            and gives you a clear estimate before any work starts, so there are no surprises.
          </QuickAnswer>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">What Affects Stove Repair Cost</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {factors.map((f) => (
                <div key={f.title} className="rounded-2xl border border-line bg-surface p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-copper-600 shadow-soft"><Icon name={f.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-3 font-bold text-navy-800">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-l-4 border-teal-600 bg-teal-50 p-6">
            <h2 className="text-xl font-bold text-navy-800">How We Quote</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              We start with your description of the symptom, confirm the likely cause, and explain the repair and estimate
              before proceeding. You approve the work first — we don&apos;t surprise you with charges after the fact. We
              don&apos;t publish fixed prices because an honest number depends on the actual fault and stove.
            </p>
          </div>

          <ComparisonBlock data={comparison} />

          <FAQAccordion faqs={faqs} heading="Stove Repair Cost FAQs" />

          <RelatedLinks
            title="Related Pages"
            links={[
              { label: "Stove Repair", href: "/services/stove-repair-san-mateo-ca/", description: "The core stove repair service." },
              { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Igniters, valves, and gas-flow faults." },
              { label: "Common Stove Problems", href: "/problems/", description: "Match your symptom to a likely fix." },
              { label: "Our Repair Process", href: "/repair-process/", description: "What to expect from start to finish." },
              { label: "Request Service", href: "/contact/", description: "Get a clear estimate for your stove." },
            ]}
          />
        </Container>
      </Section>
      <CTASection heading="Get a Clear Estimate for Your Stove" source="cost-page" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}

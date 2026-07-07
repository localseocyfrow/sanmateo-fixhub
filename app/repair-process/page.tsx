import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Our Stove Repair Process — SanMateo FixHub",
  description:
    "See how SanMateo FixHub approaches stove repair in San Mateo: from your first description of the symptom to on-site diagnosis, a clear estimate, and a focused repair.",
  path: "/repair-process",
});

const steps = [
  { title: "Tell Us the Symptom", body: "Call or send a request describing what your stove is doing. The clearer the symptom, the faster we can narrow down the cause." },
  { title: "On-Site Diagnosis", body: "We inspect the burners, igniters, elements, controls, and gas or electrical connections to identify the real fault — not just the symptom." },
  { title: "Clear Estimate", body: "You get a plain-language explanation of what's wrong and an estimate before any repair is agreed. No surprises." },
  { title: "Focused Repair", body: "With your approval, we repair the failed part or component and carry out safety checks appropriate to your stove type." },
];

const expectations = [
  { icon: "search", title: "Diagnosis Before Repair", body: "We identify the cause first so the repair addresses the real problem." },
  { icon: "check", title: "Your Approval", body: "Work only proceeds after you understand the issue and agree to the estimate." },
  { icon: "shield", title: "Safety Checks", body: "Gas and electrical stove work includes appropriate safety verification." },
  { icon: "phone", title: "Straight Answers", body: "Clear communication in plain language at every step." },
] as const;

export default function RepairProcessPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Repair Process", href: "/repair-process/" }]} />
      <PageHero eyebrow="How It Works" title="Our Stove Repair Process" intro="A clear, no-pressure path from symptom to repair — built around getting the diagnosis right." />
      <Section tint="surface">
        <Container>
          <div className="mx-auto max-w-3xl">
            <QuickAnswer>
              SanMateo FixHub follows a simple four-step stove repair process: you describe the symptom, we diagnose the
              real cause on site, we explain the problem and give a clear estimate, and — with your approval — we carry out
              a focused repair with the right safety checks for gas or electric stoves.
            </QuickAnswer>
          </div>
          <div className="mt-10">
            <ProcessSteps steps={steps} />
          </div>
        </Container>
      </Section>

      <Section tint="white">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">What You Can Expect</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {expectations.map((e) => (
              <div key={e.title} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name={e.icon} className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-bold text-navy-800">{e.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{e.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <RelatedLinks
              title="Helpful Next Steps"
              links={[
                { label: "What To Do Before Calling", href: "/blog/what-to-do-before-calling-stove-repair/", description: "Simple checks to do first." },
                { label: "Stove Repair Cost Guidance", href: "/stove-repair-cost-san-mateo-ca/", description: "What affects the price." },
                { label: "Emergency Stove Help", href: "/emergency-stove-help/", description: "When a problem can't wait." },
                { label: "Request Service", href: "/contact/", description: "Start your stove repair." },
              ]}
            />
          </div>
        </Container>
      </Section>
      <CTASection source="repair-process" />
    </>
  );
}

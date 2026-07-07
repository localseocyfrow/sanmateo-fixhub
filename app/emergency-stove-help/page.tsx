import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Emergency Stove Help & Safety Steps — San Mateo",
  description:
    "Urgent stove problem in San Mateo? Learn what to do right now for a gas smell, a burner stuck on, or a stove that won't shut off — plus how to reach SanMateo FixHub.",
  path: "/emergency-stove-help",
});

const urgent = [
  {
    icon: "alert" as const,
    title: "You smell gas",
    body: "Treat a strong gas smell as an emergency. Don't operate the stove, light switches, or anything electrical, and leave the area if the smell is strong.",
    action: "Contact PG&E at 1-800-743-5000 or call 911 first, then a qualified professional.",
  },
  {
    icon: "power" as const,
    title: "A burner won't turn off",
    body: "If a burner or element stays on and won't respond to the controls, turn off the stove at the wall or breaker if you can do so safely.",
    action: "Then request stove repair so the control fault can be diagnosed.",
  },
  {
    icon: "flame" as const,
    title: "Repeated ignition or sparking",
    body: "Continuous clicking or sparking that won't stop, or burners lighting on their own, should be checked promptly.",
    action: "Stop using the affected burner and contact us for diagnosis.",
  },
];

export default function EmergencyHelpPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Emergency Stove Help", href: "/emergency-stove-help/" }]} />
      <PageHero eyebrow="Urgent Stove Problems" title="Emergency Stove Help & Safety Steps" intro="What to do right now for the most urgent stove situations in San Mateo — and how to reach us." />
      <Section tint="white">
        <Container className="max-w-3xl space-y-10">
          <div className="rounded-2xl border-l-4 border-copper-600 bg-copper-50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy-800"><Icon name="alert" className="h-6 w-6 text-copper-600" /> If you smell gas, act first</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              A gas smell is the one stove situation to treat as an immediate safety issue. Do not use the stove or any
              electrical switches, leave the area if the smell is strong, and contact PG&amp;E at{" "}
              <strong>1-800-743-5000</strong> or call <strong>911</strong> before anything else. Read the full{" "}
              <Link href="/problems/gas-smell-from-stove/" className="font-semibold text-navy-700 underline">gas smell safety steps</Link>.
            </p>
          </div>

          <QuickAnswer>
            For an urgent stove problem in San Mateo, prioritize safety first. Treat any gas smell as an emergency and
            contact PG&amp;E or 911. For a burner stuck on or a stove that won&apos;t shut off, turn it off at the wall or
            breaker if safe, then request stove repair. SanMateo FixHub can help you check availability and next steps.
          </QuickAnswer>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Urgent Situations &amp; What To Do</h2>
            <div className="mt-4 space-y-4">
              {urgent.map((u) => (
                <div key={u.title} className="rounded-2xl border border-line bg-surface p-5">
                  <h3 className="flex items-center gap-2 font-bold text-navy-800"><Icon name={u.icon} className="h-5 w-5 text-copper-600" /> {u.title}</h3>
                  <p className="mt-2 text-ink-soft">{u.body}</p>
                  <p className="mt-2 text-sm font-semibold text-navy-700">{u.action}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy-800 p-6 text-white">
            <h2 className="text-xl font-bold">A note on availability</h2>
            <p className="mt-2 text-navy-100">
              We help you check current availability when you call — we don&apos;t make blanket promises about response
              times. For anything involving a gas leak or immediate danger, always contact your gas utility or emergency
              services first.
            </p>
          </div>

          <RelatedLinks
            title="Related Help"
            links={[
              { label: "Emergency Stove Repair", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Fast help for urgent stove faults." },
              { label: "Gas Smell From Stove", href: "/problems/gas-smell-from-stove/", description: "Full safety steps." },
              { label: "Stove Keeps Shutting Off", href: "/problems/stove-keeps-shutting-off/", description: "Why it happens." },
              { label: "Stove Safety Tips", href: "/safety/", description: "Everyday stove safety." },
            ]}
          />
        </Container>
      </Section>
      <CTASection heading="Need Urgent Stove Help in San Mateo?" source="emergency-help" />
    </>
  );
}

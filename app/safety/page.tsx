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
  title: "Stove Safety Tips for San Mateo Homes",
  description:
    "Practical gas and electric stove safety tips from SanMateo FixHub — how to recognize warning signs, what to avoid, and when a stove problem needs a professional.",
  path: "/safety",
});

const tips = [
  { icon: "alert", title: "Take gas smells seriously", body: "A persistent gas odor is never routine. Don't use switches or flames, ventilate or leave if strong, and contact PG&E (1-800-743-5000) or 911 before troubleshooting." },
  { icon: "flame", title: "Watch the flame color", body: "A healthy gas flame is mostly blue. Large yellow or orange flames, or heavy sooting, are worth having checked." },
  { icon: "spark", title: "Don't ignore persistent clicking", body: "Occasional clicking during ignition is normal; constant clicking or sparking that won't stop points to a fault worth diagnosing." },
  { icon: "power", title: "Keep controls responsive", body: "A burner or element that won't turn off, or responds erratically, should be switched off at the wall or breaker if safe and then inspected." },
  { icon: "burner", title: "Keep burners and vents clear", body: "Spills, food debris, and blocked burner ports can affect ignition and heating. Clean only when the stove is cool." },
  { icon: "shield", title: "Know your limits", body: "Simple cleaning and checking knobs is fine. Gas lines, valves, and internal wiring should be left to a qualified professional." },
] as const;

export default function SafetyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Safety", href: "/safety/" }]} />
      <PageHero eyebrow="Stove Safety" title="Stove Safety Tips for San Mateo Homes" intro="Simple, practical guidance to help you use gas and electric stoves safely — and recognize when to call for help." />
      <Section tint="white">
        <Container className="max-w-3xl space-y-10">
          <QuickAnswer>
            The most important stove safety rule: treat any gas smell as an emergency and contact PG&amp;E at
            1-800-743-5000 or 911 before troubleshooting. Beyond that, watch for unusual flame color, constant clicking,
            unresponsive controls, and heat or burning smells — and leave gas line and internal electrical work to a
            professional like SanMateo FixHub.
          </QuickAnswer>

          <div className="grid gap-4 sm:grid-cols-2">
            {tips.map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-copper-600 shadow-soft"><Icon name={t.icon} className="h-5 w-5" /></span>
                <h3 className="mt-3 font-bold text-navy-800">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-l-4 border-copper-600 bg-copper-50 p-6">
            <h2 className="text-xl font-bold text-navy-800">When to stop and call for help</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              If you smell gas, see repeated sparking, notice scorching or a burning smell, or a burner won&apos;t shut off,
              stop using the stove. For gas or immediate danger, contact your utility or emergency services first, then
              reach out for repair. See our{" "}
              <Link href="/emergency-stove-help/" className="font-semibold text-navy-700 underline">emergency stove help</Link> page.
            </p>
          </div>

          <RelatedLinks
            title="Related Guides"
            links={[
              { label: "Gas Smell From Stove", href: "/problems/gas-smell-from-stove/", description: "Full safety steps." },
              { label: "Stove Keeps Shutting Off", href: "/problems/stove-keeps-shutting-off/", description: "A symptom worth checking promptly." },
              { label: "Emergency Stove Help", href: "/emergency-stove-help/", description: "Urgent situations." },
              { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Ignition and burner service." },
            ]}
          />
        </Container>
      </Section>
      <CTASection source="safety" />
    </>
  );
}

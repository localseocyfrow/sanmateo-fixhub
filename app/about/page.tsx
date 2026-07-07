import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About SanMateo FixHub — Stove Repair Specialists",
  description:
    "SanMateo FixHub is a stove repair specialist for San Mateo and the Peninsula, focused only on gas and electric stoves, ranges, and cooktops. Learn our approach.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />
      <PageHero
        eyebrow="About Us"
        title="About SanMateo FixHub Stove Repair"
        intro="We focus on one thing: helping people in San Mateo and across the Peninsula diagnose and repair stove problems the right way."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            SanMateo FixHub is a stove repair specialist serving {site.primaryCity} and the surrounding Peninsula. We
            work on gas and electric stoves, ranges, and cooktops &mdash; not the full appliance catalog. Our approach
            starts with careful diagnosis so you understand the problem before any repair is confirmed.
          </QuickAnswer>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">What we do</h2>
            <p className="text-ink-soft leading-relaxed">
              We specialize in cooking-appliance repair: gas stoves, electric stoves, freestanding and slide-in ranges,
              and cooktops. That includes issues like burners that won&apos;t ignite, weak or uneven flames, clicking
              igniters, radiant and induction element faults, and control or knob problems. Because stoves are our
              focus, our questions, tools, and parts knowledge stay pointed at the appliance in front of you.
            </p>
            <p className="text-ink-soft leading-relaxed">
              We are not a broad handyman or general appliance service, and we don&apos;t claim to fix everything. If a
              problem falls outside stove, range, and cooktop repair, we&apos;ll tell you plainly rather than stretch
              beyond what we do well.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Our diagnosis-first approach</h2>
            <p className="text-ink-soft leading-relaxed">
              Good stove repair begins with understanding the cause, not guessing at parts. We aim to identify what is
              actually failing &mdash; an igniter, a switch, a burner assembly, a control board, or something simpler
              &mdash; and explain it in plain language. Any repair scope and estimate are reviewed and confirmed with
              you before work begins, so there are no surprises.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Who we help</h2>
            <p className="text-ink-soft leading-relaxed">
              We help homeowners and renters with everyday kitchen stoves, as well as small businesses such as cafes and
              small kitchens that depend on reliable cooking equipment. Whether it&apos;s a single stubborn burner or a
              range that has stopped heating, the goal is the same: an honest diagnosis and a clear path forward.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Service area</h2>
            <p className="text-ink-soft leading-relaxed">
              We serve {site.primaryCity} and nearby Peninsula communities including {site.serviceAreas.slice(1, 7).join(", ")},
              and other parts of {site.county}. If you&apos;re nearby and unsure whether we cover your area, just ask.
            </p>
          </div>

          <RelatedLinks
            title="Explore more"
            columns={2}
            links={[
              { label: "Our repair process", href: "/repair-process/", description: "How a stove diagnosis and repair works." },
              { label: "Common stove problems", href: "/problems/", description: "Symptoms we help diagnose." },
              { label: "Brands we service", href: "/brands-we-service/", description: "Our approach to brand coverage." },
              { label: "Contact us", href: "/contact/", description: "Request stove service or ask a question." },
            ]}
          />
        </Container>
      </Section>
      <CTASection source="about" />
    </>
  );
}

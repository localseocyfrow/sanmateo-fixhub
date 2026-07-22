import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema, faqSchema } from "@/lib/schema";
import { services, cityLocations, getService, getProblem, globalFaqs } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { DefinitionBlock } from "@/components/ui/DefinitionBlock";
import { ServiceCard, ProblemCard, LocationCard } from "@/components/cards/Cards";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { LeadSmartForm } from "@/components/LeadSmartForm";
import { LinkButton, CallButton } from "@/components/ui/Buttons";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair San Mateo CA | Gas & Electric Stove Specialists",
  description:
    "SanMateo FixHub helps diagnose gas stove, electric stove, range, and cooktop problems in San Mateo, CA. Specialist stove repair for homes and businesses across the Peninsula.",
  path: "/",
});

const featuredServiceSlugs = [
  "stove-repair-san-mateo-ca",
  "gas-stove-repair-san-mateo-ca",
  "electric-stove-repair-san-mateo-ca",
  "range-repair-san-mateo-ca",
  "cooktop-repair-san-mateo-ca",
  "igniter-repair-san-mateo-ca",
];

const featuredProblemSlugs = [
  "stove-not-heating",
  "stove-clicking-but-not-lighting",
  "burner-not-working",
  "gas-smell-from-stove",
  "electric-stove-not-heating",
  "stove-wont-turn-on",
];

const diagnoseSteps = [
  { title: "Describe the Symptom", body: "Tell us what your stove is doing — clicking, not heating, a gas smell, or a dead burner. Clear symptoms speed up diagnosis." },
  { title: "On-Site Inspection", body: "A hands-on check of burners, igniters, elements, controls, and gas or electrical connections to find the real cause." },
  { title: "Clear Explanation", body: "You get a plain-language explanation of what's wrong and the repair options before any work is agreed." },
  { title: "Focused Repair", body: "Repair centers on the failed part or component, with safety checks appropriate to gas or electric stoves." },
];

const whyChoose: { icon: IconName; title: string; body: string }[] = [
  { icon: "flame", title: "Stove Specialists", body: "We focus on gas and electric stoves, ranges, and cooktops — not a bit of everything. That focus shows in the diagnosis." },
  { icon: "search", title: "Diagnosis First", body: "We explain what's actually wrong in plain language before any repair is agreed, so you can make an informed decision." },
  { icon: "shield", title: "Safety-Aware", body: "Gas and electrical stove work is handled with the caution it deserves, including clear guidance when a problem is urgent." },
  { icon: "stove", title: "Homes & Businesses", body: "From single-family kitchens to small commercial kitchens across San Mateo and the Peninsula." },
];

export default function Home() {
  const homeFaqs = globalFaqs.slice(0, 6);

  return (
    <>
      <Hero />

      {/* 2. Quick Answer + definition (AEO) */}
      <Section tint="surface" className="!py-12">
        <Container className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <QuickAnswer>
            SanMateo FixHub provides specialist stove repair in San Mateo, CA for gas stoves, electric stoves, ranges,
            and cooktops. We help diagnose problems like a stove not heating, a stove clicking but not lighting, or a
            dead burner, then guide you toward the right repair for homes and businesses across the Peninsula.
          </QuickAnswer>
          <DefinitionBlock term="Stove Repair">
            Stove repair is the diagnosis and correction of faults in a stove&apos;s cooking system — gas burners and
            igniters, electric elements and switches, control boards, gas valves, and pilot lights. It restores safe,
            even heating and often fixes the failed part without replacing the whole appliance.
          </DefinitionBlock>
        </Container>
      </Section>

      {/* 3. Stove Repair in San Mateo */}
      <Section tint="white" className="!pt-8">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow="Stove Repair San Mateo" title="Local Stove Repair Specialists in San Mateo, CA" />
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              <p>
                When a stove stops working, the whole kitchen slows down. SanMateo FixHub is a specialist stove repair
                service focused on gas stoves, electric stoves, ranges, and cooktops in San Mateo and nearby Peninsula
                communities. Instead of guessing, we help pinpoint what&apos;s actually wrong so the right repair happens.
              </p>
              <p>
                From ignition and burner faults to elements, control boards, and pilot lights, our work centers on the
                cooking side of your appliance. Explore the individual services below, or call now and we&apos;ll help you
                figure out next steps.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/services/stove-repair-san-mateo-ca/" variant="secondary">Explore Stove Repair</LinkButton>
              <CallButton variant="primary" source="home-intro" />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">Popular Stove Repair Services</h3>
            <ul className="mt-4 space-y-2">
              {featuredServiceSlugs.slice(0, 6).map((slug) => {
                const s = getService(slug);
                if (!s) return null;
                return (
                  <li key={slug}>
                    <Link href={`/services/${s.slug}/`} className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 font-semibold text-navy-800 shadow-soft transition hover:text-copper-700">
                      <span className="flex items-center gap-2">
                        <Icon name={s.icon} className="h-5 w-5 text-copper-600" />
                        {s.name}
                      </span>
                      <span aria-hidden className="text-copper-600">→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 4. Common Stove Problems We Help Diagnose */}
      <Section tint="surface">
        <Container>
          <SectionHeading eyebrow="Symptoms" title="Common Stove Problems We Help Diagnose" intro="Recognize what your stove is doing? Start with the symptom, then see the likely causes and safe next steps." align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProblemSlugs.map((slug) => {
              const p = getProblem(slug);
              return p ? <ProblemCard key={slug} problem={p} /> : null;
            })}
          </div>
          <div className="mt-8 text-center">
            <LinkButton href="/problems/" variant="outline">See All Stove Problems</LinkButton>
          </div>
        </Container>
      </Section>

      {/* 5 & 6. Gas + Electric */}
      <Section tint="white">
        <Container className="grid gap-6 lg:grid-cols-2">
          <FuelCard
            icon="flame"
            title="Gas Stove Repair in San Mateo"
            body="Clicking igniters, burners that won't light, weak or yellow flames, and gas flow issues are common on gas stoves. We diagnose the ignition and burner system and handle gas work with appropriate caution."
            href="/services/gas-stove-repair-san-mateo-ca/"
            cta="Gas Stove Repair"
          />
          <FuelCard
            icon="bolt"
            title="Electric Stove Repair in San Mateo"
            body="Elements that won't heat, slow heating, or a burner stuck on can point to coils, radiant elements, switches, or connections. We track down the electric fault behind the symptom."
            href="/services/electric-stove-repair-san-mateo-ca/"
            cta="Electric Stove Repair"
          />
        </Container>
      </Section>

      {/* 7. Emergency + 8. Range/Cooktop */}
      <Section tint="navy">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-600"><Icon name="alert" className="h-7 w-7 text-white" /></span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white">Emergency Stove Repair &amp; Fast Help</h2>
            <p className="mt-3 leading-relaxed text-navy-100">
              Some stove problems can&apos;t wait — a burner stuck on, a stove that keeps shutting off, or a gas smell. We
              help you understand what&apos;s urgent, what to do right now, and how to check availability for fast stove
              repair in San Mateo.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/services/emergency-stove-repair-san-mateo-ca/" variant="primary">Emergency Stove Repair</LinkButton>
              <LinkButton href="/emergency-stove-help/" variant="ghostLight">What To Do Now</LinkButton>
            </div>
          </div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600"><Icon name="range" className="h-7 w-7 text-white" /></span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white">Range &amp; Cooktop Repair</h2>
            <p className="mt-3 leading-relaxed text-navy-100">
              Whether you have a freestanding range that combines oven and cooktop, or a built-in cooktop set into the
              counter, we repair the cooking surface — burners, elements, ignition, and controls.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/services/range-repair-san-mateo-ca/" variant="primary">Range Repair</LinkButton>
              <LinkButton href="/services/cooktop-repair-san-mateo-ca/" variant="ghostLight">Cooktop Repair</LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* All services grid */}
      <Section tint="surface">
        <Container>
          <SectionHeading eyebrow="Full service list" title="Every Stove Repair Service We Offer" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Why fast repair */}
      <Section tint="white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why it matters" title="Why San Mateo Kitchens Need Fast Stove Repair" />
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              <p>
                A stove is one of the hardest appliances to live without. In busy San Mateo and Peninsula households, even
                a single dead burner disrupts daily cooking, and a partial fault can quietly get worse over time.
              </p>
              <p>
                Gas issues in particular deserve prompt attention for safety, and electrical faults can stress other
                components if left unaddressed. Diagnosing the problem early usually keeps the repair more focused.
              </p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "clock" as IconName, t: "Less Disruption", b: "Get your kitchen back to normal cooking sooner." },
              { icon: "shield" as IconName, t: "Safety Awareness", b: "Gas and electrical faults handled with proper caution." },
              { icon: "wrench" as IconName, t: "Focused Repairs", b: "Catching issues early often keeps the fix contained." },
              { icon: "check" as IconName, t: "Clear Guidance", b: "Know what's wrong and what your options are." },
            ].map((i) => (
              <li key={i.t} className="rounded-2xl border border-line bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-copper-600 shadow-soft"><Icon name={i.icon} className="h-5 w-5" /></span>
                <h3 className="mt-3 font-bold text-navy-800">{i.t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{i.b}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 10 & 11. How we diagnose + process */}
      <Section tint="surface">
        <Container>
          <SectionHeading eyebrow="Our approach" title="How SanMateo FixHub Diagnoses Stove Issues" intro="A clear, four-step path from symptom to repair — no guesswork, no pressure." align="center" />
          <div className="mt-10">
            <ProcessSteps steps={diagnoseSteps} />
          </div>
          <div className="mt-8 text-center">
            <LinkButton href="/repair-process/" variant="secondary">See Our Full Repair Process</LinkButton>
          </div>
        </Container>
      </Section>

      {/* 13. Cost */}
      <Section tint="navy">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Pricing" title="Stove Repair Cost &amp; Pricing Guidance" invert />
            <p className="mt-4 leading-relaxed text-navy-100">
              Stove repair cost depends on the part involved, the brand and model, and the complexity of the diagnosis.
              We explain the likely repair and give you a clear estimate before any work begins — no surprise charges.
            </p>
            <div className="mt-6">
              <LinkButton href="/stove-repair-cost-san-mateo-ca/" variant="primary">See Cost Guidance</LinkButton>
            </div>
          </div>
          <ul className="space-y-3">
            {["What part or component has failed", "The stove brand and model", "Gas vs. electric complexity", "Diagnosis and access time"].map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-navy-100">
                <Icon name="check" className="h-5 w-5 text-copper-400" /> {f}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 14. Service areas */}
      <Section tint="surface">
        <Container>
          <SectionHeading eyebrow="Service areas" title="Stove Repair Service Areas Near San Mateo" intro="SanMateo FixHub serves San Mateo and communities across the Peninsula." align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityLocations().map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <LinkButton href="/locations/" variant="outline">All Service Areas</LinkButton>
          </div>
        </Container>
      </Section>

      {/* 15. Why choose */}
      <Section tint="white">
        <Container>
          <SectionHeading eyebrow="Why SanMateo FixHub" title="Why Choose SanMateo FixHub for Stove Repair" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl border border-line bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name={w.icon} className="h-6 w-6" /></span>
                <h3 className="mt-4 font-bold text-navy-800">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 16. FAQs */}
      <Section tint="surface">
        <Container className="max-w-3xl">
          <FAQAccordion faqs={homeFaqs} heading="Stove Repair FAQs" />
          <div className="mt-6 text-center">
            <Link href="/faq/" className="font-semibold text-copper-700 hover:underline">See all frequently asked questions →</Link>
          </div>
        </Container>
      </Section>

      {/* Request form — conversion */}
      <Section tint="white" id="request-service">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Request Service"
              title="Book Stove Repair in San Mateo"
              intro="Tell us what your stove is doing and we'll help you check availability and next steps. Prefer to talk it through now? Calling is the fastest way to reach us."
            />
            <ul className="mt-6 space-y-3">
              {[
                { icon: "flame" as IconName, t: "Gas & electric stoves, ranges & cooktops" },
                { icon: "search" as IconName, t: "Clear diagnosis before any repair" },
                { icon: "stove" as IconName, t: "Homes & small commercial kitchens" },
                { icon: "shield" as IconName, t: "Safety-aware gas & electrical work" },
              ].map((i) => (
                <li key={i.t} className="flex items-center gap-3 text-ink-soft">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                    <Icon name={i.icon} className="h-5 w-5" />
                  </span>
                  {i.t}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <CallButton variant="primary" source="home-form" />
            </div>
          </div>
          <LeadSmartForm variant="standard" />
        </Container>
      </Section>

      {/* 17. Final CTA */}
      <CTASection source="home-footer" />

      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs)]} />
    </>
  );
}

function FuelCard({ icon, title, body, href, cta }: { icon: IconName; title: string; body: string; href: string; cta: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name={icon} className="h-7 w-7" /></span>
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-800">{title}</h2>
      <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{body}</p>
      <div className="mt-5">
        <LinkButton href={href} variant="secondary">{cta}</LinkButton>
      </div>
    </div>
  );
}

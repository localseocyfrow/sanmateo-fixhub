import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema, faqSchema, homeHeroImage } from "@/lib/schema";
import { services, getProblem, globalFaqs } from "@/lib/content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { DefinitionBlock } from "@/components/ui/DefinitionBlock";
import { ProblemCard } from "@/components/cards/Cards";
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

const featuredProblemSlugs = [
  "stove-not-heating",
  "stove-clicking-but-not-lighting",
  "burner-not-working",
  "gas-smell-from-stove",
  "electric-stove-not-heating",
  "stove-wont-turn-on",
];

// Customer-oriented framing of the four steps. Deliberately makes no claim that
// a repair finishes on the first visit or that parts are always on hand.
const diagnoseSteps = [
  { title: "Tell Us the Symptom", body: "Clicking without lighting, a dead burner, no heat, a gas smell. The clearer the symptom, the quicker this goes." },
  { title: "The Stove Gets Inspected", body: "A technician checks it in person — burners, igniters, elements, switches, controls, and the connections behind them." },
  { title: "You Hear What's Wrong", body: "The fault is explained in plain language, with the repair options and an estimate, before anything is approved." },
  { title: "The Approved Repair", body: "Work focuses on the part that actually failed, with safety checks suited to gas or electric." },
];

// Each item maps to a fact verified elsewhere in the repo:
//  • stove-only focus ....... content/faqs.ts "Do you only work on stoves…"
//  • diagnosis first ........ content/faqs.ts "How does the diagnosis process work?"
//  • estimate before work ... app/terms/page.tsx "Estimates and repairs"
//  • 24/7 phone ............. lib/site.ts hours + emergencyAvailable/sameDayAvailable
// Nothing here asserts licensing, insurance, warranty, tenure, or ratings.
const whyChoose: { icon: IconName; title: string; body: string }[] = [
  { icon: "flame", title: "Stoves, Ranges & Cooktops Only", body: "Gas, electric, and dual-fuel cooking appliances are the whole focus here. If a job falls outside that, we say so." },
  { icon: "search", title: "Diagnosis Before Repair", body: "A technician inspects the appliance and tests the relevant parts first. Nothing is quoted sight unseen." },
  { icon: "check", title: "Estimate Before Any Work", body: "Scope and estimate are confirmed once the fault is known, and nothing proceeds without your approval." },
  { icon: "phone", title: "Reachable Around the Clock", body: `The line is open 24/7 on ${site.phone.display} — check same-day and emergency availability whenever the problem starts.` },
];

// Safe, non-invasive checks only — each drawn from existing site content
// (content/faqs.ts "What information should I have ready", content/problems.ts
// breaker and burner-cap guidance). No gas, wiring, or disassembly steps.
const beforeYouCall: { icon: IconName; title: string; body: string }[] = [
  { icon: "burner", title: "Pin down what's affected", body: "One burner or all of them? Cooktop, oven, or both? That alone narrows it a long way." },
  { icon: "range", title: "Find the brand and model", body: "Usually on a plate around the door frame, drawer, or underside. It tells us which parts the unit uses." },
  { icon: "board", title: "Note any error code", body: "A code on the display narrows things fast — a photo of it works just as well." },
  { icon: "bolt", title: "Check the breaker once — electric only", body: "If a tripped breaker resets and holds, that may be the whole story. If it trips again, leave it off and tell us." },
  { icon: "flame", title: "Check a cool burner cap — gas only", body: "Once the burner is completely cool, check the cap sits squarely in place. Out of position, it often explains clicking that never lights." },
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
        {/* The services box now carries all 10 entries, so it gets a slightly larger
            share than the copy column — enough for two columns of full-length service
            names on wide desktops without truncation. */}
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Stove Repair San Mateo" title="Local Stove Repair Specialists in San Mateo, CA" />
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              <p>
                When a stove stops working, the whole kitchen slows down. SanMateo FixHub works on cooking appliances
                and nothing else — gas stoves, electric stoves, ranges, and cooktops across the Peninsula.
              </p>
              <p>
                That focus is deliberate. Everything centers on the cooking side of the unit: igniters and burner
                assemblies, heating elements, control boards, pilot lights. Browse the services below, or call and
                we&apos;ll narrow it down together.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/services/stove-repair-san-mateo-ca/" variant="secondary">Explore Stove Repair</LinkButton>
              <CallButton variant="primary" source="home-intro" />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">Popular Stove Repair Services</h3>
            {/* Every service, straight from content/services.ts — slugs and icons come
                from the data so the links can't drift. Two columns wherever the box is
                actually wide enough (full-width below lg, and again from xl up); one
                column at lg, where the box is the narrow right-hand cell. */}
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="flex h-full min-h-[48px] items-center justify-between gap-2 rounded-lg bg-white px-3 py-3 text-sm font-semibold text-navy-800 shadow-soft transition hover:text-copper-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:px-4 sm:text-[0.95rem] xl:px-3 xl:text-sm"
                  >
                    <span className="flex min-w-0 items-center gap-1.5">
                      <Icon name={s.icon} className="h-5 w-5 shrink-0 text-copper-600" />
                      <span>{s.name}</span>
                    </span>
                    <span aria-hidden className="shrink-0 text-copper-600">→</span>
                  </Link>
                </li>
              ))}
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
            body="A clicking igniter that never catches, a cold burner, or a weak yellow flame usually traces to the ignition system — the spark module and igniter, the burner cap and its ports, or the gas valve behind them. Gas work gets the caution it deserves."
            href="/services/gas-stove-repair-san-mateo-ca/"
            cta="Gas Stove Repair"
          />
          <FuelCard
            icon="bolt"
            title="Electric Stove Repair in San Mateo"
            body="An element that won't heat, warms slowly, or stays stuck on points somewhere along the electric path: the coil or radiant element, the burner switch, the receptacle and wiring, or the control board. We trace it rather than swapping parts and hoping."
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
              Some faults can&apos;t wait — a burner stuck on, a stove that keeps shutting off, a gas smell. We&apos;ll
              help you tell what&apos;s urgent and what to do right now.
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
              A freestanding or slide-in range combines oven and cooking surface; a built-in cooktop sits in the counter
              on its own. Either way the surface is gas burners, electric coils, or a glass radiant top, and each fails
              differently. Repair covers the burners, elements, ignition, and controls.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/services/range-repair-san-mateo-ca/" variant="primary">Range Repair</LinkButton>
              <LinkButton href="/services/cooktop-repair-san-mateo-ca/" variant="ghostLight">Cooktop Repair</LinkButton>
            </div>
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
                A stove is one of the hardest appliances to live without, and a partial fault usually worsens quietly
                rather than all at once. Gas problems deserve prompt attention for safety; an electrical fault left
                alone can stress the parts around it.
              </p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "clock" as IconName, t: "Less Disruption", b: "Back to normal cooking sooner." },
              { icon: "shield" as IconName, t: "Safety Awareness", b: "Gas and electrical faults treated with caution." },
              { icon: "wrench" as IconName, t: "Focused Repairs", b: "Caught early, the fix usually stays contained." },
              { icon: "check" as IconName, t: "Clear Guidance", b: "You know the fault and your options." },
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
          <SectionHeading eyebrow="Our approach" title="How SanMateo FixHub Diagnoses Stove Issues" intro="From symptom to repair, without guesswork or pressure." align="center" />
          <div className="mt-10">
            <ProcessSteps steps={diagnoseSteps} />
          </div>
          <div className="mt-8 text-center">
            <LinkButton href="/repair-process/" variant="secondary">See Our Full Repair Process</LinkButton>
          </div>
        </Container>
      </Section>

      {/* Before you call — safe, non-invasive checks only. Sources: content/faqs.ts
          ("What information should I have ready before I call?"), content/problems.ts
          (breaker + burner-cap guidance), app/safety. No gas or wiring instructions. */}
      <Section tint="white">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Be ready"
              title="Before You Call for Stove Repair"
              intro="A few details make the first call much shorter, and a couple of safe checks sometimes explain the fault outright."
            />
            <ul className="mt-6 space-y-3">
              {beforeYouCall.map((c) => (
                <li key={c.title} className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-copper-600 shadow-soft">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-navy-800">{c.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{c.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-l-4 border-copper-600 bg-copper-50 p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-copper-700 shadow-soft">
              <Icon name="alert" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-xl font-bold text-navy-800">Stop and get help instead if&hellip;</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
              {[
                "You smell gas, and it doesn't clear",
                "You see repeated sparking or scorching",
                "There's smoke or a burning smell",
                "A burner or element won't switch off",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-copper-700" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              For a gas smell, don&apos;t use switches or flames — leave and call PG&amp;E at 1-800-743-5000 or 911
              first. More in our{" "}
              <Link href="/safety/" className="font-semibold text-navy-700 underline">safety guide</Link> and{" "}
              <Link href="/emergency-stove-help/" className="font-semibold text-navy-700 underline">emergency steps</Link>.
            </p>
          </div>
        </Container>
      </Section>

      {/* 15. Why choose */}
      <Section tint="surface">
        <Container>
          <SectionHeading eyebrow="Why SanMateo FixHub" title="Why Choose SanMateo FixHub for Stove Repair" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name={w.icon} className="h-6 w-6" /></span>
                <h3 className="mt-4 font-bold text-navy-800">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About — describes scope, method and coverage only. No founding date, ownership,
          tenure, licensing, insurance or certification: none of that is verified anywhere
          in the repo, so none of it is claimed here. */}
      <Section tint="white">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="About us" title="About SanMateo FixHub" />
          <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
            <p>
              SanMateo FixHub is a stove repair service, and that is deliberately all it is: gas stoves, electric
              stoves, freestanding and slide-in ranges, and built-in cooktops — not the wider appliance catalog.
            </p>
            <p>
              Gas and electric units fail differently and get treated differently. A gas fault usually leads to the
              igniter, spark module, burner cap and ports, or the valve behind them; an electric one points toward
              elements, burner switches, wiring, or the control board. Describing the symptom first — what the stove
              does, and when it started — lets a technician arrive already narrowing things down, and an in-person
              inspection settles the rest.
            </p>
            <p>
              We cover San Mateo and nearby Peninsula communities across San Mateo County.{" "}
              <Link href="/about/" className="font-semibold text-copper-700 hover:underline">More about how we work →</Link>
            </p>
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
              intro="Tell us what your stove is doing and we'll help you check availability. Calling is the fastest way to reach us."
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

      <JsonLd data={[localBusinessSchema({ image: homeHeroImage }), faqSchema(homeFaqs)]} />
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

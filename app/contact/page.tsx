import type { Metadata } from "next";
import Link from "next/link";
import { site, clickToCall, mailTo, socialProfiles } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { RequestServiceForm } from "@/components/RequestServiceForm";
import { Icon } from "@/components/Icon";
import { SocialIcon } from "@/components/SocialIcons";

export const metadata: Metadata = buildMetadata({
  title: "Contact SanMateo FixHub — Request Stove Repair",
  description:
    "Contact SanMateo FixHub for stove repair in San Mateo, CA. Call now or request service online for gas and electric stove, range, and cooktop help across the Peninsula.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact/" }]} />
      <PageHero
        eyebrow="Contact & Request Service"
        title="Request Stove Repair in San Mateo"
        intro="Call now for the fastest response, or send a service request and we'll help you check availability and next steps."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Send a Service Request</h2>
            <p className="mt-2 text-ink-soft">Tell us about your stove problem and how you&apos;d like to be contacted.</p>
            <div className="mt-6">
              <RequestServiceForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-800">Call Now</h2>
              <a href={clickToCall} className="ringba-phone mt-2 flex items-center gap-2 text-xl font-extrabold text-copper-700" data-call-source="contact-page">
                <Icon name="phone" className="h-6 w-6" /> {site.phone.display}
              </a>
              <ul className="mt-5 space-y-3 border-t border-line pt-4 text-sm text-ink-soft">
                <li className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-teal-600" /> {site.hours.display}</li>
                <li className="flex items-center gap-2"><Icon name="stove" className="h-4 w-4 text-teal-600" /> <a href={`mailto:${site.email}`} className="hover:text-copper-700">{site.email}</a></li>
                <li className="flex items-start gap-2"><Icon name="search" className="mt-0.5 h-4 w-4 text-teal-600" /> Serving {site.primaryCity} &amp; {site.county}</li>
              </ul>
            </div>

            <div className="rounded-2xl border-l-4 border-copper-600 bg-copper-50 p-5">
              <h3 className="flex items-center gap-2 font-bold text-navy-800"><Icon name="alert" className="h-5 w-5 text-copper-600" /> Smell gas?</h3>
              <p className="mt-1.5 text-sm text-ink-soft">
                Don&apos;t use the stove or electrical switches. Leave the area if the smell is strong and contact PG&amp;E at
                1-800-743-5000 or 911 first. See our{" "}
                <Link href="/problems/gas-smell-from-stove/" className="font-semibold text-navy-700 underline">gas smell safety steps</Link>.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-navy-800">Areas We Serve</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {site.serviceAreas.map((a) => (
                  <li key={a} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-navy-800">{a}</li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>

      <Section tint="white">
        <Container>
          <SectionHeading
            eyebrow="Stay Connected"
            title="Connect With SanMateo FixHub"
            intro="Reach us by email, or follow along for stove repair tips, maintenance advice, and updates."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={mailTo}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-copper-400 hover:shadow-card"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-copper-600">
                <SocialIcon name="mail" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-navy-800 group-hover:text-copper-700">Email</span>
                <span className="block truncate text-sm text-ink-soft">{site.email}</span>
              </span>
            </a>
            {socialProfiles.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`SanMateo FixHub on ${s.label}`}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-copper-400 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-copper-600">
                  <SocialIcon name={s.key} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-navy-800 group-hover:text-copper-700">{s.label}</span>
                  <span className="block truncate text-sm text-ink-soft">{s.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

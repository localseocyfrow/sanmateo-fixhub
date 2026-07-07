import type { Metadata } from "next";
import Link from "next/link";
import { site, clickToCall } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { RequestServiceForm } from "@/components/RequestServiceForm";
import { Icon } from "@/components/Icon";

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
    </>
  );
}

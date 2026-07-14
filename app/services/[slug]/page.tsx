import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService, serviceSlugs, parentLocation, cityLocations, getProblem } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { DefinitionBlock } from "@/components/ui/DefinitionBlock";
import { ComparisonBlock } from "@/components/ui/ComparisonBlock";
import { TextBlock } from "@/components/ui/ContentSections";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { LinkButton } from "@/components/ui/Buttons";
import { LeadSmartForm } from "@/components/LeadSmartForm";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const parent = parentLocation();
  const nearbyCities = cityLocations()
    .filter((l) => !l.isParent)
    .slice(0, 3);

  const relatedServiceLinks = service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ label: s.name, href: `/services/${s.slug}/`, description: s.summary }));

  const locationLinks = [
    ...(parent ? [{ label: `Stove Repair in ${parent.city}`, href: `/locations/${parent.slug}/`, description: parent.summary }] : []),
    ...nearbyCities.map((l) => ({ label: `Stove Repair in ${l.city}`, href: `/locations/${l.slug}/`, description: l.summary })),
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
          { name: service.name, href: `/services/${service.slug}/` },
        ]}
      />
      <PageHero eyebrow={`${service.name} · San Mateo, CA`} title={service.h1} />

      <Section tint="white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-10">
            <QuickAnswer>{service.quickAnswer}</QuickAnswer>

            <TextBlock paragraphs={service.intro} />

            <div className="rounded-2xl bg-navy-800 p-6 text-white sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-lg font-semibold">Have a stove problem in San Mateo right now?</p>
                <div className="flex flex-wrap gap-3">
                  <LinkButton href="/contact#request-estimate" variant="primary">Request Service</LinkButton>
                  {service.emergency && (
                    <LinkButton href="/emergency-stove-help/" variant="ghostLight">Emergency Help</LinkButton>
                  )}
                </div>
              </div>
            </div>

            <DefinitionBlock term={service.definition.term}>{service.definition.body}</DefinitionBlock>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Signs You May Need {service.name}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                    <span className="mt-0.5 text-copper-600"><Icon name="check" className="h-5 w-5" /></span>
                    <span className="text-ink-soft">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTASection variant="band" heading="Not sure what's wrong?" subheading="Describe the symptom and we'll help you figure out next steps." source={`service-${service.slug}-signs`} requestHref="/contact#request-estimate" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Common Causes &amp; Components</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {service.causes.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
                    <h3 className="font-bold text-navy-800">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <TextBlock heading="How We Inspect &amp; Diagnose" paragraphs={service.diagnosis} />
            <TextBlock heading="Why Fast Repair Matters" paragraphs={service.whyFast} />

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Safe Repair Methods &amp; Parts</h2>
              <ul className="mt-4 space-y-2.5">
                {service.repairApproach.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-1 text-teal-600"><Icon name="wrench" className="h-4 w-4" /></span>
                    <span className="text-ink-soft">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.comparison && <ComparisonBlock data={service.comparison} />}

            <TextBlock heading={`${service.name} for San Mateo Kitchens`} paragraphs={service.localRelevance} />

            <div className="rounded-2xl border border-copper-100 bg-copper-50 p-6">
              <h2 className="text-xl font-bold text-navy-800">Cost &amp; Pricing Guidance</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{service.costGuidance}</p>
              <Link href="/stove-repair-cost-san-mateo-ca/" className="mt-3 inline-flex items-center gap-1 font-semibold text-copper-700 hover:underline">
                See stove repair cost guidance <span aria-hidden>→</span>
              </Link>
            </div>

            <FAQAccordion faqs={service.faqs} heading={`${service.name} FAQs`} />

            <div className="space-y-8">
              <RelatedLinks title="Related Stove Repair Services" links={relatedServiceLinks} />
              {service.relatedProblems.length > 0 && (
                <RelatedLinks
                  title="Related Stove Problems"
                  links={service.relatedProblems
                    .map((p) => {
                      const linked = getServiceProblemLink(p);
                      return linked;
                    })
                    .filter((l): l is NonNullable<typeof l> => Boolean(l))}
                />
              )}
              <RelatedLinks title="Stove Repair Near You" links={locationLinks} columns={2} />
            </div>
          </div>

          <ServiceSidebar serviceName={service.name} />
        </Container>
      </Section>

      <CTASection source={`service-${service.slug}-footer`} requestHref="/contact#request-estimate" />

      <JsonLd
        data={[
          serviceSchema({
            name: `${service.name} in San Mateo, CA`,
            description: service.metaDescription,
            url: `/services/${service.slug}`,
            serviceType: service.name,
          }),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}

// Resolve a problem cross-link by slug.
function getServiceProblemLink(slug: string) {
  const p = getProblem(slug);
  return p ? { label: p.name, href: `/problems/${p.slug}/`, description: p.summary } : null;
}

function ServiceSidebar({ serviceName }: { serviceName: string }) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
        <h2 className="text-lg font-bold text-navy-800">Request {serviceName}</h2>
        <p className="mt-1.5 text-sm text-ink-soft">Tell us what your stove is doing and we&apos;ll help with next steps.</p>
        {/* Desktop: embedded LeadSmart request form. Mobile funnels to the contact form. */}
        <div className="mt-4 hidden lg:block">
          <LeadSmartForm variant="compact" title={`Request ${serviceName}`} />
        </div>
        <div className="mt-4 space-y-3">
          <LinkButton href="/contact#request-estimate" variant="primary" className="w-full lg:hidden">Request Service</LinkButton>
          <LinkButton href="/repair-process/" variant="outline" className="w-full">How Our Process Works</LinkButton>
        </div>
        <ul className="mt-5 space-y-2 border-t border-line pt-4 text-sm text-ink-soft">
          <li className="flex items-center gap-2"><Icon name="flame" className="h-4 w-4 text-copper-600" /> Gas &amp; electric stove help</li>
          <li className="flex items-center gap-2"><Icon name="stove" className="h-4 w-4 text-copper-600" /> Homes &amp; businesses</li>
          <li className="flex items-center gap-2"><Icon name="search" className="h-4 w-4 text-copper-600" /> Clear diagnosis first</li>
        </ul>
      </div>
    </aside>
  );
}

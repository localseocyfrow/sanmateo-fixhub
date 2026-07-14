import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocation, locationSlugs, parentLocation, getProblem } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { TextBlock } from "@/components/ui/ContentSections";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { LeadSmartForm } from "@/components/LeadSmartForm";
import { Icon } from "@/components/Icon";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return buildMetadata({ title: loc.metaTitle, description: loc.metaDescription, path: `/locations/${loc.slug}` });
}

// Core services every location page links to.
const CORE_SERVICE_LINKS = [
  { label: "Stove Repair", href: "/services/stove-repair-san-mateo-ca/", description: "General stove diagnosis and repair." },
  { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Ignition, burners, and gas flow issues." },
  { label: "Electric Stove Repair", href: "/services/electric-stove-repair-san-mateo-ca/", description: "Elements, coils, and heating faults." },
  { label: "Emergency Stove Repair", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Fast help for urgent stove problems." },
];

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const parent = parentLocation();
  const nearbyLinks = loc.nearbySlugs
    .map((s) => getLocation(s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l))
    .map((l) => ({ label: `Stove Repair in ${l.city}`, href: `/locations/${l.slug}/`, description: l.summary }));

  if (parent && !loc.isParent && !loc.nearbySlugs.includes(parent.slug)) {
    nearbyLinks.unshift({ label: `Stove Repair in ${parent.city}`, href: `/locations/${parent.slug}/`, description: parent.summary });
  }

  const problemLinks = loc.commonProblems
    .map((name) => {
      const match = matchProblemByName(name);
      return match ? { label: match.name, href: `/problems/${match.slug}/`, description: match.summary } : null;
    })
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations/" },
          { name: loc.city, href: `/locations/${loc.slug}/` },
        ]}
      />
      <PageHero eyebrow={`Stove Repair · ${loc.city}, CA`} title={loc.h1} />

      <Section tint="white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-10">
            <QuickAnswer>{loc.quickAnswer}</QuickAnswer>
            <TextBlock paragraphs={loc.intro} />

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">{loc.localContext.heading}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">
                {loc.localContext.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {loc.localContext.bullets && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {loc.localContext.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 rounded-lg bg-surface p-3 text-sm text-ink-soft">
                      <span className="mt-0.5 text-copper-600"><Icon name="check" className="h-4 w-4" /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <CTASection variant="band" heading={`Stove trouble in ${loc.city}?`} subheading="Call now or request service and we'll help you check availability and next steps." source={`location-${loc.slug}-mid`} requestHref="/contact#request-estimate" />

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Common Stove Problems in {loc.city}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {loc.commonProblems.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                    <span className="mt-0.5 text-teal-600"><Icon name="wrench" className="h-5 w-5" /></span>
                    <span className="text-ink-soft">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TextBlock heading={`Why Fast Stove Repair Matters in ${loc.city}`} paragraphs={loc.whyLocal} />

            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-xl font-bold text-navy-800">Neighborhoods &amp; Areas We Cover</h2>
              <p className="mt-1.5 text-sm text-ink-faint">Serving homes and businesses across {loc.city} and surrounding communities, including:</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {loc.neighborhoods.map((n) => (
                  <li key={n} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-navy-800">{n}</li>
                ))}
              </ul>
            </div>

            <FAQAccordion faqs={loc.faqs} heading={`Stove Repair in ${loc.city}: FAQs`} />

            <div className="space-y-8">
              <RelatedLinks title="Stove Repair Services" links={CORE_SERVICE_LINKS} />
              {problemLinks.length > 0 && <RelatedLinks title="Related Stove Problems" links={problemLinks} />}
              {nearbyLinks.length > 0 && <RelatedLinks title="Nearby Service Areas" links={nearbyLinks} />}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-800">Request Stove Repair in {loc.city}</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Tell us what your stove is doing and we&apos;ll help with next steps.</p>
              {/* Desktop: embedded LeadSmart request form. Mobile funnels to the contact form. */}
              <div className="mt-4 hidden lg:block">
                <LeadSmartForm variant="compact" title={`Request stove repair in ${loc.city}`} />
              </div>
              <div className="mt-4 space-y-3">
                <a href="/contact#request-estimate" className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copper-600 px-5 font-semibold text-white hover:bg-copper-700 lg:hidden">Request Service</a>
                <a href="/service-areas/" className="flex min-h-[44px] w-full items-center justify-center rounded-xl border-2 border-navy-800 px-5 font-semibold text-navy-800 hover:bg-navy-800 hover:text-white">All Service Areas</a>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      <CTASection heading={`Stove Repair Help for ${loc.city}`} source={`location-${loc.slug}-footer`} requestHref="/contact#request-estimate" />

      <JsonLd
        data={[
          localBusinessSchema({ areaName: loc.city, url: `/locations/${loc.slug}` }),
          faqSchema(loc.faqs),
        ]}
      />
    </>
  );
}

// Best-effort mapping from a free-text problem label to a problem page.
function matchProblemByName(name: string) {
  const lower = name.toLowerCase();
  const candidates = [
    "stove-not-heating",
    "stove-clicking-but-not-lighting",
    "gas-smell-from-stove",
    "burner-not-working",
    "stove-wont-turn-on",
    "electric-stove-not-heating",
    "stove-keeps-shutting-off",
    "uneven-burner-flame",
    "stove-temperature-issue",
    "oven-works-but-stove-does-not",
  ];
  for (const slug of candidates) {
    const p = getProblem(slug);
    if (!p) continue;
    const words = p.name.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
    if (words.some((w) => lower.includes(w))) return p;
  }
  return undefined;
}

import type { Metadata } from "next";
import Link from "next/link";
import { cityLocations, locations } from "@/lib/content";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Service Areas — San Mateo Peninsula",
  description:
    "See every community SanMateo FixHub covers for stove repair across the San Mateo Peninsula, from Daly City down to Redwood City and over to Half Moon Bay.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const cities = cityLocations();
  const county = locations.find((l) => l.isCounty);

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas/" }]} />
      <PageHero
        eyebrow="Peninsula Coverage"
        title="Stove Repair Service Areas Across the Peninsula"
        intro="SanMateo FixHub coordinates specialist stove repair across San Mateo County — from the coast to the bay."
      />
      <Section tint="surface">
        <Container>
          <QuickAnswer>
            SanMateo FixHub provides stove repair throughout San Mateo County and the mid-Peninsula. Coverage includes San
            Mateo, Burlingame, Foster City, Belmont, San Carlos, Millbrae, Redwood City, Daly City, South San Francisco,
            San Bruno, and Half Moon Bay. Not sure if we reach you? Request service and we&apos;ll confirm.
          </QuickAnswer>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}/`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-5 py-4 shadow-soft transition hover:border-copper-400 hover:shadow-card"
              >
                <span className="flex items-center gap-2 font-semibold text-navy-800 group-hover:text-copper-700">
                  <Icon name="stove" className="h-5 w-5 text-copper-600" />
                  {l.city}
                </span>
                <span aria-hidden className="text-copper-600 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>

          {county && (
            <div className="mt-10 rounded-2xl bg-navy-800 p-8 text-white">
              <SectionHeading eyebrow="County-wide" title="San Mateo County Stove Repair" invert />
              <p className="mt-3 max-w-2xl text-navy-100">{county.summary}</p>
              <Link href={`/locations/${county.slug}/`} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-copper-600 px-6 py-3 font-semibold text-white hover:bg-copper-700">
                County coverage details <span aria-hidden>→</span>
              </Link>
            </div>
          )}

          <p className="mt-8 text-center text-sm text-ink-faint">
            Serving {site.serviceAreas.length} areas across the Peninsula · <Link href="/contact/" className="font-semibold text-navy-700 underline">Request service</Link>
          </p>
        </Container>
      </Section>
      <CTASection source="service-areas" />
    </>
  );
}

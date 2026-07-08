import type { Metadata } from "next";
import { cityLocations, parentLocation, locations } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { LocationCard } from "@/components/cards/Cards";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Locations Across San Mateo County",
  description:
    "SanMateo FixHub provides stove repair in San Mateo and Peninsula cities including Burlingame, Foster City, Belmont, San Carlos, Redwood City, and more. Find your city.",
  path: "/locations",
});

export default function LocationsIndex() {
  const parent = parentLocation();
  const cities = cityLocations().filter((l) => !l.isParent);
  const county = locations.find((l) => l.isCounty);

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations/" }]} />
      <PageHero
        eyebrow="Service Locations"
        title="Where SanMateo FixHub Provides Stove Repair"
        intro="Specialist gas and electric stove, range, and cooktop repair for San Mateo and communities across the Peninsula."
      />
      <Section tint="surface">
        <Container>
          <QuickAnswer>
            SanMateo FixHub serves San Mateo and nearby Peninsula cities, including Burlingame, Foster City, Belmont, San
            Carlos, Millbrae, Redwood City, Daly City, South San Francisco, San Bruno, and Half Moon Bay, plus broader San
            Mateo County. Choose your city for local stove repair details.
          </QuickAnswer>

          {parent && (
            <div className="mt-10">
              <SectionHeading eyebrow="Primary city" title="Stove Repair in San Mateo" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <LocationCard location={parent} />
                {county && <LocationCard location={county} />}
              </div>
            </div>
          )}

          <div className="mt-12">
            <SectionHeading eyebrow="Nearby cities" title="Peninsula Communities We Serve" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((l) => (
                <LocationCard key={l.slug} location={l} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CTASection source="locations-index" />
      <JsonLd
        data={collectionPageSchema({
          name: "Stove Repair Locations Across San Mateo County",
          description:
            "Cities and communities served by SanMateo FixHub for stove repair across San Mateo County and the Peninsula.",
          url: "/locations",
          items: locations.map((l) => ({ name: `Stove Repair in ${l.city}`, url: `/locations/${l.slug}` })),
        })}
      />
    </>
  );
}

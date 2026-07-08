import type { Metadata } from "next";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { ServiceCard } from "@/components/cards/Cards";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Services in San Mateo, CA",
  description:
    "Explore SanMateo FixHub's specialist stove repair services in San Mateo, CA — gas and electric stoves, ranges, cooktops, burners, igniters, control boards, and more.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }]} />
      <PageHero
        eyebrow="Stove Repair Services"
        title="Specialist Stove Repair Services in San Mateo, CA"
        intro="From gas and electric stoves to ranges, cooktops, burners, and igniters, SanMateo FixHub focuses on one thing: getting your stove working safely again."
      />
      <Section tint="surface">
        <Container>
          <QuickAnswer>
            SanMateo FixHub provides specialist stove repair across San Mateo and the Peninsula, covering gas and
            electric stoves, ranges, cooktops, burners, igniters, control boards, and pilot lights. Choose the service
            that matches your stove problem below, or request help and we&apos;ll guide you to the right diagnosis and
            next steps.
          </QuickAnswer>
          <div className="mt-10">
            <SectionHeading eyebrow="What we repair" title="Choose Your Stove Repair Service" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CTASection source="services-index" />
      <JsonLd
        data={collectionPageSchema({
          name: "Stove Repair Services in San Mateo, CA",
          description:
            "Specialist stove repair services in San Mateo — gas and electric stoves, ranges, cooktops, burners, igniters, control boards, and pilot lights.",
          url: "/services",
          items: services.map((s) => ({ name: s.name, url: `/services/${s.slug}` })),
        })}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { brands, site } from "@/lib/site";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Brands We Service — SanMateo FixHub Stove Repair",
  description:
    "SanMateo FixHub works on many gas and electric stove, range, and cooktop brands in San Mateo. Coverage is confirmed case-by-case; we don't claim manufacturer authorization.",
  path: "/brands-we-service",
});

export default function BrandsWeServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Brands We Service", href: "/brands-we-service/" }]} />
      <PageHero
        eyebrow="Brand Coverage"
        title="Stove Brands We Service"
        intro="We work on a wide range of gas and electric stove, range, and cooktop brands across San Mateo and the Peninsula."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            We service many common and premium stove, range, and cooktop brands found in {site.primaryCity} kitchens.
            Coverage for any specific brand and model is confirmed case-by-case, and we don&apos;t claim manufacturer
            authorization. Share your brand and symptom and we&apos;ll let you know how we can help.
          </QuickAnswer>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Brands you&apos;ll often find on Peninsula stoves</h2>
            <p className="text-ink-soft leading-relaxed">
              From mainstream everyday ranges to professional-style cooking equipment, here are brands we commonly
              encounter. Listing a brand isn&apos;t a claim of authorization &mdash; it reflects the equipment we see and
              work with in local homes and small kitchens.
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Stove brands we commonly service">
              {brands.map((brand) => (
                <li
                  key={brand.slug}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-800"
                >
                  <Icon name="range" className="h-4 w-4 text-copper-600" />
                  {brand.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">How brand coverage works</h2>
            <p className="text-ink-soft leading-relaxed">
              Whether we can help with a particular unit depends on the brand, model, and the specific fault, plus parts
              availability. That&apos;s why we confirm coverage case-by-case rather than promising blanket support. We
              are an independent stove repair specialist and are not an authorized or manufacturer-affiliated service for
              these brands.
            </p>
            <p className="text-ink-soft leading-relaxed">
              To explore individual brands in more detail, visit our{" "}
              <Link href="/brands/" className="font-semibold text-copper-700 hover:underline">
                brands hub
              </Link>
              , or{" "}
              <Link href="/contact/" className="font-semibold text-copper-700 hover:underline">
                contact us
              </Link>{" "}
              with your stove&apos;s brand and the issue you&apos;re seeing.
            </p>
          </div>

          <RelatedLinks
            title="Related pages"
            columns={2}
            links={[
              { label: "Browse the brands hub", href: "/brands/", description: "Details on individual stove brands." },
              { label: "Common stove problems", href: "/problems/", description: "Symptoms we help diagnose." },
              { label: "Our repair process", href: "/repair-process/", description: "How diagnosis and repair works." },
              { label: "Contact us", href: "/contact/", description: "Ask about your brand and model." },
            ]}
          />
        </Container>
      </Section>
      <CTASection source="brands-we-service" />
    </>
  );
}

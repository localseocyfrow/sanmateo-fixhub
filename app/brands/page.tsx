import type { Metadata } from "next";
import Link from "next/link";
import { brands, supportedBrandList, brandPageSlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Stove & Range Brands We Service in San Mateo",
  description:
    "SanMateo FixHub works on a wide range of gas and electric stove, range, and cooktop brands in San Mateo and the Peninsula. See the brands we service and request repair help.",
  path: "/brands",
});

export default function BrandsIndex() {
  const supported = supportedBrandList();

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Brands", href: "/brands/" }]} />
      <PageHero
        eyebrow="Brands We Service"
        title="Stove &amp; Range Brands We Service"
        intro="From mainstream gas and electric ranges to pro-style cooktops, SanMateo FixHub works on a wide range of stove brands across the Peninsula."
      />
      <Section tint="surface">
        <Container>
          <QuickAnswer>
            SanMateo FixHub services many common stove, range, and cooktop brands in San Mateo and nearby cities. Brand
            coverage is confirmed case by case, and dedicated brand repair guides are published here as coverage is
            verified. Not sure if we cover your model? Request service and we&apos;ll let you know.
          </QuickAnswer>

          {supported.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Brand Repair Guides</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {supported.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/brands/${brandPageSlug(brand.slug)}/`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-copper-400 hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800 group-hover:bg-copper-600 group-hover:text-white">
                      <Icon name="range" className="h-6 w-6" />
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-navy-800 group-hover:text-copper-700">{brand.name} Stove Repair</h3>
                    <p className="mt-1.5 flex-1 text-sm text-ink-soft">{brand.blurb}</p>
                    <span className="mt-3 text-sm font-semibold text-copper-700">View {brand.name} guide →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Brands We Commonly Work On</h2>
            <p className="mt-2 max-w-2xl text-ink-soft">
              These are stove and range brands we frequently see in San Mateo kitchens. A dedicated repair guide is added
              as coverage for each brand is confirmed.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {brands.map((brand) => (
                <li
                  key={brand.slug}
                  className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 font-semibold text-navy-800 shadow-soft"
                >
                  <Icon name="stove" className="h-4 w-4 text-copper-600" />
                  {brand.name}
                  {brand.supported && (
                    <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-bold text-teal-700">Guide</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-faint">
              Don&apos;t see your brand? It doesn&apos;t mean we can&apos;t help — {" "}
              <Link href="/contact/" className="font-semibold text-navy-700 underline">request service</Link> and
              we&apos;ll confirm whether we cover your stove.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection source="brands-index" />
    </>
  );
}

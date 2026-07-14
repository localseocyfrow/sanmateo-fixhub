import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supportedBrandList, brandPageSlug, parseBrandPageSlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Icon } from "@/components/Icon";

type Params = { params: Promise<{ slug: string }> };

// Only SUPPORTED brands are statically generated / indexable.
export function generateStaticParams() {
  return supportedBrandList().map((b) => ({ slug: brandPageSlug(b.slug) }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const brand = parseBrandPageSlug(slug);
  if (!brand) return {};
  return buildMetadata({
    title: `${brand.name} Stove Repair in San Mateo, CA`,
    description: `SanMateo FixHub services ${brand.name} stoves, ranges, and cooktops in San Mateo and the Peninsula. Learn about common ${brand.name} stove issues and request repair help.`,
    path: `/brands/${slug}`,
  });
}

export default async function BrandPage({ params }: Params) {
  const { slug } = await params;
  const brand = parseBrandPageSlug(slug);
  if (!brand) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands/" },
          { name: brand.name, href: `/brands/${slug}/` },
        ]}
      />
      <PageHero eyebrow={`${brand.name} · San Mateo, CA`} title={`${brand.name} Stove Repair in San Mateo, CA`} />
      <Section tint="white">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            SanMateo FixHub services {brand.name} stoves, ranges, and cooktops across San Mateo and the Peninsula.
            {" "}
            {brand.blurb} If your {brand.name} stove is showing problems, we can help you understand the likely cause and
            request repair.
          </QuickAnswer>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Common {brand.name} Stove Issues</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {brand.commonIssues.map((issue) => (
                <li key={issue} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                  <span className="mt-0.5 text-copper-600"><Icon name="wrench" className="h-5 w-5" /></span>
                  <span className="text-ink-soft">{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {brand.notes.length > 0 && (
            <div className="space-y-3 leading-relaxed text-ink-soft">
              {brand.notes.map((n, i) => (
                <p key={i}>{n}</p>
              ))}
            </div>
          )}

          <RelatedLinks
            title="Stove Repair Services"
            links={[
              { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Ignition, burners, and gas flow." },
              { label: "Electric Stove Repair", href: "/services/electric-stove-repair-san-mateo-ca/", description: "Elements and heating faults." },
              { label: "Range Repair", href: "/services/range-repair-san-mateo-ca/", description: "Combined oven-and-cooktop units." },
              { label: "Cooktop Repair", href: "/services/cooktop-repair-san-mateo-ca/", description: "Built-in cooktop surfaces." },
            ]}
          />
        </Container>
      </Section>
      <CTASection heading={`Need ${brand.name} Stove Repair in San Mateo?`} source={`brand-${brand.slug}`} requestHref="/contact#request-estimate" />
      <JsonLd
        data={serviceSchema({
          name: `${brand.name} Stove Repair in San Mateo, CA`,
          description: `${brand.name} stove, range, and cooktop repair by ${site.name}.`,
          url: `/brands/${slug}`,
          serviceType: `${brand.name} Stove Repair`,
        })}
      />
    </>
  );
}

// JSON-LD builders. Rules enforced here:
//  • No aggregateRating / review objects (no verified reviews exist).
//  • No postal address unless site.address is a real object.
//  • No openingHours claims unless explicitly desired (kept minimal & truthful).
import { site, socialProfiles } from "./site";
import { absoluteUrl } from "./seo";

const ORG_ID = `${site.siteUrl.replace(/\/$/, "")}/#organization`;
const WEBSITE_ID = `${site.siteUrl.replace(/\/$/, "")}/#website`;

export function organizationSchema() {
  const sameAs = socialProfiles.map((p) => p.url).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: absoluteUrl("/"),
    description: `${site.name} — ${site.tagline}. Specialist gas and electric stove, range, and cooktop repair serving San Mateo and the Peninsula.`,
    email: site.email,
    telephone: site.phone.e164,
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * LocalBusiness schema. Emits a postal address ONLY when a verified address is
 * configured. For a service-area business without a public address we still
 * describe the service area, which is valid and honest.
 */
export function localBusinessSchema(opts?: { areaName?: string; url?: string }) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${absoluteUrl(opts?.url ?? "/")}#localbusiness`,
    name: site.name,
    url: opts?.url ? absoluteUrl(opts.url) : absoluteUrl("/"),
    telephone: site.phone.e164,
    email: site.email,
    description: `Specialist stove, range, and cooktop repair serving ${opts?.areaName ?? "San Mateo and the Peninsula"}.`,
    areaServed: (opts?.areaName ? [opts.areaName] : site.serviceAreas).map((a) => ({
      "@type": "City",
      name: a,
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
  };
  if (site.address) {
    base.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    };
  }
  return base;
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.url),
    provider: { "@id": ORG_ID },
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

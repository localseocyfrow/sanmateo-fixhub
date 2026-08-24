// JSON-LD builders. Truthfulness rules enforced here:
//  • NO aggregateRating / Review objects — no verified reviews exist.
//  • NO Offer / priceRange / exact prices — no verified pricing.
//  • NO Person (technician) schema — no real named staff to publish.
//  • NO PostalAddress unless site.address is a real, configured object.
//  • openingHoursSpecification is driven by the central config (owner-controlled).
import { site, socialProfiles } from "./site";
import { services } from "./content";
import { absoluteUrl } from "./seo";

const BASE = site.siteUrl.replace(/\/$/, "");
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;

const logoUrl = absoluteUrl("/brand/sanmateo-fixhub-logo.png");
/**
 * Default representative image for any page that doesn't supply its own —
 * service pages, brand pages, inner WebPages, and blog posts all fall back here.
 */
const heroUrl = absoluteUrl("/images/home/san-mateo-stove-repair-hero.png");
/**
 * Homepage-only hero — the technician photo the home hero actually renders.
 * Passed explicitly by app/page.tsx so no other page picks it up implicitly.
 * NOT used by organizationSchema: that one is emitted site-wide from the root
 * layout, so changing it there would silently retag every page.
 */
export const homeHeroImage = absoluteUrl("/images/home/home-page-hero-image.png");

const sameAs = () => socialProfiles.map((p) => p.url).filter(Boolean);

const openingHours = () =>
  site.hours.spec.map((s) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: s.days,
    opens: s.open,
    closes: s.close,
  }));

const areaServed = (areas?: string[]) =>
  (areas ?? site.serviceAreas).map((a) => ({ "@type": "City", name: a }));

export function organizationSchema() {
  const profiles = sameAs();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    slogan: site.tagline,
    description: `${site.name} — ${site.tagline}. Specialist gas and electric stove, range, and cooktop repair serving San Mateo and the Peninsula.`,
    email: site.email,
    telephone: site.phone.intl,
    logo: { "@type": "ImageObject", url: logoUrl, caption: `${site.name} logo` },
    image: [logoUrl, heroUrl],
    areaServed: areaServed(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.intl,
      email: site.email,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Stove repair",
      "Gas stove repair",
      "Electric stove repair",
      "Range repair",
      "Cooktop repair",
      "Burner repair",
      "Stove igniter repair",
      "Stove control board repair",
      "Pilot light repair",
      "Appliance diagnosis",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Stove Repair Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        // No price — repairs are quoted per job; we never assert a price here.
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
    },
    ...(profiles.length ? { sameAs: profiles } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * LocalBusiness schema. Emits a postal address ONLY when a verified address is
 * configured. For a service-area business without a public address we still
 * describe the service area, which is valid and honest. Includes logo/image,
 * opening hours (from config), and social profiles.
 */
export function localBusinessSchema(opts?: { areaName?: string; url?: string; image?: string }) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${absoluteUrl(opts?.url ?? "/")}#localbusiness`,
    name: site.name,
    url: opts?.url ? absoluteUrl(opts.url) : absoluteUrl("/"),
    telephone: site.phone.intl,
    email: site.email,
    description: `Specialist stove, range, and cooktop repair serving ${opts?.areaName ?? "San Mateo and the Peninsula"}.`,
    logo: logoUrl,
    // Page-specific image wins; otherwise the shared default. Only the homepage
    // passes one today, so contact/location pages keep the stove hero.
    image: [opts?.image ?? heroUrl, logoUrl],
    areaServed: areaServed(opts?.areaName ? [opts.areaName] : undefined),
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: openingHours(),
    parentOrganization: { "@id": ORG_ID },
    sameAs: sameAs(),
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

export function serviceSchema(opts: { name: string; description: string; url: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.url),
    image: heroUrl,
    provider: { "@id": ORG_ID },
    areaServed: areaServed(),
    // NOTE: no Offer/price — pricing is quoted per job, never asserted here.
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

/** Generic page schema — pass type "ContactPage" | "AboutPage" | "WebPage" etc. */
export function webPageSchema(opts: { type?: string; name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: heroUrl },
    inLanguage: "en-US",
  };
}

/** CollectionPage wrapping an ItemList — for hub/index pages. */
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: absoluteUrl(it.url),
      })),
    },
  };
}

/**
 * BlogPosting schema for a single blog article. Author and publisher are the
 * Organization (per the truthfulness rules above: no named-Person schema).
 */
export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  /**
   * Primary search URL for this article when it deliberately defers to an
   * existing page (see `canonicalPath` on BlogPost). Defaults to the article's
   * own URL; when set it must match the rendered canonical tag.
   */
  canonicalUrl?: string;
}) {
  const url = absoluteUrl(opts.url);
  const canonical = opts.canonicalUrl ? absoluteUrl(opts.canonicalUrl) : url;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: opts.image ?? heroUrl,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

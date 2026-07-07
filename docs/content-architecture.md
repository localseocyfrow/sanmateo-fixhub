# Content Architecture

## Site topology (silos)

```
/ (home — brand hub, local pack signal)
├─ /services/ (service hub)
│   ├─ stove-repair-san-mateo-ca         ← canonical "stove repair" target
│   ├─ gas-stove-repair-san-mateo-ca
│   ├─ electric-stove-repair-san-mateo-ca
│   ├─ emergency-stove-repair-san-mateo-ca
│   ├─ range-repair-san-mateo-ca
│   ├─ cooktop-repair-san-mateo-ca
│   ├─ burner-repair-san-mateo-ca
│   ├─ igniter-repair-san-mateo-ca
│   ├─ stove-control-board-repair-san-mateo-ca
│   └─ pilot-light-repair-san-mateo-ca
├─ /locations/ (location hub)
│   ├─ san-mateo-ca                        ← parent city
│   ├─ stove-repair-{burlingame|foster-city|belmont|san-carlos|millbrae|
│   │                 redwood-city|daly-city|south-san-francisco|san-bruno|half-moon-bay}-ca
│   └─ san-mateo-county-stove-repair
├─ /service-areas/ (Peninsula overview → locations)
├─ /problems/ (problem hub)
│   └─ 10 symptom pages → matching service + emergency + pricing
├─ /brands/ (brand hub)
│   └─ [brand]-stove-repair-san-mateo-ca   ← only supported brands rendered/indexed
└─ trust: about, contact, repair-process, emergency-stove-help,
          stove-repair-cost-san-mateo-ca, warranty, safety, certifications,
          technicians, brands-we-service, case-studies, before-after, faq,
          privacy-policy, terms
```

## Page-type templates (shared components, unique data)

Every page is data-driven from `content/*` + `lib/*`. Templates guarantee structural SEO consistency; data guarantees content uniqueness.

- **Service template** — H1 (local) · answer-first intro (brand + service kw + San Mateo in first 100 words) · Quick Answer (40–70w) · definition block · signs/symptoms · common causes/components · inspection & diagnosis · why fast repair matters · safe repair methods/parts · San Mateo local relevance · cost guidance (links pricing) · comparison block (where relevant) · 4–6 FAQs · related services + related locations · breadcrumbs · Service + Breadcrumb + FAQ JSON-LD · CTAs after intro / after signs / after process / before FAQ.
- **Location template** — unique local H1 · Quick Answer · brand in first paragraph · local housing/appliance/climate angle · main problems · relevant services · why fast repair matters locally · nearby neighborhoods/communities · FAQ · CTAs · breadcrumbs · LocalBusiness (areaServed) + Breadcrumb JSON-LD · links to parent San Mateo + core services + contact + nearby cities. ≥60% unique wording enforced by per-city data.
- **Problem template** — symptom explained in first paragraph · likely causes (no remote diagnosis claims) · safety guidance where relevant · "what to do next" · short FAQ · links to matching service + emergency + pricing + contact · breadcrumbs.
- **Brand template** — brand-qualified H1 · what we service for the brand · common brand-specific stove issues · generic (no trademarked claims / not an authorized-service claim unless configured) · links to services + contact. Rendered only when `supported`.

## Content data model (`content/` + `lib/`)

- `lib/site.ts` — single source of truth: business, phone (display + tracking + click-to-call), hours, service areas, email, address (nullable), emergency/same-day flags, supported brands, socials, form endpoint, Ringba values, feature flags for unverified proof sections.
- `lib/types.ts` — `Service`, `Location`, `Problem`, `Brand`, `Faq`, `NavItem`.
- `content/services.ts`, `content/locations.ts`, `content/problems.ts`, `content/faqs.ts`.
- `lib/nav.ts` — header/footer navigation.
- `lib/seo.ts` — `buildMetadata()`, `absoluteUrl()`, canonical/OG/Twitter.
- `lib/schema.ts` — Organization, WebSite, LocalBusiness, Service, BreadcrumbList, FAQPage builders (no fake ratings/reviews/hours/address).

## Unverified-content policy (build the shell, don't fake the proof)

Reviews, testimonials, ratings, job counts, years in business, technician names/photos, licenses, insurance, guarantees, certifications, case studies, before/after, real photos, exact prices, and confirmed emergency availability are **gated behind config flags** and rendered as clearly-labeled "future content area" placeholders until the business supplies verified data. No fabricated proof is ever shown.

# SEO / Local SEO / AEO / GEO Launch Checklist

## Before publishing — MUST replace in `lib/site.ts`
- [x] `phone.display` / `phone.tracking` / `phone.e164` — set to the official business number `(650) 525-2329` / `+16505252329` (swap `tracking` for a Ringba number later if desired)
- [ ] `ringba` values (number pool ID, JS tag) — see `docs/ringba-setup.md`
- [ ] `forms.endpoint` — real form handler — see `docs/form-integration.md`
- [ ] `hours` — confirm real business hours (placeholder is generic)
- [ ] `emergencyAvailable` / `sameDayAvailable` — set true ONLY if genuinely offered
- [ ] `address` — leave `null` unless a real, public, staffed address exists (affects LocalBusiness schema)
- [ ] `brands[].supported` — enable only brands actually serviced
- [ ] `email`, `social` profiles
- [ ] Proof flags (`features.caseStudies`, `.technicians`, `.certifications`, `.warranty`) — enable only with verified content
- [ ] `siteUrl` — production domain (used for canonical, OG, sitemap)

## Technical SEO
- [ ] Unique `<title>` + meta description per indexable page (verify no dupes)
- [ ] Canonical URL on every page
- [ ] Open Graph + Twitter tags present
- [ ] `sitemap.ts` covers all indexable routes; excludes noindex/unsupported brands
- [ ] `robots.ts` allows crawl, references sitemap, disallows nothing critical
- [ ] `manifest.ts` + favicon/app icons render
- [ ] `llms.txt` route returns service/location/problem/FAQ/trust map
- [ ] One `<h1>` per page; logical heading order
- [ ] All internal links resolve (no 404s); breadcrumbs on all deep pages
- [ ] Static generation for all content routes (`generateStaticParams`)
- [ ] Images optimized (`next/image`), width/height set, no CLS
- [ ] Fonts: `next/font` (already Geist); no layout shift

## Structured data
- [ ] Organization + WebSite on all pages (root layout)
- [ ] Service schema on service pages
- [ ] LocalBusiness on location pages **only with verified NAP**; omit address if `null`
- [ ] BreadcrumbList on deep pages
- [ ] FAQPage where FAQs exist and match visible content
- [ ] NO aggregateRating / review schema until real reviews exist
- [ ] Validate via Rich Results Test before launch

## Local SEO
- [ ] Google Business Profile created/claimed (stove repair category), NAP matches site
- [ ] Service-area targeting matches `serviceAreas`
- [ ] Location pages ≥60% unique
- [ ] Consistent NAP across citations (only after real address/phone finalized)

## AEO / GEO
- [ ] Quick Answer blocks (40–70w) on home + service + location + problem pages
- [ ] Definition blocks present
- [ ] FAQ content answer-first
- [ ] `llms.txt` published

## Content integrity (no fabrication)
- [ ] No invented reviews/ratings/testimonials
- [ ] No fake technician names/photos, licenses, certifications, guarantees
- [ ] No fabricated job counts / years in business / case studies / before-after
- [ ] No exact prices presented as fact
- [ ] Emergency/same-day language only where configured true
- [ ] Brand claims only for `supported` brands

## Performance / a11y
- [ ] Lighthouse: minimal client JS, no large client components in core content
- [ ] `prefers-reduced-motion` respected
- [ ] WCAG: contrast, focus states, alt text, form labels, tap targets ≥44px
- [ ] `npm run lint` clean
- [ ] `npm run build` clean

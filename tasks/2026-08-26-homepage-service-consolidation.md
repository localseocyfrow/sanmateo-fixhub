# Homepage Service Consolidation — 2026-08-26

Status: **COMPLETE** (not committed)

## Task objective

Simplify the SanMateo FixHub homepage by removing three sections that duplicate
content already available on dedicated pages, and consolidate every stove service
into the existing "Popular Stove Repair Services" box so the homepage still links
directly to all ten service pages.

Homepage only. No other route, dataset, component, or schema may change.

## Requested homepage changes

1. **Remove the Pricing section** — eyebrow `PRICING`, heading
   `Stove Repair Cost & Pricing Guidance`, including the description, the
   `See Cost Guidance` button, and all four right-side factor cards.
2. **Remove the Service Areas section** — eyebrow `SERVICE AREAS`, heading
   `Stove Repair Service Areas Near San Mateo`, including the neighborhood intro
   sentence, all location cards, and the `All Service Areas` button.
3. **Expand the Popular Services box from 6 to all 10 services**, inside the
   retained `Local Stove Repair Specialists in San Mateo, CA` section. Two
   balanced columns on sufficiently wide desktops; one column on mobile.
4. **Remove the Full Service List section** — eyebrow `FULL SERVICE LIST`,
   heading `Every Stove Repair Service We Offer`, and its ten large cards.
5. Keep working internal links to all ten service pages; add no duplicate lists
   and no replacement Pricing/Service-Area sections.
6. Repair section flow: no orphan headings, empty wrappers, unused imports, or
   broken background alternation.
7. Change no SEO surface — H1, title, meta description, canonical, OG/Twitter,
   schema, FAQ, hero, header, footer — and do not keyword-stuff to compensate.

### Explicitly out of scope (must NOT change)

- `/stove-repair-cost-san-mateo-ca/` page, its metadata, schema, or content
- Any location page, `/locations/`, or location data
- Any service page, service data, or service URL
- Header / footer navigation entries for Pricing and Locations
- Sitemap entries, location schema, service-page schema
- Shared components (`ServiceCard`, `LocationCard`) that other pages import

## Files inspected

- `app/page.tsx` — homepage composition (all edits land here)
- `content/services.ts` — verified slugs, display names, and icons for all 10 services
- `lib/content.ts` — `services`, `cityLocations`, `getService` export surface
- `components/cards/Cards.tsx` — `ServiceCard` / `LocationCard` (still used elsewhere)
- `components/ui/Layout.tsx` — `Section` tint values and `Container` max width
- `components/ui/ProcessSteps.tsx` — confirms it renders white cards, so its
  section must stay `surface`
- `lib/nav.ts` — confirms Pricing/Locations nav entries live outside the homepage

## Files modified

- `app/page.tsx`
- `tasks/2026-08-26-homepage-service-consolidation.md` (this file)

## Implementation notes

All edits are confined to `app/page.tsx`.

### Sections removed

| Section | Eyebrow | Heading |
|---|---|---|
| Pricing | `PRICING` | Stove Repair Cost & Pricing Guidance |
| Service Areas | `SERVICE AREAS` | Stove Repair Service Areas Near San Mateo |
| Full Service List | `FULL SERVICE LIST` | Every Stove Repair Service We Offer |

Each `<Section>` was removed whole — heading, body, cards, and CTA button — with no
empty wrapper or orphaned comment left behind.

### Popular Services box expanded 6 → 10

The box previously mapped a hand-written `featuredServiceSlugs` array through
`getService()`. It now maps `services` from `content/services.ts` directly, so slugs,
display names, and icons all come from the data and cannot drift out of sync with the
routes. The file's existing order already matches the requested order exactly.

`featuredServiceSlugs` was deleted (it had no other consumer).

### Layout

The container split changed from `lg:grid-cols-[1.3fr_1fr]` to `lg:grid-cols-[1fr_1.1fr]`
so the box — which now carries ten entries instead of six — has room for two columns of
full-length service names. Left-column copy and CTAs are unchanged.

List: `grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2`

- `< 640px` — one column, full-width rows, `min-h-[48px]` touch targets
- `640–1023px` — two columns (the box spans the full container here)
- `1024–1279px` — one column; at this range the box is the narrow right-hand cell and
  two columns would truncate the longer names
- `>= 1280px` — two columns x five rows

Row typography steps down at `xl` (`text-sm`, `px-3`) which is what lets
"Emergency Stove Repair" and "Electric Stove Repair" fit on one line in the two-column
state. Verified by screenshot at 1280 (the tightest two-column width) — no truncation.

A first attempt used an arbitrary `min-[1120px]:` variant to start two columns earlier.
Tailwind v4 emitted that rule *before* the `lg` block in the stylesheet, so
`lg:grid-cols-1` overrode it at every width above 1120. Reverted to the standard `xl`
breakpoint, which orders correctly.

### Background alternation

Removing three sections broke the surface/white cascade (Before You Call and Why Choose
both landed on `white`). Rebalanced downstream:

- Why Choose: `white` -> `surface` (its cards `bg-surface` -> `bg-white` to stay visible)
- About: `surface` -> `white`
- FAQ: `white` -> `surface`
- Request form: `surface` -> `white`

Final chain: `surface white surface white navy white surface white surface white surface white`
+ navy CTA — no two adjacent sections share a tint.

### Unused code removed

- `ServiceCard`, `LocationCard` imports (still exported and used by other pages)
- `cityLocations`, `getService` imports
- `featuredServiceSlugs` constant
- Orphaned comments `{/* All services grid */}`, `{/* 13. Cost */}`, `{/* 14. Service areas */}`

## Validation performed

- Rendered-HTML assertions: all three removed headings and both removed CTA labels
  absent from `<main>`; ten unique `/services/*` links present.
- All ten service URLs return HTTP 200.
- `/stove-repair-cost-san-mateo-ca/`, `/locations/`, `/locations/san-mateo-ca/` all
  still return HTTP 200 — nothing outside the homepage was touched.
- Screenshots at 1920, 1440, 1280, 1024, 768, 390.
- Overflow + console audit at 1920, 1440, 1280, 1024, 768, 390, 360:
  `scrollWidth === clientWidth`, zero overflowing elements, zero console errors or
  warnings at every width.
- SEO surfaces re-read from rendered HTML and unchanged: `<title>`, meta description,
  canonical, `og:image`, H1.
- Schema unchanged: `[Organization, WebSite, HomeAndConstructionBusiness, FAQPage]`,
  no duplicates.
- `git diff` confirms no file outside `app/page.tsx` and `tasks/` was modified.

## Final result

Homepage reduced from 17 sections to 14. All ten stove services remain one click away
via the expanded Popular Stove Repair Services box. No duplicate service list, no
replacement Pricing or Service-Area section, no keyword compensation.

Rendered `<main>` word count: **2,179 -> 1,648** (-531).

## Lint / build results

- `npm run lint` — exit 0, clean
- `npm run build` — exit 0, compiled in 7.1s, 56/56 static pages, no warnings

## Git status

```
 M app/page.tsx
?? tasks/
```

```
 app/page.tsx | 122 +++++++++++++++--------------------------------------------
 1 file changed, 30 insertions(+), 92 deletions(-)
```

Not committed or pushed.

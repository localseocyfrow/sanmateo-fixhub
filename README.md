# SanMateo FixHub — Stove Repair Lead-Gen Site

A premium, production-ready local lead-generation website for **SanMateo FixHub**, a specialist stove-repair service in San Mateo, CA and the Peninsula. Built with **Next.js 16 (App Router, Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Stack & conventions

- App Router, Server Components by default (only `Header` and `RequestServiceForm` are client components).
- Static generation everywhere via `generateStaticParams` for `/services`, `/locations`, `/problems`, `/brands`.
- Data-driven content: page templates render typed content objects from `content/*`.
- Async request APIs (Next 16): `params` is a `Promise`.

## Project structure

```
app/          route segments, sitemap.ts, robots.ts, manifest.ts, icon.tsx, opengraph-image.tsx, llms.txt
components/    reusable UI (layout/, ui/, cards/) + Hero, Logo, Icon, PhoneLink, RequestServiceForm, JsonLd
content/       services, locations, problems, faqs data (the words on the pages)
lib/           site.ts (central config), types.ts, seo.ts, schema.ts, nav.ts, content.ts (access layer)
docs/          keyword research, architecture, linking map, launch checklist, ringba/form setup
```

## Configuration — everything lives in `lib/site.ts`

Business name, phone (display / tracking / e164), hours, service areas, email, address, availability flags,
supported brands, socials, form endpoint, and Ringba values. **Replace the placeholders before launch** — see
`docs/seo-launch-checklist.md`.

Environment variables (`.env.local`):

```bash
NEXT_PUBLIC_FORM_ENDPOINT=""       # see docs/form-integration.md
NEXT_PUBLIC_RINGBA_POOL_ID=""      # see docs/ringba-setup.md
NEXT_PUBLIC_RINGBA_SCRIPT_URL=""
```

## Commands

```bash
npm run dev      # local dev (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Content integrity

No fabricated reviews, ratings, credentials, technicians, job counts, prices, or availability claims.
Unverified "proof" areas (case studies, technicians, certifications, before/after, recent jobs) render as
clearly-labeled **future content** placeholders, gated behind flags in `lib/site.ts` (`features.*`). Brand pages only
publish/index when a brand is `supported: true`.

See `docs/` for keyword research, content architecture, internal linking, and the pre-launch checklist.

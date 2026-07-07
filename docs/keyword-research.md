# Keyword Research — SanMateo FixHub (Stove Repair, San Mateo CA)

**Market:** United States · Google · English
**Geo intent:** San Mateo, California + Peninsula (San Mateo County)
**Tooling:** Ahrefs Keywords Explorer (API v3), pulled 2026-07-07.
**Note on metrics:** `Volume`/`Global` are Ahrefs monthly search-volume estimates. `KD` = Keyword Difficulty (0–100). `CPC` shown in USD (converted from API cents). `TP` = Traffic Potential. Blank fields mean Ahrefs returned no data (typical for ultra-low-volume long-tail).

> ⚠️ **We do not promise rankings, exact search volume outcomes, or lead volume.** Volumes are third-party estimates and fluctuate.

---

## 1. Headline finding — how to read this market

Exact hyper-local strings such as **"stove repair san mateo"** return **0 tracked volume** in Ahrefs. This is normal and expected for a single-city service term — the real demand is captured by:

1. **National head + "near me" terms** that resolve to the searcher's location via the local pack (`stove repair`, `stove repair near me`, `gas stove repair near me`). These carry a `local` intent flag and trigger `local_pack` SERP features.
2. **Brand + appliance terms** (`whirlpool stove repair`, `viking range repair`, `ge stove repair`) — surprisingly high traffic potential, lower difficulty.
3. **Informational problem/symptom long-tail** (`gas stove clicking`, `stove not heating`, `stove clicking but not lighting`) — low volume individually but high combined intent and strong AEO/GEO (answer-engine) capture.

**Strategic implication:** rank-and-rent success here comes from (a) a strong, locally-optimized home + service + location cluster to win the San Mateo local pack, and (b) a wide informational/problem/brand content moat that earns answer-engine citations and long-tail organic. We target city-qualified pages for relevance and conversion even where the exact string shows nil volume, because they win via "near me" + local pack + long-tail combinations, not the exact match.

---

## 2. Primary & commercial keywords (measured)

| Keyword | Volume | Global | KD | CPC | Intent | TP | Notes |
|---|---|---|---|---|---|---|---|
| stove repair | 13,000 | 15,000 | 7 | $2.00 | comm/trans/local | 15,000 | Head term. Home + core service page. |
| stove repair near me | 13,000 | 17,000 | 31 | $2.00 | comm/trans/local | 3,800 | Local pack; parent topic "oven repair". |
| gas stove repair near me | 1,900 | 18,000 | 0 | $1.90 | comm/trans/local | 1,800 | Low KD, strong. Gas service page. |
| stove repair service | 600 | 1,100 | 26 | $2.50 | comm/trans/local | 7,200 | Supports service hub. |
| cooktop repair near me | 350 | 800 | 22 | $2.50 | comm/trans/local | 70 | Cooktop service page. |
| gas range repair near me | 250 | 600 | 8 | $1.80 | trans/local | — | Range service page. |
| burner repair | 200 | 300 | 0 | $5.00 | comm/local | 250 | Burner service page. High CPC. |
| stove repair cost | 100 | 150 | 0 | $2.00 | commercial | 250 | Pricing page. |
| electric range repair near me | 50 | 150 | 20 | $1.40 | comm/trans/local | — | Electric/range pages. |
| appliance repair san mateo | 40 | 40 | 0 | $4.00 | comm/trans/local | 60 | Local — reference only; we stay stove-specialist, do NOT target as a broad appliance page. |
| stove igniter repair | 40 | 50 | — | $1.50 | informational | — | Igniter service page. |
| emergency stove repair | 20 | 30 | — | $3.00 | (blank) | — | Emergency service page. High CPC. |
| same day stove repair | 10 | 10 | — | — | (blank) | — | Support term only; do NOT claim same-day unless configured. |
| stove repair san mateo | 0 | 0 | — | — | — | — | 0 tracked volume — still our brand/geo anchor via local pack. |

## 3. Brand-opportunity keywords (measured)

| Keyword | Volume | Global | KD | CPC | TP | Recommended handling |
|---|---|---|---|---|---|---|
| whirlpool stove repair | 1,000 | 1,100 | 1 | $2.00 | 18,000 | Brand page (only if Whirlpool enabled in config) |
| viking range repair | 900 | 1,000 | 1 | $4.50 | 3,400 | Brand page — high CPC, premium local (Viking/Wolf/Thermador cluster on Peninsula) |
| ge stove repair | 200 | 300 | 3 | $2.00 | 33,000 | Brand page — huge TP |
| samsung stove repair | 200 | 350 | 1 | $2.00 | 30,000 | Brand page — huge TP |

Brand KD is very low (1–3) with large traffic potential — the single strongest scalable opportunity. **Brand pages only publish/index when the brand is `supported: true` in `lib/site.ts`.** We build the system for GE, Whirlpool, Samsung, LG, Frigidaire, Bosch, KitchenAid, Viking, Thermador, Wolf but only enable/claim what the business confirms it services.

## 4. Problem / symptom keywords (measured — informational, AEO/GEO)

| Keyword | Volume | Global | KD | CPC | Parent topic | TP | Page |
|---|---|---|---|---|---|---|---|
| gas stove clicking | 150 | 200 | 0 | $0.45 | why does my gas stove keep clicking | 1,300 | /problems/stove-clicking-but-not-lighting/ |
| stove not heating | 100 | 100 | 0 | $0.00 | oven not heating up | 1,900 | /problems/stove-not-heating/ |
| stove won't turn on | 100 | 150 | 0 | $0.80 | gas stove not lighting | 1,600 | /problems/stove-wont-turn-on/ |
| gas smell from stove | 90 | 100 | 0 | $1.60 | stove gas leak | 350 | /problems/gas-smell-from-stove/ (safety-first) |
| stove clicking but not lighting | 80 | 90 | 0 | $0.15 | gas stove not lighting | 1,900 | /problems/stove-clicking-but-not-lighting/ |
| burner not working | 20 | 60 | 0 | $1.80 | burners on stove not working | 10 | /problems/burner-not-working/ |
| electric stove not heating | 20 | 30 | 0 | $0.03 | electric stove not heating up | 90 | /problems/electric-stove-not-heating/ |
| uneven burner flame | 0 | 0 | — | — | — | — | /problems/uneven-burner-flame/ (long-tail/AEO) |

Symptom terms are individually low but have **high traffic potential** via their parent topics (e.g. `stove clicking but not lighting` → TP 1,900). These are the answer-engine and long-tail moat.

## 5. Nearby-location intent

Peninsula city terms (`stove repair Burlingame`, `stove repair Redwood City`, `stove repair Daly City`, `stove repair San Bruno`, etc.) mirror the primary pattern: near-zero exact volume, captured through local pack + "near me" + brand + problem long-tail. We publish one genuinely-unique page per served city so we are eligible when a resident searches from that city. We do **not** duplicate content across cities.

## 6. Search-intent summary

- **Transactional/commercial + local:** head service terms, "near me", city terms, brand terms → **service & location pages** (conversion-first, LocalBusiness/Service schema, strong CTAs).
- **Informational:** symptom/problem terms, "how/why/cost" → **problem pages** (answer-first, FAQ, links down to service pages).
- **Commercial-investigation:** `stove repair cost`, `repair vs replacement` → **pricing page & comparison blocks**.

## 7. Cannibalization control

Highest risk pairs and how we separate them:

| Risk pair | Resolution |
|---|---|
| `/services/stove-repair-san-mateo-ca/` vs home `/` | Home = brand + full-service overview + local pack signal; service page = deep "stove repair" definition/process/cost. Home links down to the service page as canonical service target. |
| `/services/range-repair` vs `/services/cooktop-repair` | Distinct definitions + a Range vs Cooktop comparison block on both; different primary keywords (`gas range repair` vs `cooktop repair`). |
| `/problems/stove-clicking-but-not-lighting/` vs `/services/igniter-repair/` | Problem page = informational symptom + safety + "what to do next", links to igniter service page as the transactional target. Service page = the offer. |
| `/services/gas-stove-repair` vs `/services/electric-stove-repair` | Fuel-type specific; Gas vs Electric comparison block cross-links, no overlapping H1. |
| `/stove-repair-cost-san-mateo-ca/` vs `/services/*` cost sections | Standalone pricing page owns `stove repair cost`; service pages give short cost *guidance* only and link to the pricing page. |
| Location pages vs each other | ≥60% unique wording, city-specific housing/appliance angle per `lib/` data. |

## 8. Do-NOT-target (kept off-site or de-prioritized)

- **`appliance repair san mateo`** as a broad service page — conflicts with specialist positioning. Referenced once for context only.
- Generic "best/#1/top-rated appliance company" — brand-positioning violation and unverifiable.
- `same day` / `emergency` / `24/7` as *ranking claims* — only used where truthfully configured; the emergency page is educational + availability-check, not a guaranteed-response claim.

## 9. AEO / GEO angle

Answer-first Quick Answer blocks (40–70 words), concise definition blocks, and FAQ content are structured so answer engines can quote them. Problem pages directly answer "why is X happening / what should I do next". `llms.txt` maps services, locations, problems, FAQs and trust pages for LLM crawlers.

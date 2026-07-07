# Keyword → URL Map

One primary target per indexable URL. Meta titles/descriptions are generated in `lib/` content data + `lib/seo.ts`; the values below are the canonical intent for each page. Site brand suffix `| SanMateo FixHub` is appended by the title template.

Legend — Type: `home` `service` `location` `problem` `brand` `trust` `hub`. Intent: `T`=transactional/commercial-local, `I`=informational, `C`=commercial-investigation.

## Core

| URL | Primary keyword | Intent | Type | H1 |
|---|---|---|---|---|
| `/` | stove repair San Mateo CA | T | home | Stove Repair San Mateo CA by SanMateo FixHub |
| `/services/` | stove repair services San Mateo | T | hub | Stove Repair Services in San Mateo, CA |
| `/locations/` | stove repair service areas San Mateo County | T | hub | Where SanMateo FixHub Provides Stove Repair |
| `/service-areas/` | stove repair near me San Mateo Peninsula | T | hub | Stove Repair Service Areas Across the Peninsula |
| `/problems/` | common stove problems | I | hub | Common Stove Problems & What They Mean |
| `/brands/` | stove brands we repair | T | hub | Stove & Range Brands We Service |

## Service pages

| URL | Primary keyword | Secondary | Intent |
|---|---|---|---|
| `/services/stove-repair-san-mateo-ca/` | stove repair | stove repair service, stove repair near me | T |
| `/services/gas-stove-repair-san-mateo-ca/` | gas stove repair near me | gas stove repair San Mateo | T |
| `/services/electric-stove-repair-san-mateo-ca/` | electric stove repair | electric range repair near me | T |
| `/services/emergency-stove-repair-san-mateo-ca/` | emergency stove repair | fast stove repair | T |
| `/services/range-repair-san-mateo-ca/` | gas range repair near me | range repair San Mateo | T |
| `/services/cooktop-repair-san-mateo-ca/` | cooktop repair near me | cooktop repair San Mateo | T |
| `/services/burner-repair-san-mateo-ca/` | burner repair | burner not working repair | T |
| `/services/igniter-repair-san-mateo-ca/` | stove igniter repair | stove clicking repair | T |
| `/services/stove-control-board-repair-san-mateo-ca/` | stove control board repair | stove electronic control repair | T |
| `/services/pilot-light-repair-san-mateo-ca/` | pilot light repair | stove pilot light repair | T |

## Problem pages (informational → service)

| URL | Primary keyword | Links to service | Intent |
|---|---|---|---|
| `/problems/stove-not-heating/` | stove not heating | electric/gas stove repair | I |
| `/problems/stove-clicking-but-not-lighting/` | stove clicking but not lighting | igniter repair | I |
| `/problems/gas-smell-from-stove/` | gas smell from stove | gas stove / emergency | I |
| `/problems/burner-not-working/` | burner not working | burner repair | I |
| `/problems/stove-wont-turn-on/` | stove won't turn on | control board / stove repair | I |
| `/problems/electric-stove-not-heating/` | electric stove not heating | electric stove repair | I |
| `/problems/stove-keeps-shutting-off/` | stove keeps shutting off | control board repair | I |
| `/problems/uneven-burner-flame/` | uneven burner flame | burner repair | I |
| `/problems/stove-temperature-issue/` | stove temperature problem | stove repair | I |
| `/problems/oven-works-but-stove-does-not/` | oven works but stove doesn't | stove repair | I |

## Location pages

| URL | Primary keyword | Local angle |
|---|---|---|
| `/locations/san-mateo-ca/` | stove repair San Mateo CA (parent) | citywide, mixed housing |
| `/locations/stove-repair-burlingame-ca/` | stove repair Burlingame CA | family homes, older appliances |
| `/locations/stove-repair-foster-city-ca/` | stove repair Foster City CA | condos, modern electric/cooktop |
| `/locations/stove-repair-belmont-ca/` | stove repair Belmont CA | hillside homes, gas/burner |
| `/locations/stove-repair-san-carlos-ca/` | stove repair San Carlos CA | family kitchens, ranges, ignition |
| `/locations/stove-repair-millbrae-ca/` | stove repair Millbrae CA | rentals, range/cooktop |
| `/locations/stove-repair-redwood-city-ca/` | stove repair Redwood City CA | mixed housing, rental urgency |
| `/locations/stove-repair-daly-city-ca/` | stove repair Daly City CA | busy homes, gas + electric |
| `/locations/stove-repair-south-san-francisco-ca/` | stove repair South San Francisco CA | residential + small commercial |
| `/locations/stove-repair-san-bruno-ca/` | stove repair San Bruno CA | burner + igniter |
| `/locations/stove-repair-half-moon-bay-ca/` | stove repair Half Moon Bay CA | coastal, seasonal homes |
| `/locations/san-mateo-county-stove-repair/` | San Mateo County stove repair | county-wide coverage |

## Brand pages (publish only if `supported: true`)

`/brands/[brand]-stove-repair-san-mateo-ca/` — target `[brand] stove repair`. Priority by TP/volume: GE, Samsung (TP ~30k), Whirlpool (vol 1k), Viking (vol 900, high CPC), then LG, Frigidaire, Bosch, KitchenAid, Thermador, Wolf.

## Trust / legal (mostly noindex-friendly but kept indexable where useful)

`/about/`, `/contact/`, `/repair-process/`, `/emergency-stove-help/`, `/stove-repair-cost-san-mateo-ca/` (targets **stove repair cost**), `/warranty/`, `/safety/`, `/certifications/`, `/technicians/`, `/brands-we-service/`, `/case-studies/`, `/before-after/`, `/faq/`, `/privacy-policy/`, `/terms/`.

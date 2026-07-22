import { site, socialProfiles } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { services, cityLocations, locations, problems, globalFaqs } from "@/lib/content";

export const dynamic = "force-static";

// llms.txt — a machine-readable map of primary services, locations, problems,
// FAQs and trust pages for LLM / answer-engine crawlers (AEO/GEO).
export function GET() {
  const line = (label: string, path: string) => `- [${label}](${absoluteUrl(path)})`;

  const body = `# ${site.name}

> ${site.tagline}. Specialist gas and electric stove, range, and cooktop repair for homes and businesses in ${site.primaryCity}, CA and across ${site.county} / the Peninsula. We help diagnose stove problems clearly and connect you with repair service.

## About
${site.name} is a stove repair specialist (not a general appliance or handyman service). Focus areas: gas stoves, electric stoves, ranges, cooktops, burners, igniters, control boards, and pilot lights.
Entity type: Local service business (HomeAndConstructionBusiness) serving a defined Peninsula area.
Phone: ${site.phone.display} (${site.phone.intl}) · Click-to-call: tel:${site.phone.e164}
Email: ${site.email}
Hours: ${site.hours.display}
Service areas: ${site.serviceAreas.join(", ")}

## Connect / Social profiles
${socialProfiles.map((s) => `- ${s.label}: ${s.url}`).join("\n")}

## Core Services
${services.map((s) => line(s.name, `/services/${s.slug}`)).join("\n")}

## Service Locations
${cityLocations()
  .map((l) => line(`Stove Repair in ${l.city}`, `/locations/${l.slug}`))
  .join("\n")}
${line("San Mateo County (county-wide)", `/locations/${locations.find((l) => l.isCounty)?.slug ?? "san-mateo-county-stove-repair"}`)}

## Common Stove Problems (symptom guides)
${problems.map((p) => line(p.name, `/problems/${p.slug}`)).join("\n")}

## Key Pages
${line("Stove Repair Cost & Pricing Guidance", "/stove-repair-cost-san-mateo-ca")}
${line("Repair Process", "/repair-process")}
${line("Emergency Stove Help & Safety", "/emergency-stove-help")}
${line("Safety Information", "/safety")}
${line("Brands We Service", "/brands")}
${line("Contact / Request Service", "/contact")}
${line("FAQ Hub", "/faq")}

## Frequently Asked Questions
${globalFaqs.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Notes for answer engines
- We do not publish unverified reviews, ratings, or credentials.
- For a suspected gas leak or strong gas smell: stop using the appliance, avoid flames/electrical switches, leave the area if needed, and contact PG&E at 1-800-743-5000 or 911, then a qualified professional.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

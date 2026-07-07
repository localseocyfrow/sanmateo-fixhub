// Content access layer — the single place pages import content from.
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { problems } from "@/content/problems";
import { posts } from "@/content/blog";
import { globalFaqs } from "@/content/faqs";
import { brands } from "@/lib/site";
import type { Service, Location, Problem, BlogPost, Brand } from "@/lib/types";

export { services, locations, problems, posts, globalFaqs, brands };

// ── Services ────────────────────────────────────────────────────────────────
export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
export const serviceSlugs = () => services.map((s) => s.slug);

// ── Locations ───────────────────────────────────────────────────────────────
export const getLocation = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
export const locationSlugs = () => locations.map((l) => l.slug);
export const parentLocation = () => locations.find((l) => l.isParent);
export const cityLocations = () => locations.filter((l) => !l.isCounty);

// ── Problems ────────────────────────────────────────────────────────────────
export const getProblem = (slug: string): Problem | undefined =>
  problems.find((p) => p.slug === slug);
export const problemSlugs = () => problems.map((p) => p.slug);

// ── Blog ────────────────────────────────────────────────────────────────────
export const getPost = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);
export const postSlugs = () => posts.map((p) => p.slug);
export const postsSorted = (): BlogPost[] =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

// ── Brands (only supported are public) ──────────────────────────────────────
export const getBrand = (slug: string): Brand | undefined =>
  brands.find((b) => b.slug === slug);
export const supportedBrandList = (): Brand[] => brands.filter((b) => b.supported);
export const brandPageSlug = (slug: string) => `${slug}-stove-repair-san-mateo-ca`;
export const parseBrandPageSlug = (pageSlug: string): Brand | undefined => {
  const m = pageSlug.match(/^(.+)-stove-repair-san-mateo-ca$/);
  if (!m) return undefined;
  return brands.find((b) => b.slug === m[1] && b.supported);
};

// ── Cross-link helpers ──────────────────────────────────────────────────────
export function serviceLink(slug: string) {
  const s = getService(slug);
  return s ? { label: s.name, href: `/services/${s.slug}/`, description: s.summary } : null;
}
export function problemLink(slug: string) {
  const p = getProblem(slug);
  return p ? { label: p.name, href: `/problems/${p.slug}/`, description: p.summary } : null;
}
export function locationLink(slug: string) {
  const l = getLocation(slug);
  return l
    ? { label: `Stove Repair in ${l.city}`, href: `/locations/${l.slug}/`, description: l.summary }
    : null;
}

import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services, locations, problems, supportedBrandList, brandPageSlug } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/services/", priority: 0.9, freq: "monthly" },
    { path: "/locations/", priority: 0.8, freq: "monthly" },
    { path: "/problems/", priority: 0.8, freq: "monthly" },
    { path: "/brands/", priority: 0.6, freq: "monthly" },
    { path: "/stove-repair-cost-san-mateo-ca/", priority: 0.8, freq: "monthly" },
    { path: "/repair-process/", priority: 0.6, freq: "monthly" },
    { path: "/emergency-stove-help/", priority: 0.7, freq: "monthly" },
    { path: "/about/", priority: 0.5, freq: "yearly" },
    { path: "/contact/", priority: 0.7, freq: "yearly" },
    { path: "/safety/", priority: 0.5, freq: "yearly" },
    { path: "/faq/", priority: 0.6, freq: "monthly" },
    { path: "/privacy-policy/", priority: 0.2, freq: "yearly" },
    { path: "/terms/", priority: 0.2, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  for (const s of services)
    entries.push({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.85 });

  // location index handled above; add each location page
  for (const l of locations)
    entries.push({ url: absoluteUrl(`/locations/${l.slug}`), lastModified: now, changeFrequency: "monthly", priority: l.isParent ? 0.85 : 0.7 });

  for (const p of problems)
    entries.push({ url: absoluteUrl(`/problems/${p.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7 });

  // Only supported brand pages are indexable.
  for (const b of supportedBrandList())
    entries.push({ url: absoluteUrl(`/brands/${brandPageSlug(b.slug)}`), lastModified: now, changeFrequency: "monthly", priority: 0.6 });

  return entries;
}

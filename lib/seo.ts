import type { Metadata } from "next";
import { site } from "./site";

/**
 * Static image extensions. A path ending in one of these is a real file, not a
 * route, so it must NOT be trailing-slash normalized: `…/hero.png/` only reaches
 * the file via a 308 redirect, which is a wasted hop for a URL published in
 * structured data. Deliberately images only — every other absoluteUrl() caller
 * passes a page path or an extensionless route (e.g. /opengraph-image), which
 * must keep its trailing slash.
 */
const ASSET_EXTENSION = /\.(?:png|jpe?g|webp|svg|gif|avif|ico)$/i;

/**
 * Absolute URL for a site-relative path. Page routes are trailing-slash
 * normalized to match `trailingSlash: true` in next.config; static image paths
 * are returned untouched.
 */
export function absoluteUrl(path = "/"): string {
  const base = site.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return ASSET_EXTENSION.test(clean) ? `${base}/${clean}` : `${base}/${clean}/`;
}

type BuildMetaArgs = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/gas-stove-repair-san-mateo-ca". */
  path: string;
  /** Override the OG type (default "website"). */
  ogType?: "website" | "article";
  /** Exclude from indexing (e.g. legal utility pages if desired). */
  noindex?: boolean;
  /** Publication date for article OG. */
  publishedTime?: string;
  /**
   * Render the document <title> exactly as given, bypassing the root layout's
   * `%s | SanMateo FixHub` template. Use on pages whose title already contains
   * the brand, to avoid duplicating it.
   */
  titleAbsolute?: boolean;
};

/** Central metadata builder — canonical + Open Graph + Twitter, consistently. */
export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  noindex = false,
  publishedTime,
  titleAbsolute = false,
}: BuildMetaArgs): Metadata {
  const url = absoluteUrl(path);
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: ogType,
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@sanmateofixhub",
      creator: "@sanmateofixhub",
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

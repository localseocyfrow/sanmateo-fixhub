import type { Metadata } from "next";
import { site } from "./site";

/** Absolute URL for a site-relative path (always trailing-slash normalized). */
export function absoluteUrl(path = "/"): string {
  const base = site.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const clean = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}/`;
  return `${base}${clean}`;
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
};

/** Central metadata builder — canonical + Open Graph + Twitter, consistently. */
export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  noindex = false,
  publishedTime,
}: BuildMetaArgs): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
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
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

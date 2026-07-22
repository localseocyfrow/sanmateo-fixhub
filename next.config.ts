import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URLs, internal links, and the sitemap all use trailing slashes.
  // Serve those directly (no 308 redirect hop) by making them canonical.
  trailingSlash: true,

  // Hub consolidation (SEO Phase 2): fold each duplicate hub into its single
  // canonical hub to remove keyword cannibalization. 308 (permanent) so search
  // engines transfer signals to the survivor. Destinations carry a trailing
  // slash so the indexed `/source/` URL lands on the canonical hub in a single
  // hop. (A slash-less `/source` visit still takes the site-wide trailing-slash
  // normalization hop first — identical to every URL under trailingSlash:true —
  // then this redirect; that first hop can't be removed for these paths alone.)
  async redirects() {
    return [
      { source: "/service-areas", destination: "/locations/", permanent: true },
      { source: "/brands-we-service", destination: "/brands/", permanent: true },
    ];
  },
};

export default nextConfig;

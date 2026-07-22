import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URLs, internal links, and the sitemap all use trailing slashes.
  // Serve those directly (no 308 redirect hop) by making them canonical.
  trailingSlash: true,

  // Hub consolidation (SEO Phase 2): fold each duplicate hub into its single
  // canonical hub to remove keyword cannibalization. 308 (permanent) so search
  // engines transfer signals to the survivor. trailingSlash:true normalizes the
  // `/source/` form to these slash-less sources automatically.
  async redirects() {
    return [
      { source: "/service-areas", destination: "/locations", permanent: true },
      { source: "/brands-we-service", destination: "/brands", permanent: true },
    ];
  },
};

export default nextConfig;

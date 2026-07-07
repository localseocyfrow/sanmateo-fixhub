import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URLs, internal links, and the sitemap all use trailing slashes.
  // Serve those directly (no 308 redirect hop) by making them canonical.
  trailingSlash: true,
};

export default nextConfig;

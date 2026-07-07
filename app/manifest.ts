import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Stove Repair San Mateo`,
    short_name: "FixHub",
    description: `${site.tagline}. Gas & electric stove, range, and cooktop repair in San Mateo, CA.`,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7fa",
    theme_color: "#10324a",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}

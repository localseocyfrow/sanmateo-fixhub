import type { NavItem } from "./types";
import { publicBlogPosts } from "@/content/blogs";

// Blog is surfaced in nav only once at least one PUBLIC post exists (published +
// scheduled time reached); while none qualify this returns [] and the link stays
// hidden. Evaluated per render — NOT at module scope — so the daily cron
// revalidation (app/api/cron/publish-blogs) picks up a newly due post instead of
// reusing a value frozen when the module was first loaded.
const blogNav = (now?: Date): NavItem[] =>
  publicBlogPosts(now).length > 0 ? [{ label: "Blog", href: "/blog/" }] : [];

// Static part of the header navigation. Slugs match content/* entries and route
// folders. Use `getHeaderNav()` to render — it splices in the gated Blog link.
const baseHeaderNav: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Stove Repair", href: "/services/stove-repair-san-mateo-ca/" },
      { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/" },
      { label: "Electric Stove Repair", href: "/services/electric-stove-repair-san-mateo-ca/" },
      { label: "Emergency Stove Repair", href: "/services/emergency-stove-repair-san-mateo-ca/" },
      { label: "Range Repair", href: "/services/range-repair-san-mateo-ca/" },
      { label: "Cooktop Repair", href: "/services/cooktop-repair-san-mateo-ca/" },
      { label: "Burner Repair", href: "/services/burner-repair-san-mateo-ca/" },
      { label: "Igniter Repair", href: "/services/igniter-repair-san-mateo-ca/" },
      { label: "Control Board Repair", href: "/services/stove-control-board-repair-san-mateo-ca/" },
      { label: "Pilot Light Repair", href: "/services/pilot-light-repair-san-mateo-ca/" },
      { label: "All Services →", href: "/services/" },
    ],
  },
  {
    label: "Locations",
    href: "/locations/",
    children: [
      { label: "San Mateo", href: "/locations/san-mateo-ca/" },
      { label: "Burlingame", href: "/locations/stove-repair-burlingame-ca/" },
      { label: "Foster City", href: "/locations/stove-repair-foster-city-ca/" },
      { label: "Belmont", href: "/locations/stove-repair-belmont-ca/" },
      { label: "San Carlos", href: "/locations/stove-repair-san-carlos-ca/" },
      { label: "Millbrae", href: "/locations/stove-repair-millbrae-ca/" },
      { label: "Redwood City", href: "/locations/stove-repair-redwood-city-ca/" },
      { label: "Daly City", href: "/locations/stove-repair-daly-city-ca/" },
      { label: "South San Francisco", href: "/locations/stove-repair-south-san-francisco-ca/" },
      { label: "San Bruno", href: "/locations/stove-repair-san-bruno-ca/" },
      { label: "Half Moon Bay", href: "/locations/stove-repair-half-moon-bay-ca/" },
      { label: "San Mateo County", href: "/locations/san-mateo-county-stove-repair/" },
      { label: "All Service Areas →", href: "/locations/" },
    ],
  },
  { label: "Problems", href: "/problems/" },
  { label: "Brands", href: "/brands/" },
  { label: "Pricing", href: "/stove-repair-cost-san-mateo-ca/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Header navigation for the current moment, with Blog inserted after Brands
 * once at least one post is public. Called from the root layout (a Server
 * Component) and passed to <Header> as a prop, so the gate is evaluated on the
 * server at render time rather than baked into the client bundle at build time.
 */
export const getHeaderNav = (now?: Date): NavItem[] => {
  const brandsIndex = baseHeaderNav.findIndex((item) => item.label === "Brands");
  return [
    ...baseHeaderNav.slice(0, brandsIndex + 1),
    ...blogNav(now),
    ...baseHeaderNav.slice(brandsIndex + 1),
  ];
};

// Footer link columns.
export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Stove Repair", href: "/services/stove-repair-san-mateo-ca/" },
      { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/" },
      { label: "Electric Stove Repair", href: "/services/electric-stove-repair-san-mateo-ca/" },
      { label: "Emergency Stove Repair", href: "/services/emergency-stove-repair-san-mateo-ca/" },
      { label: "Range Repair", href: "/services/range-repair-san-mateo-ca/" },
      { label: "Cooktop Repair", href: "/services/cooktop-repair-san-mateo-ca/" },
      { label: "All Services", href: "/services/" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "San Mateo", href: "/locations/san-mateo-ca/" },
      { label: "Burlingame", href: "/locations/stove-repair-burlingame-ca/" },
      { label: "Foster City", href: "/locations/stove-repair-foster-city-ca/" },
      { label: "Redwood City", href: "/locations/stove-repair-redwood-city-ca/" },
      { label: "Daly City", href: "/locations/stove-repair-daly-city-ca/" },
      { label: "San Mateo County", href: "/locations/san-mateo-county-stove-repair/" },
      { label: "All Service Areas", href: "/locations/" },
    ],
  },
  {
    title: "Help & Problems",
    links: [
      { label: "Common Stove Problems", href: "/problems/" },
      { label: "Stove Not Heating", href: "/problems/stove-not-heating/" },
      { label: "Clicking But Not Lighting", href: "/problems/stove-clicking-but-not-lighting/" },
      { label: "Gas Smell From Stove", href: "/problems/gas-smell-from-stove/" },
      { label: "Repair Process", href: "/repair-process/" },
      { label: "Emergency Stove Help", href: "/emergency-stove-help/" },
      { label: "Pricing Guidance", href: "/stove-repair-cost-san-mateo-ca/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Brands We Service", href: "/brands/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Safety", href: "/safety/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
];

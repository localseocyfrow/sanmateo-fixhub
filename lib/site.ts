// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL SITE CONFIGURATION — SINGLE SOURCE OF TRUTH
// Replace the PLACEHOLDER values before launch. See docs/seo-launch-checklist.md.
// Nothing here should be duplicated elsewhere in the codebase.
// ─────────────────────────────────────────────────────────────────────────────

import type { Brand } from "./types";

export const site = {
  name: "SanMateo FixHub",
  legalName: "SanMateo FixHub",
  tagline: "Local Stove Repair Specialists in San Mateo, CA",
  /** Production URL — used for canonical, Open Graph, sitemap. REPLACE. */
  siteUrl: "https://www.sanmateofixhub.com",

  // ── PHONE (PLACEHOLDER — replace with real / Ringba tracking number) ─────────
  phone: {
    /** Human-readable number shown on the page. */
    display: "(650) 000-0000",
    /** Tracking number (may equal display, or a Ringba static fallback). */
    tracking: "(650) 000-0000",
    /** E.164 for tel: links. */
    e164: "+16500000000",
  },

  // ── CONTACT ──────────────────────────────────────────────────────────────────
  email: "hello@sanmateofixhub.com", // PLACEHOLDER
  /**
   * Public street address. Leave `null` unless a real, public, staffed address
   * exists — a null address suppresses postal-address fields in LocalBusiness
   * schema (a service-area business should not invent a storefront).
   */
  address: null as null | {
    street: string;
    city: string;
    region: string; // "CA"
    postalCode: string;
    country: string; // "US"
  },
  /** Geo center for service-area map context (San Mateo, CA). */
  geo: { lat: 37.5629917, lng: -122.3255254 },

  // ── HOURS (PLACEHOLDER — confirm real hours) ─────────────────────────────────
  hours: {
    display: "Mon–Sat, 8:00 AM – 6:00 PM",
    /** Structured for potential schema use once verified. */
    spec: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], open: "08:00", close: "18:00" },
    ],
  },

  // ── AVAILABILITY CLAIMS — set true ONLY if genuinely offered ─────────────────
  emergencyAvailable: false,
  sameDayAvailable: false,

  // ── SERVICE AREAS ────────────────────────────────────────────────────────────
  primaryCity: "San Mateo",
  region: "CA",
  county: "San Mateo County",
  serviceAreas: [
    "San Mateo",
    "Burlingame",
    "Foster City",
    "Belmont",
    "San Carlos",
    "Millbrae",
    "Redwood City",
    "Daly City",
    "South San Francisco",
    "San Bruno",
    "Half Moon Bay",
    "San Mateo County",
  ],

  // ── SOCIAL (PLACEHOLDER — add real profiles or leave empty) ──────────────────
  social: {
    facebook: "",
    instagram: "",
    yelp: "",
    google: "",
  },

  // ── FORMS (see docs/form-integration.md) ─────────────────────────────────────
  forms: {
    /** Endpoint the RequestServiceForm POSTs to. Empty => graceful no-op notice. */
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
    /** Where lead notifications should be sent (documentation only). */
    notifyEmail: "leads@sanmateofixhub.com", // PLACEHOLDER
  },

  // ── RINGBA CALL TRACKING (see docs/ringba-setup.md) ──────────────────────────
  ringba: {
    /** Set true only once the tag + number pool are live. */
    enabled: false,
    /** Ringba number-pool / campaign tag id. */
    numberPoolId: process.env.NEXT_PUBLIC_RINGBA_POOL_ID ?? "",
    /** Ringba JS tag URL (loaded only when enabled). */
    scriptUrl: process.env.NEXT_PUBLIC_RINGBA_SCRIPT_URL ?? "",
  },

  // ── PROOF / TRUST FEATURE FLAGS — enable only with VERIFIED content ───────────
  // These gate whether "proof" sections show real content or a clearly-labeled
  // "future content area" placeholder. Never flip to true without real data.
  features: {
    reviews: false,
    testimonials: false,
    caseStudies: false,
    beforeAfter: false,
    technicians: false,
    certifications: false,
    warranty: false,
    recentJobs: false,
  },
} as const;

// ── SUPPORTED BRANDS ───────────────────────────────────────────────────────────
// Only brands with `supported: true` render a public/indexed brand page and may
// be claimed as serviced. Flip these on only when the business confirms service.
export const brands: Brand[] = [
  {
    slug: "ge",
    name: "GE",
    supported: false,
    blurb: "GE and GE Profile gas and electric stoves, ranges, and cooktops.",
    commonIssues: ["Glow-bar igniter wear", "Weak surface burner ignition", "Radiant element faults", "Control knob and switch issues"],
    notes: ["Common in many San Mateo kitchens across a wide range of model years."],
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    supported: false,
    blurb: "Whirlpool gas and electric ranges and cooktops.",
    commonIssues: ["Igniter click without light", "Uneven oven-to-cooktop heating", "Coil element connections", "Spark module faults"],
    notes: ["A widely used mainstream brand with broadly available components."],
  },
  {
    slug: "samsung",
    name: "Samsung",
    supported: false,
    blurb: "Samsung gas, electric, and induction ranges and cooktops.",
    commonIssues: ["Electronic control quirks", "Sensor and knob-light behavior", "Induction coil detection", "Sealed burner ignition"],
    notes: ["Feature-rich electronic controls; diagnosis focuses on control and sensor behavior."],
  },
  {
    slug: "lg",
    name: "LG",
    supported: false,
    blurb: "LG electric, gas, and induction cooking appliances.",
    commonIssues: ["Radiant and induction element faults", "Touch control response", "Sealed burner ignition", "Control board behavior"],
    notes: ["Often found in newer condo and remodeled Peninsula kitchens."],
  },
  {
    slug: "frigidaire",
    name: "Frigidaire",
    supported: false,
    blurb: "Frigidaire gas and electric ranges and cooktops.",
    commonIssues: ["Coil and radiant element wear", "Igniter and spark issues", "Infinite switch faults"],
    notes: ["A common value brand in rentals and family homes."],
  },
  {
    slug: "bosch",
    name: "Bosch",
    supported: false,
    blurb: "Bosch gas, electric, and induction cooktops and ranges.",
    commonIssues: ["Induction fan and coil behavior", "Sealed burner ignition", "Touch control faults"],
    notes: ["Premium European cooktops popular in modern remodels."],
  },
  {
    slug: "kitchenaid",
    name: "KitchenAid",
    supported: false,
    blurb: "KitchenAid gas and electric ranges and cooktops.",
    commonIssues: ["Dual-fuel ignition", "Burner cap alignment", "Control and knob issues"],
    notes: ["Higher-end mainstream brand seen in upgraded kitchens."],
  },
  {
    slug: "viking",
    name: "Viking",
    supported: false,
    blurb: "Viking professional-style gas ranges and rangetops.",
    commonIssues: ["Spark ignition modules", "Bering/burner assembly service", "Gas valve and orifice issues"],
    notes: ["Pro-style ranges common in higher-end San Mateo and Peninsula homes."],
  },
  {
    slug: "thermador",
    name: "Thermador",
    supported: false,
    blurb: "Thermador professional gas ranges and cooktops.",
    commonIssues: ["Star burner ignition", "ExtraLow simmer behavior", "Spark and valve service"],
    notes: ["Premium pro-style cooking equipment."],
  },
  {
    slug: "wolf",
    name: "Wolf",
    supported: false,
    blurb: "Wolf professional dual-fuel and gas ranges and rangetops.",
    commonIssues: ["Spark ignition", "Burner and grate service", "Control and valve behavior"],
    notes: ["High-end pro ranges; parts and service are specialized."],
  },
];

export const supportedBrands = () => brands.filter((b) => b.supported);

// Convenience derived values
export const clickToCall = `tel:${site.phone.e164}`;

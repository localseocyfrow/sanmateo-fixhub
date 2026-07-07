// Shared content + config types for SanMateo FixHub.
// Content is data-driven: templates render these shapes so every page is
// structurally consistent while its copy stays unique per entry.

export type Faq = {
  question: string;
  answer: string;
};

export type CtaVariant = "primary" | "secondary" | "ghost";

export type Comparison = {
  title: string;
  intro?: string;
  leftLabel: string;
  rightLabel: string;
  rows: { aspect: string; left: string; right: string }[];
};

/** A block of text with a heading — the flexible body section of a page. */
export type ContentSection = {
  heading: string;
  /** Each string is one paragraph. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
};

export type Service = {
  slug: string; // e.g. "gas-stove-repair-san-mateo-ca"
  /** Short nav / card label, e.g. "Gas Stove Repair" */
  name: string;
  /** Primary keyword phrase for this page, e.g. "gas stove repair near me" */
  primaryKeyword: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary for cards and related-link lists. */
  summary: string;
  /** 40–70 word answer-first paragraph. */
  quickAnswer: string;
  /** Answer-first intro paragraphs (brand + kw + San Mateo in first 100 words). */
  intro: string[];
  /** "What is X?" definition block. */
  definition: { term: string; body: string };
  /** Signs the customer may need this service. */
  signs: string[];
  /** Common causes or components involved. */
  causes: { title: string; detail: string }[];
  /** How inspection & diagnosis works for this service. */
  diagnosis: string[];
  /** Why fast repair matters for this service. */
  whyFast: string[];
  /** Safe repair methods / parts involved. */
  repairApproach: string[];
  /** San Mateo local relevance paragraph(s). */
  localRelevance: string[];
  /** Short cost-guidance paragraph (no exact prices). */
  costGuidance: string;
  comparison?: Comparison;
  faqs: Faq[];
  /** Slugs of related services. */
  relatedServices: string[];
  /** Slugs of related problem pages. */
  relatedProblems: string[];
  icon: IconName;
  /** Show emergency CTA styling / links prominently. */
  emergency?: boolean;
};

export type Location = {
  slug: string; // e.g. "stove-repair-burlingame-ca" or "san-mateo-ca"
  city: string; // "Burlingame"
  /** True for the parent San Mateo hub page. */
  isParent?: boolean;
  /** True for the county-wide page. */
  isCounty?: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  quickAnswer: string;
  intro: string[];
  /** Local housing / appliance / climate / access context. */
  localContext: ContentSection;
  /** Main stove problems discussed for this area. */
  commonProblems: string[];
  /** Why fast repair matters locally. */
  whyLocal: string[];
  /** Nearby neighborhoods / communities (text mentions). */
  neighborhoods: string[];
  /** Slugs of nearby city pages to cross-link. */
  nearbySlugs: string[];
  faqs: Faq[];
};

export type Problem = {
  slug: string; // e.g. "stove-not-heating"
  /** Short label, e.g. "Stove Not Heating" */
  name: string;
  primaryKeyword: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  quickAnswer: string;
  /** Symptom explained in first paragraph(s). */
  intro: string[];
  /** Likely causes (framed as possibilities, not remote diagnosis). */
  likelyCauses: { title: string; detail: string }[];
  /** Safety guidance where relevant. */
  safety?: string[];
  /** "What should I do next?" steps. */
  nextSteps: string[];
  faqs: Faq[];
  /** Slug of the matching service page. */
  serviceSlug: string;
  /** Link the emergency page prominently. */
  emergencyRelevant?: boolean;
  /** Slugs of related problems. */
  relatedProblems: string[];
  icon: IconName;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** ISO date string. */
  date: string;
  /** Answer-first excerpt (also the answer in first 2–3 sentences). */
  excerpt: string;
  /** Reading category tag. */
  category: string;
  /** Ordered content sections (answer-first). */
  sections: ContentSection[];
  faqs?: Faq[];
  /** Related service slug for CTA/links. */
  serviceSlug?: string;
  /** Related location slug. */
  locationSlug?: string;
  /** Related problem slug. */
  problemSlug?: string;
};

export type Brand = {
  slug: string; // "whirlpool"
  name: string; // "Whirlpool"
  /** Whether the business actually services this brand. Gates publish/index. */
  supported: boolean;
  /** One-line positioning. */
  blurb: string;
  /** Brand-specific common stove issues. */
  commonIssues: string[];
  /** Notes on typical models/lines (generic, non-trademarked claims). */
  notes: string[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type IconName =
  | "stove"
  | "flame"
  | "spark"
  | "burner"
  | "range"
  | "cooktop"
  | "board"
  | "pilot"
  | "bolt"
  | "wrench"
  | "shield"
  | "clock"
  | "alert"
  | "thermometer"
  | "power"
  | "check"
  | "phone"
  | "search";

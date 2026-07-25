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

// ── Rich article blocks ──────────────────────────────────────────────────────
// Structured, reusable building blocks for long-form articles. Every block is
// plain data rendered by <BlogBlocks>, so source articles keep their tables,
// stat rows, comparisons, and callouts without any raw HTML, inline styles, or
// dangerouslySetInnerHTML reaching the repository.

/** A block carrying `heading` + `anchor` is picked up by the page guide. */
type Anchored = {
  heading?: string;
  /** Slug used for the in-page anchor and the table of contents. */
  anchor?: string;
};

/**
 * Contextual link rendered after a block's copy. An absolute `http(s)` href to
 * another host is treated as external and rendered with rel="nofollow noopener
 * noreferrer" + target="_blank"; a site-relative href renders as an internal
 * link. Used to preserve a source article's in-context links (service pages,
 * external safety authorities) without inline HTML.
 */
type BlockLink = { label: string; href: string };

export type BlogBlock =
  /** Standard prose section: paragraphs plus an optional bullet list. */
  | (Anchored & {
      kind: "prose";
      body?: string[];
      bullets?: string[];
      links?: BlockLink[];
      footnote?: string;
    })
  /** Row of headline figures — e.g. a pricing summary. */
  | (Anchored & {
      kind: "stats";
      intro?: string[];
      items: { value: string; label: string; note?: string }[];
      footnote?: string;
    })
  /** Responsive data table. Scrolls horizontally inside its own container. */
  | (Anchored & {
      kind: "table";
      intro?: string[];
      caption?: string;
      columns: string[];
      rows: string[][];
      footnote?: string;
    })
  /** Side-by-side "this vs that" cards, each with its own checklist. */
  | (Anchored & {
      kind: "compare";
      intro?: string[];
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
      footnote?: string;
    })
  /** Highlighted box. `safety` renders the site's Safety First treatment. */
  | {
      kind: "callout";
      tone?: "info" | "safety";
      heading?: string;
      body?: string[];
      bullets?: string[];
      links?: BlockLink[];
    }
  /** Ordered or unordered checklist. */
  | (Anchored & {
      kind: "checklist";
      intro?: string[];
      ordered?: boolean;
      items: string[];
      footnote?: string;
    })
  /** Inline conversion band placed mid-article. */
  | { kind: "cta"; heading?: string; subheading?: string };

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

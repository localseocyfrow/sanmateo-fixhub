// Blog content — the single source of truth for blog posts.
// Foundation only: `blogPosts` is intentionally empty. Adding a post here with
// `published: true` makes it live, indexable, statically generated, and listed
// on the hub. Anything unpublished (or absent) 404s and is never listed.
import type { ContentSection, Faq } from "@/lib/types";

export type BlogPost = {
  slug: string; // e.g. "how-to-tell-if-a-stove-igniter-is-failing"
  /** Short card / list label. */
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary for cards, related-link lists, and OG description. */
  excerpt: string;
  /** ISO 8601 publish date, e.g. "2026-01-15". Used for article OG + byline. */
  publishedTime: string;
  /** ISO 8601 last-updated date, optional. */
  updatedTime?: string;
  /** Byline author name. */
  author?: string;
  /**
   * Gates publish + indexing. A post that is not `published` is never listed,
   * never statically generated, and returns 404 — mirrors brand `supported`.
   */
  published: boolean;
  /** Body sections rendered in order. */
  content: ContentSection[];
  /** Optional FAQ block appended below the body. */
  faqs?: Faq[];
  /** Slugs of related posts to cross-link. */
  relatedPosts?: string[];
};

// No posts yet — the blog foundation ships empty on purpose.
export const blogPosts: BlogPost[] = [];

// ── Access helpers (only published posts are ever public) ────────────────────
/** Published posts, newest first. */
export const publishedBlogPosts = (): BlogPost[] =>
  blogPosts
    .filter((p) => p.published)
    .sort((a, b) => b.publishedTime.localeCompare(a.publishedTime));

/** A single published post by slug, or undefined (unpublished/invalid → undefined). */
export const getPublishedBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug && p.published);

/** Slugs of published posts — the set of statically generated blog routes. */
export const blogPostSlugs = (): string[] =>
  publishedBlogPosts().map((p) => p.slug);

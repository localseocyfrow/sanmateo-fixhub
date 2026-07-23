// Blog content — the single source of truth for blog posts.
// Foundation only: `blogPosts` is intentionally empty. A post becomes PUBLIC
// only when it is manually `published` AND its scheduled `publishedTime` has
// arrived (publishedTime <= now). A future-dated post stays hidden everywhere
// — hub, route, related links, navigation, sitemap, metadata, and schema — and
// its route returns 404 until the scheduled time passes.
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
  /**
   * ISO 8601 publish datetime and the SCHEDULE time, e.g. "2026-01-15" or
   * "2026-01-15T09:00:00-08:00". The post is hidden until this moment passes.
   * Also used for article OG, byline, and sitemap lastModified.
   */
  publishedTime: string;
  /** ISO 8601 last-updated datetime, optional. */
  updatedTime?: string;
  /** Byline author name. */
  author?: string;
  /**
   * Manual publish switch. Must be `true` AND `publishedTime` must have passed
   * for the post to be public. Setting this `false` hides the post regardless
   * of its scheduled time.
   */
  published: boolean;
  /** Body sections rendered in order. */
  content: ContentSection[];
  /** Optional FAQ block appended below the body. */
  faqs?: Faq[];
  /** Slugs of related posts to cross-link (each still gated by the public rule). */
  relatedPosts?: string[];
};

// No posts yet — the blog foundation ships empty on purpose.
export const blogPosts: BlogPost[] = [];

// ── Public-visibility gate ───────────────────────────────────────────────────
/**
 * A post is public only when it is manually `published` AND its scheduled
 * `publishedTime` is at or before `now`. This single predicate backs every
 * surface (hub, route, related links, nav, sitemap, metadata, schema).
 */
export const isPublic = (post: BlogPost, now: Date = new Date()): boolean =>
  post.published && new Date(post.publishedTime).getTime() <= now.getTime();

// ── Access helpers (only public posts are ever exposed) ──────────────────────
/** Public posts (published + scheduled time reached), newest first. */
export const publicBlogPosts = (now: Date = new Date()): BlogPost[] =>
  blogPosts
    .filter((p) => isPublic(p, now))
    .sort((a, b) => b.publishedTime.localeCompare(a.publishedTime));

/** A single public post by slug, or undefined (unpublished/scheduled/invalid). */
export const getPublicBlogPost = (
  slug: string,
  now: Date = new Date(),
): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug && isPublic(p, now));

/** Public posts referenced by another post's `relatedPosts`, gated + in order. */
export const relatedPublicPosts = (
  post: BlogPost,
  now: Date = new Date(),
): BlogPost[] =>
  (post.relatedPosts ?? [])
    .map((slug) => getPublicBlogPost(slug, now))
    .filter((p): p is BlogPost => p !== undefined);

/** Slugs of currently public posts. */
export const publicBlogPostSlugs = (now: Date = new Date()): string[] =>
  publicBlogPosts(now).map((p) => p.slug);

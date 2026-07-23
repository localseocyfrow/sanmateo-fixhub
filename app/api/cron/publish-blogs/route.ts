// Scheduled blog publishing — the revalidation half of the system.
//
// content/blogs.ts decides *what* is public (published === true AND
// publishedTime <= now). That gate is re-evaluated on every render, so
// /blog/[slug]/ (force-dynamic) flips to 200 on its own the moment a post is
// due. The cached surfaces — the /blog hub, /sitemap.xml, and the root layout's
// navigation — are prerendered, so they keep serving the pre-publication copy
// until something invalidates them. This handler is that something: a daily
// Vercel cron (see vercel.json) marks each surface stale so the next visitor
// renders it with the newly due post included.
//
// The cron path in vercel.json carries a trailing slash — `/api/cron/
// publish-blogs/` — because next.config.ts sets `trailingSlash: true`, so the
// slash-less URL answers 308. Vercel's cron invoker does not follow redirects
// and would treat that 3xx as the final response, never reaching this code.
import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";
import { publicBlogPosts } from "@/content/blogs";

// Auth depends on the request headers, so this must never be cached.
export const dynamic = "force-dynamic";
// node:crypto for the constant-time secret comparison.
export const runtime = "nodejs";

/**
 * Constant-time check of `Authorization: Bearer ${CRON_SECRET}`.
 *
 * Fails closed when CRON_SECRET is unset, so an unconfigured deployment is
 * never open. The secret is only ever compared — never echoed, logged, or
 * included in a response.
 */
function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  const provided = request.headers.get("authorization");
  if (!provided) return false;

  const expectedBytes = Buffer.from(`Bearer ${secret}`, "utf8");
  const providedBytes = Buffer.from(provided, "utf8");
  // timingSafeEqual throws on length mismatch; length is not secret.
  if (expectedBytes.length !== providedBytes.length) return false;
  return timingSafeEqual(expectedBytes, providedBytes);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    // Deliberately terse: no hint about whether the secret is missing or wrong.
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const posts = publicBlogPosts(now);

  // Root layout first: this refreshes the header/footer navigation (so "Blog"
  // appears once the first post is due) and, per Next's semantics, every page
  // beneath it. The explicit paths below are therefore belt-and-braces — they
  // are idempotent and keep the intent readable if the layout call ever
  // narrows.
  revalidatePath("/", "layout");

  const paths = [
    "/blog", // hub listing (trailing slash not required by revalidatePath)
    "/sitemap.xml", // app/sitemap.ts — cached route handler
    // Every currently public post URL. Its page is force-dynamic, so this is a
    // no-op today; it stays correct if that page is ever made cacheable.
    ...posts.map((post) => `/blog/${post.slug}`),
  ];
  for (const path of paths) revalidatePath(path);

  return Response.json({
    ok: true,
    revalidatedAt: now.toISOString(),
    publicPostCount: posts.length,
    publicSlugs: posts.map((post) => post.slug),
    revalidatedPaths: ["/ (layout)", ...paths],
  });
}

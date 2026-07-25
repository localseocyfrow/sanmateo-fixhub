import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicBlogPost, relatedPublicPosts } from "@/content/blogs";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { BlogBlocks, BlogToc, blogToc } from "@/components/ui/BlogBlocks";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";

type Params = { params: Promise<{ slug: string }> };

// Rendered at REQUEST TIME so a scheduled post becomes reachable the moment its
// publishedTime passes — no rebuild required. The public gate (published +
// publishedTime <= now) is therefore re-evaluated on every request, and a
// future-dated or unpublished slug returns 404 (no static generation, no
// dynamicParams=false — nothing is frozen at build time).
export const dynamic = "force-dynamic";

/** Short, locale-stable date for the byline (avoids hydration drift). */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  // No metadata (canonical/OG/Twitter) for a non-public post — it 404s.
  const post = getPublicBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    // A post may defer its primary search URL to the page that already owns the
    // intent (canonicalPath) — the article stays reachable and listed, but
    // points search engines at the owner instead of competing with it.
    path: post.canonicalPath ?? `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.publishedTime,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const now = new Date();
  const post = getPublicBlogPost(slug, now);
  if (!post) notFound();

  const related = relatedPublicPosts(post, now);
  const toc = blogToc(post.blocks);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]}
      />
      <PageHero eyebrow="Stove Repair Blog" title={post.h1} intro={post.heroIntro} showCall={false} />
      <Section tint="white">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
            {post.author ? `${post.author} · ` : ""}
            {formatDate(post.publishedTime)}
            {post.updatedTime ? ` · Updated ${formatDate(post.updatedTime)}` : ""}
          </p>

          <QuickAnswer>{post.quickAnswer}</QuickAnswer>

          <BlogToc entries={toc} />

          {/* Structured blocks: prose, tables, stat rows, comparisons, callouts,
              checklists, and inline CTA bands. All plain data — see BlogBlock. */}
          <BlogBlocks blocks={post.blocks} />

          {post.faqs && post.faqs.length > 0 && <FAQAccordion faqs={post.faqs} />}

          {/* Internal links to the pages that own this topic's primary intent. */}
          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <RelatedLinks title="Where to go next" links={post.relatedLinks} />
          )}

          {related.length > 0 && (
            <RelatedLinks
              title="Related Guides"
              links={related.map((p) => ({
                label: p.title,
                href: `/blog/${p.slug}/`,
                description: p.excerpt,
              }))}
            />
          )}
        </Container>
      </Section>
      <CTASection source={`blog-${post.slug}`} />
      <JsonLd
        data={blogPostingSchema({
          headline: post.h1,
          description: post.metaDescription,
          url: `/blog/${post.slug}`,
          datePublished: post.publishedTime,
          dateModified: post.updatedTime ?? post.publishedTime,
          // Matches the rendered canonical tag.
          canonicalUrl: post.canonicalPath,
        })}
      />
      {/* FAQPage JSON-LD only when visible FAQs exist (same gate as the accordion). */}
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}
    </>
  );
}

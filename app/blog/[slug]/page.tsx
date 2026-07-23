import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedBlogPost, blogPostSlugs } from "@/content/blogs";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { ContentSections } from "@/components/ui/ContentSections";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";

type Params = { params: Promise<{ slug: string }> };

// Only PUBLISHED posts are statically generated / indexable. With
// dynamicParams = false, any other slug (invalid or unpublished) returns 404.
export function generateStaticParams() {
  return blogPostSlugs().map((slug) => ({ slug }));
}
export const dynamicParams = false;

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
  const post = getPublishedBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.publishedTime,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]}
      />
      <PageHero eyebrow="Stove Repair Blog" title={post.h1} showCall={false} />
      <Section tint="white">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
            {post.author ? `${post.author} · ` : ""}
            {formatDate(post.publishedTime)}
            {post.updatedTime ? ` · Updated ${formatDate(post.updatedTime)}` : ""}
          </p>

          <ContentSections sections={post.content} />

          {post.faqs && post.faqs.length > 0 && <FAQAccordion faqs={post.faqs} />}
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
        })}
      />
      {/* FAQPage JSON-LD only when visible FAQs exist (same gate as the accordion). */}
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}
    </>
  );
}

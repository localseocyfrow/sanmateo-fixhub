import type { Metadata } from "next";
import Link from "next/link";
import { publicBlogPosts } from "@/content/blogs";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/Icon";

// The hub is noindex while there are no published posts, so an empty blog is not
// indexed. It flips to indexable automatically once a published post exists.
export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Blog & Guides",
  description:
    "Practical stove, range, and cooktop repair guides from SanMateo FixHub — how to spot common faults, what causes them, and when to call a specialist in San Mateo.",
  path: "/blog",
  noindex: publicBlogPosts().length === 0,
});

/** Short, locale-stable date for the byline (avoids hydration drift). */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndex() {
  const posts = publicBlogPosts();

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }]} />
      <PageHero
        eyebrow="Stove Repair Blog"
        title="Stove Repair Guides &amp; Tips"
        intro="Straightforward guides to gas and electric stove, range, and cooktop problems in San Mateo — what the symptoms mean, what tends to cause them, and how to handle them safely."
      />
      <Section tint="surface">
        <Container>
          <QuickAnswer>
            SanMateo FixHub&apos;s blog shares practical, stove-focused repair guidance for homeowners across San Mateo
            and the Peninsula. New articles are published here as they are written.
          </QuickAnswer>

          {posts.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-copper-400 hover:shadow-lift"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800 group-hover:bg-copper-600 group-hover:text-white">
                    <Icon name="wrench" className="h-6 w-6" />
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-navy-800 group-hover:text-copper-700">{post.title}</h2>
                  <p className="mt-1.5 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {formatDate(post.publishedTime)}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-line bg-white p-8 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Icon name="wrench" className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-xl font-bold text-navy-800">Guides are on the way</h2>
              <p className="mx-auto mt-2 max-w-md text-ink-soft">
                We&apos;re putting together clear, stove-focused repair guides. In the meantime, our{" "}
                <Link href="/services/" className="font-semibold text-navy-700 underline">
                  services
                </Link>{" "}
                and{" "}
                <Link href="/problems/" className="font-semibold text-navy-700 underline">
                  problem guides
                </Link>{" "}
                cover the most common stove faults in San Mateo.
              </p>
            </div>
          )}
        </Container>
      </Section>
      <CTASection source="blog-index" />
    </>
  );
}

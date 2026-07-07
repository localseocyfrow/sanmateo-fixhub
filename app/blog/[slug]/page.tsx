import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, postSlugs, getService, getLocation, getProblem, postsSorted } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { ContentSections } from "@/components/ui/ContentSections";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[(m ?? 1) - 1]} ${d}, ${y}`;
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = post.serviceSlug ? getService(post.serviceSlug) : undefined;
  const location = post.locationSlug ? getLocation(post.locationSlug) : undefined;
  const problem = post.problemSlug ? getProblem(post.problemSlug) : undefined;

  const related = postsSorted()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const relatedLinks = [
    ...(service ? [{ label: service.name, href: `/services/${service.slug}/`, description: service.summary }] : []),
    ...(problem ? [{ label: problem.name, href: `/problems/${problem.slug}/`, description: problem.summary }] : []),
    ...(location ? [{ label: `Stove Repair in ${location.city}`, href: `/locations/${location.slug}/`, description: location.summary }] : []),
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]}
      />
      <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt} showCall={false} />

      <Section tint="white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <article className="min-w-0">
            <p className="text-sm font-semibold text-ink-faint">{formatDate(post.date)} · {post.category}</p>
            <div className="mt-6">
              <ContentSections sections={post.sections} />
            </div>

            {/* Mid/final CTA */}
            <div className="mt-10">
              <CTASection
                variant="band"
                heading="Have a stove problem in San Mateo?"
                subheading="Call now or request service and we'll help you check next steps."
                source={`blog-${post.slug}-cta`}
              />
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-10">
                <FAQAccordion faqs={post.faqs} />
              </div>
            )}

            {relatedLinks.length > 0 && (
              <div className="mt-10">
                <RelatedLinks title="Helpful Next Steps" links={relatedLinks} />
              </div>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-800">Need stove repair?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">SanMateo FixHub helps diagnose gas and electric stove problems across the Peninsula.</p>
              <Link href="/contact/" className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copper-600 px-5 font-semibold text-white hover:bg-copper-700">Request Service</Link>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800">More Guides</h2>
              <ul className="mt-3 space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}/`} className="text-sm font-semibold text-navy-700 hover:text-copper-700 hover:underline">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>

      <CTASection source={`blog-${post.slug}-footer`} />
      <JsonLd data={[articleSchema, post.faqs ? faqSchema(post.faqs) : null]} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { postsSorted } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Guides & Tips for San Mateo Homes",
  description:
    "Answer-first stove repair guides from SanMateo FixHub — diagnose gas and electric stove problems, understand repair costs, and know when to call a specialist in San Mateo.",
  path: "/blog",
});

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[(m ?? 1) - 1]} ${d}, ${y}`;
}

export default function BlogIndex() {
  const posts = postsSorted();
  const [featured, ...rest] = posts;

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }]} />
      <PageHero
        eyebrow="Stove Repair Guides"
        title="Stove Repair Guides &amp; Tips"
        intro="Clear, answer-first help for diagnosing gas and electric stove problems — written for San Mateo and Peninsula homeowners."
        showCall={false}
      />
      <Section tint="surface">
        <Container>
          {featured && (
            <Link
              href={`/blog/${featured.slug}/`}
              className="group mb-10 grid gap-6 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-card transition hover:shadow-lift sm:grid-cols-2 sm:p-8"
            >
              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-copper-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-copper-700">
                  <Icon name="flame" className="h-3.5 w-3.5" /> Featured · {featured.category}
                </span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-800 group-hover:text-copper-700">{featured.title}</h2>
                <p className="mt-2 text-ink-soft">{featured.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-copper-700">{formatDate(featured.date)} · Read guide →</span>
              </div>
              <div className="hidden items-center justify-center rounded-2xl bg-navy-800 sm:flex">
                <Icon name="stove" className="h-24 w-24 text-copper-400" />
              </div>
            </Link>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-teal-700">{post.category}</span>
                <h3 className="mt-2 text-lg font-bold text-navy-800 group-hover:text-copper-700">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-copper-700">{formatDate(post.date)} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection source="blog-index" />
    </>
  );
}

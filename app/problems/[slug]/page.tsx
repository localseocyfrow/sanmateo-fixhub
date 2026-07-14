import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProblem, problemSlugs, getService } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { TextBlock } from "@/components/ui/ContentSections";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { LinkButton } from "@/components/ui/Buttons";
import { LeadSmartForm } from "@/components/LeadSmartForm";
import { Icon } from "@/components/Icon";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return problemSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return {};
  return buildMetadata({ title: problem.metaTitle, description: problem.metaDescription, path: `/problems/${problem.slug}` });
}

export default async function ProblemPage({ params }: Params) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();

  const service = getService(problem.serviceSlug);
  const relatedProblemLinks = problem.relatedProblems
    .map((s) => getProblem(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ label: p.name, href: `/problems/${p.slug}/`, description: p.summary }));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Problems", href: "/problems/" },
          { name: problem.name, href: `/problems/${problem.slug}/` },
        ]}
      />
      <PageHero eyebrow="Stove Problem · San Mateo, CA" title={problem.h1} showCall={Boolean(problem.emergencyRelevant)} />

      <Section tint="white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-10">
            <QuickAnswer>{problem.quickAnswer}</QuickAnswer>
            <TextBlock paragraphs={problem.intro} />

            {problem.safety && problem.safety.length > 0 && (
              <div className="rounded-2xl border-l-4 border-copper-600 bg-copper-50 p-6">
                <h2 className="flex items-center gap-2 text-xl font-bold text-navy-800">
                  <Icon name="alert" className="h-6 w-6 text-copper-600" /> Safety First
                </h2>
                <ul className="mt-3 space-y-2">
                  {problem.safety.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-ink-soft">
                      <span className="mt-1 text-copper-700"><Icon name="shield" className="h-4 w-4" /></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Likely Causes</h2>
              <p className="mt-2 text-sm text-ink-faint">These are common possibilities — an on-site check is the only way to confirm what&apos;s happening with your stove.</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {problem.likelyCauses.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-line bg-surface p-5">
                    <h3 className="font-bold text-navy-800">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">What Should You Do Next?</h2>
              <ol className="mt-4 space-y-3">
                {problem.nextSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 rounded-xl border border-line bg-white p-4 shadow-soft">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-800 font-bold text-white">{i + 1}</span>
                    <span className="text-ink-soft">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-navy-800 p-6 text-white sm:p-8">
              <h2 className="text-xl font-bold">The Fix For This Problem</h2>
              <p className="mt-2 text-navy-100">
                {service
                  ? `This symptom usually points toward ${service.name.toLowerCase()}. See how that service works or request help and we'll guide you.`
                  : "Request help and we'll guide you toward the right stove repair."}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {service && <LinkButton href={`/services/${service.slug}/`} variant="primary">{service.name}</LinkButton>}
                {problem.emergencyRelevant && <LinkButton href="/emergency-stove-help/" variant="ghostLight">Emergency Stove Help</LinkButton>}
                <LinkButton href="/contact#request-estimate" variant="ghostLight">Request Service</LinkButton>
              </div>
            </div>

            <FAQAccordion faqs={problem.faqs} heading={`${problem.name}: FAQs`} />

            <div className="space-y-8">
              <RelatedLinks
                title="Related Repair Services"
                links={[
                  ...(service ? [{ label: service.name, href: `/services/${service.slug}/`, description: service.summary }] : []),
                  { label: "Stove Repair Pricing", href: "/stove-repair-cost-san-mateo-ca/", description: "Understand what drives stove repair cost." },
                ]}
              />
              {relatedProblemLinks.length > 0 && <RelatedLinks title="Related Stove Problems" links={relatedProblemLinks} />}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-800">Need help now?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Describe what your stove is doing and we&apos;ll help with safe next steps.</p>
              {/* Desktop: embedded LeadSmart request form. Mobile funnels to the contact form. */}
              <div className="mt-4 hidden lg:block">
                <LeadSmartForm variant="compact" title="Request stove repair help" />
              </div>
              <div className="mt-4 space-y-3">
                <LinkButton href="/contact#request-estimate" variant="primary" className="w-full lg:hidden">Request Service</LinkButton>
                <Link href="/safety/" className="flex min-h-[44px] w-full items-center justify-center rounded-xl border-2 border-navy-800 px-5 font-semibold text-navy-800 hover:bg-navy-800 hover:text-white">Stove Safety Tips</Link>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      <CTASection source={`problem-${problem.slug}-footer`} requestHref="/contact#request-estimate" />
      <JsonLd data={faqSchema(problem.faqs)} />
    </>
  );
}

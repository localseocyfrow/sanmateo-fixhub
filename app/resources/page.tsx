import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Stove Repair Resources — SanMateo FixHub",
  description:
    "Helpful stove repair resources from SanMateo FixHub: guides on problems, safety, repair steps, costs, and emergencies for San Mateo and Peninsula homeowners.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources/" }]} />
      <PageHero
        eyebrow="Resources"
        title="Stove Repair Resources &amp; Guides"
        intro="A hub of useful pages to help you understand stove problems, safety, repair steps, and costs before you decide what to do next."
        showCall={false}
      />
      <Section tint="surface">
        <Container className="max-w-3xl space-y-8">
          <QuickAnswer>
            These resources help you make sense of a stove issue before booking service &mdash; from spotting common
            problems and staying safe around gas, to understanding the repair process and typical cost factors in San
            Mateo. Start with whichever topic matches what you&apos;re dealing with.
          </QuickAnswer>

          <RelatedLinks
            title="Guides and helpful pages"
            columns={2}
            links={[
              { label: "Stove repair blog", href: "/blog/", description: "Articles and how-tos on stove issues." },
              { label: "Common stove problems", href: "/problems/", description: "Symptoms and what they usually mean." },
              { label: "Stove safety", href: "/safety/", description: "Staying safe around gas and electric stoves." },
              { label: "Our repair process", href: "/repair-process/", description: "How a diagnosis and repair works." },
              { label: "Stove repair cost", href: "/stove-repair-cost-san-mateo-ca/", description: "What influences repair pricing." },
              { label: "Emergency stove help", href: "/emergency-stove-help/", description: "What to do with an urgent issue." },
              { label: "Frequently asked questions", href: "/faq/", description: "Answers to common stove repair questions." },
            ]}
          />

          <div className="rounded-2xl border border-copper-200 bg-copper-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper-600 text-white">
                <Icon name="alert" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-copper-700">Gas safety note</p>
                <p className="mt-1 leading-relaxed text-navy-900">
                  If you smell gas or suspect a leak, don&apos;t wait for a repair appointment. Leave the area and, from
                  a safe location, call PG&amp;E&apos;s gas emergency line at 1-800-743-5000, or dial 911. Address the
                  emergency first &mdash; stove repair can come afterward.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection source="resources" />
    </>
  );
}

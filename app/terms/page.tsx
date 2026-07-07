import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use — SanMateo FixHub",
  description:
    "The terms for using the SanMateo FixHub website. This site is informational, estimates are confirmed before work, and gas emergencies should go to your utility or 911.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Use", href: "/terms/" }]} />
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        intro="These terms explain how the SanMateo FixHub website is intended to be used and the limits of the information provided here."
        showCall={false}
      />
      <Section tint="white">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold text-ink-faint">Last updated: 2026</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Informational purpose</h2>
            <p className="text-ink-soft leading-relaxed">
              This website is provided by {site.name} for general information about stove, range, and cooktop repair.
              Content here is meant to help you understand common issues and how service works. It is not a substitute
              for a hands-on diagnosis of your specific appliance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">No guaranteed outcomes</h2>
            <p className="text-ink-soft leading-relaxed">
              Every stove and fault is different, so we don&apos;t promise a specific result, repair outcome, or
              timeframe based on the information on this site. Any assessment of your appliance depends on inspecting it
              in person.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Estimates and repairs</h2>
            <p className="text-ink-soft leading-relaxed">
              Any pricing mentioned on this site is general and illustrative. The actual scope and estimate for a repair
              are confirmed with you before work begins, after the problem has been diagnosed. Nothing on this website is
              a binding quote.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Safety disclaimer</h2>
            <p className="text-ink-soft leading-relaxed">
              Do not rely on this website during an emergency. If you smell gas, suspect a leak, or face any immediate
              danger, leave the area and, from a safe location, contact your gas utility&apos;s emergency line or dial
              911. Attempting repairs on gas or electrical components can be hazardous; when in doubt, stop and get
              qualified help.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">External links</h2>
            <p className="text-ink-soft leading-relaxed">
              This site may link to third-party websites or resources for convenience. We don&apos;t control that
              content and aren&apos;t responsible for it. Visiting external sites is at your own discretion and subject
              to their terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Changes to these terms</h2>
            <p className="text-ink-soft leading-relaxed">
              We may update this website and these terms from time to time. Continued use of the site after changes are
              posted means you accept the updated terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Contact us</h2>
            <p className="text-ink-soft leading-relaxed">
              Questions about these terms? Email us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-copper-700 hover:underline">
                {site.email}
              </a>{" "}
              or use our{" "}
              <Link href="/contact/" className="font-semibold text-copper-700 hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

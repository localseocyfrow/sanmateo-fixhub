import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Layout";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — SanMateo FixHub",
  description:
    "How SanMateo FixHub collects and uses information from stove repair service requests. We use your details only to respond and we do not sell personal data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy/" }]} />
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This policy explains what information we collect when you contact SanMateo FixHub about stove repair, and how we use it."
        showCall={false}
      />
      <Section tint="white">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold text-ink-faint">Last updated: 2026</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Who this policy covers</h2>
            <p className="text-ink-soft leading-relaxed">
              This policy applies to {site.name} and to visitors who use this website or contact us about stove, range,
              or cooktop repair. It describes the limited information we collect and how we handle it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Information we collect</h2>
            <p className="text-ink-soft leading-relaxed">
              When you submit our service-request form, we collect the details you provide so we can respond. That
              typically includes your name, phone number, email address, city, the service or stove problem you need
              help with, a description of the issue, and your preferred way to be contacted.
            </p>
            <p className="text-ink-soft leading-relaxed">
              If you call us, standard call information such as your phone number may be recorded by our phone provider.
              Our site may also collect basic, non-identifying technical data (such as general usage information) through
              standard web technologies to keep the site working and understand overall traffic.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">How we use your information</h2>
            <p className="text-ink-soft leading-relaxed">
              We use the information you provide to respond to your request, discuss your stove issue, arrange or follow
              up on service, and answer your questions. We do not use it for unrelated purposes, and we do not sell your
              personal information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Phone calls and call tracking</h2>
            <p className="text-ink-soft leading-relaxed">
              Phone calls may be routed through a call-tracking provider that helps us manage and understand incoming
              calls. This means details such as your phone number and the time and length of a call may be processed by
              that provider on our behalf. We use this only to handle and improve how we respond to service requests.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Sharing your information</h2>
            <p className="text-ink-soft leading-relaxed">
              We do not sell personal data. We share the information you provide only with the service providers who help
              us operate &mdash; such as our form and call-tracking tools &mdash; and only as needed to respond to you,
              or where required by law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Data retention and your choices</h2>
            <p className="text-ink-soft leading-relaxed">
              We keep service-request details only as long as needed to respond and maintain reasonable business records.
              If you&apos;d like us to update or delete the information you shared, contact us and we&apos;ll do our best
              to help.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Changes to this policy</h2>
            <p className="text-ink-soft leading-relaxed">
              We may update this policy from time to time as our practices or tools change. Any updates will be posted on
              this page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">Contact us</h2>
            <p className="text-ink-soft leading-relaxed">
              Questions about this policy or your information? Email us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-copper-700 hover:underline">
                {site.email}
              </a>{" "}
              or reach out through our{" "}
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

import { site } from "@/lib/site";
import { Container } from "./Layout";
import { CallButton, LinkButton } from "./Buttons";
import { Icon } from "../Icon";

type Props = {
  heading?: string;
  subheading?: string;
  /** Analytics source tag for the call button. */
  source?: string;
  /** Compact inline band vs full section. */
  variant?: "band" | "section";
  /** Where the "Request Service" button points (e.g. deep-link to the request form). */
  requestHref?: string;
};

/** Reusable conversion block. Placed after major sections and before FAQs. */
export function CTASection({
  heading = "Talk to a San Mateo Stove Repair Specialist",
  subheading = "Call now for stove repair or request service and we'll help you check availability and next steps.",
  source = "cta-section",
  variant = "section",
  requestHref = "/contact/",
}: Props) {
  if (variant === "band") {
    return (
      <div className="rounded-2xl bg-navy-800 p-6 text-white sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold">{heading}</h3>
            <p className="mt-1 text-navy-100">{subheading}</p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <CallButton variant="primary" source={source} label="Call Now" />
            <LinkButton href={requestHref} variant="ghostLight">
              Request Service
            </LinkButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative py-16 text-center sm:py-20">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-copper-600">
          <Icon name="flame" className="h-7 w-7 text-white" />
        </span>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">{subheading}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CallButton variant="primary" source={source} />
          <LinkButton href={requestHref} variant="ghostLight">
            Request Stove Service
          </LinkButton>
        </div>
        <p className="mt-5 text-sm text-navy-100">
          {site.hours.display} · Serving {site.primaryCity} &amp; the Peninsula
        </p>
      </Container>
    </section>
  );
}

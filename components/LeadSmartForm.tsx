import { site, clickToCall } from "@/lib/site";

// Embedded LeadSmart lead form. The form is hosted by LeadSmart and rendered in an
// <iframe>, so submissions are handled entirely on their side — no backend endpoint
// lives in this app. Until a form URL is configured we show an honest call-us
// fallback rather than faking a form.

type LeadSmartVariant = "standard" | "full" | "compact";

/** Iframe height per variant (px). The LeadSmart form manages its own internal layout. */
const VARIANT_HEIGHT: Record<LeadSmartVariant, number> = {
  standard: 720,
  full: 860,
  compact: 620,
};

const VARIANT_TITLE: Record<LeadSmartVariant, string> = {
  standard: "Request stove repair service",
  full: "Request stove repair service",
  compact: "Quick stove repair request",
};

export function LeadSmartForm({
  variant = "standard",
  title,
  className = "",
}: {
  variant?: LeadSmartVariant;
  title?: string;
  className?: string;
}) {
  const src = site.leadsmart.formUrl;
  const label = title ?? VARIANT_TITLE[variant];

  // No LeadSmart form URL configured yet — never render a fake form.
  if (!src) {
    return (
      <div className={`rounded-2xl border border-line bg-surface p-6 text-center ${className}`}>
        <p className="font-semibold text-navy-800">Request stove repair</p>
        <p className="mt-1.5 text-sm text-ink-soft">
          Online booking isn&apos;t connected yet. Call us and we&apos;ll help right away.
        </p>
        <a href={clickToCall} className="mt-3 inline-block font-bold text-copper-700 underline">
          {site.phone.display}
        </a>
        <span className="mt-2 block text-xs text-ink-faint">
          (Set NEXT_PUBLIC_LEADSMART_URL to enable the embedded form.)
        </span>
      </div>
    );
  }

  // Compact sits inside an existing card (e.g. a sidebar), so it skips the heavy
  // card framing the standalone standard/full variants use.
  const frame =
    variant === "compact"
      ? "overflow-hidden rounded-xl border border-line bg-white"
      : "overflow-hidden rounded-2xl border border-line bg-white shadow-card";

  return (
    <div className={`${frame} ${className}`}>
      <iframe
        src={src}
        title={label}
        loading="lazy"
        className="block w-full"
        style={{ height: VARIANT_HEIGHT[variant], border: 0 }}
      />
    </div>
  );
}

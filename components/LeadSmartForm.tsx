// Embedded LeadSmart lead form. The form is hosted by LeadSmart and rendered in an
// <iframe>, so submissions are handled entirely on their side — no backend endpoint
// lives in this app. Each variant maps to a specific LeadSmart funnel URL.

type LeadSmartVariant = "standard" | "full" | "compact";

const VARIANT_SRC: Record<LeadSmartVariant, string> = {
  standard:
    "https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=mdrufi1&funnel=4&category=207&step=1&buttons=btn-warning",
  full:
    "https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=mdrufi1&funnel=3&category=207&step=1&buttons=btn-warning",
  compact:
    "https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=mdrufi1&funnel=5&category=207&buttons=btn-warning",
};

const VARIANT_TITLE: Record<LeadSmartVariant, string> = {
  standard: "Request stove repair service",
  full: "Request stove repair service — full form",
  compact: "Quick stove repair request",
};

/** Responsive iframe height per variant (taller on desktop where the form has room). */
const VARIANT_HEIGHT: Record<LeadSmartVariant, string> = {
  standard: "h-[700px] md:h-[720px]",
  full: "h-[760px] md:h-[860px]",
  compact: "h-[600px] md:h-[620px]",
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
  // Compact sits inside an existing card (e.g. a sidebar), so it skips the heavy
  // card framing the standalone standard/full variants use.
  const frame =
    variant === "compact"
      ? "overflow-hidden rounded-xl border border-line bg-white"
      : "overflow-hidden rounded-2xl border border-line bg-white shadow-card";

  return (
    <div className={`${frame} ${className}`}>
      <iframe
        src={VARIANT_SRC[variant]}
        title={title ?? VARIANT_TITLE[variant]}
        loading="lazy"
        className={`block w-full max-w-full ${VARIANT_HEIGHT[variant]}`}
        style={{ border: 0 }}
      />
    </div>
  );
}

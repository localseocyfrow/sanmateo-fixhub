import { site } from "@/lib/site";

type Props = {
  /** "dark" = for light backgrounds (default); "light" = for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
  /** Render only the mark (no wordmark). */
  markOnly?: boolean;
};

/** Custom SanMateo FixHub mark: a burner ring cradling a copper repair flame. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={`${site.name} logo`}>
      <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="var(--color-navy-800)" />
      <circle cx="24" cy="25" r="13" fill="none" stroke="var(--color-teal-500)" strokeWidth="2.2" opacity="0.55" />
      <circle cx="24" cy="25" r="7.5" fill="none" stroke="var(--color-teal-500)" strokeWidth="1.6" opacity="0.35" />
      {/* Copper flame */}
      <path
        d="M24 11c1.6 4.2 6 5.8 6 10.8A6 6 0 0 1 18 22c0-1.9.8-3.4 2-4.6.6 1.1 1.8 1.7 2.6 2.5.7-3.4-1-6.9 1.4-8.9z"
        fill="var(--color-copper-500)"
      />
      <path d="M24 25.5c1.4.6 2.3 1.7 2.3 3a2.3 2.3 0 0 1-4.6 0c0-1.3.9-2.4 2.3-3z" fill="var(--color-copper-100)" />
    </svg>
  );
}

export function Logo({ variant = "dark", className = "", markOnly = false }: Props) {
  const wordColor = variant === "light" ? "text-white" : "text-navy-800";
  const subColor = variant === "light" ? "text-teal-100" : "text-teal-700";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className={`text-[1.15rem] font-extrabold tracking-tight ${wordColor}`}>
            SanMateo<span className="text-copper-600"> FixHub</span>
          </span>
          <span className={`mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
            Stove Repair Specialists
          </span>
        </span>
      )}
    </span>
  );
}

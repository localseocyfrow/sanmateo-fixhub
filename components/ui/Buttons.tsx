import Link from "next/link";
import { site, clickToCall } from "@/lib/site";
import { Icon } from "../Icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-60 min-h-[44px] px-5 py-3 text-[0.95rem]";

const variants = {
  primary: "bg-copper-600 text-white shadow-soft hover:bg-copper-700 hover:shadow-lift active:translate-y-px",
  secondary: "bg-navy-800 text-white shadow-soft hover:bg-navy-700 hover:shadow-lift active:translate-y-px",
  outline: "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  ghostLight: "border-2 border-white/30 text-white hover:bg-white/10",
  teal: "bg-teal-600 text-white shadow-soft hover:bg-teal-700 active:translate-y-px",
};

type Variant = keyof typeof variants;

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/** Prominent call-to-action button that dials the configured number. */
export function CallButton({
  variant = "primary",
  className = "",
  label,
  source,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
  source?: string;
}) {
  return (
    <a
      href={clickToCall}
      className={`ringba-phone ${base} ${variants[variant]} ${className}`}
      data-ringba={site.ringba.numberPoolId || undefined}
      data-call-source={source}
      aria-label={`Call ${site.name}`}
    >
      <Icon name="phone" className="h-[1.05em] w-[1.05em]" />
      <span>{label ?? `Call ${site.phone.display}`}</span>
    </a>
  );
}

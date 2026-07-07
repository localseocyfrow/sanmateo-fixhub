import Image from "next/image";

type Props = {
  /** "dark" = for light backgrounds (default). "light" = wraps in a white chip for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
};

// Official brand lockup (stove + flame + wrench mark, wordmark, tagline).
const LOGO_SRC = "/brand/sanmateo-fixhub-logo.png";
const LOGO_ALT = "SanMateo FixHub stove repair logo";
// Intrinsic pixel size of the source PNG — preserves aspect ratio and prevents layout shift.
const INTRINSIC_W = 612;
const INTRINSIC_H = 408;

/**
 * Renders the SanMateo FixHub logo. Height-constrained (h-11 / lg:h-12) so it
 * stays compact and never makes the header taller; width is auto to keep the
 * 3:2 proportions sharp. The wordmark uses dark navy ink, so on dark surfaces
 * (`variant="light"`) it is presented on a clean white chip for contrast.
 */
export function Logo({ variant = "dark", className = "" }: Props) {
  const img = (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      priority={variant === "dark"}
      sizes="(min-width: 1024px) 72px, 66px"
      className="h-11 w-auto lg:h-12"
    />
  );

  if (variant === "light") {
    return <span className={`inline-flex rounded-xl bg-white p-2 shadow-soft ${className}`}>{img}</span>;
  }
  return <span className={`inline-flex ${className}`}>{img}</span>;
}

import Image from "next/image";

type Props = {
  /** "dark" = for light backgrounds (default). "light" = wraps in a white chip for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
};

// Official brand lockup, tightly cropped (transparent padding trimmed) so the
// artwork fills its box and reads larger at a given height.
const LOGO_SRC = "/brand/sanmateo-fixhub-logo-cropped.png";
const LOGO_ALT = "SanMateo FixHub stove repair logo";
// Intrinsic pixel size of the cropped source — preserves aspect ratio, prevents layout shift.
const INTRINSIC_W = 428;
const INTRINSIC_H = 344;

/**
 * SanMateo FixHub logo. Height-constrained (width auto) to stay sharp and
 * proportional. Sized larger for visibility while still fitting the header
 * (h-16 / lg:72px). The wordmark uses dark navy ink, so on dark surfaces
 * (`variant="light"`) it sits on a clean white chip for contrast, at a slightly
 * larger size where there is more room.
 */
export function Logo({ variant = "dark", className = "" }: Props) {
  const imgClass = variant === "light" ? "h-14 w-auto lg:h-16" : "h-12 w-auto lg:h-14";

  const img = (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      priority={variant === "dark"}
      sizes="(min-width: 1024px) 80px, 70px"
      className={imgClass}
    />
  );

  if (variant === "light") {
    return <span className={`inline-flex rounded-xl bg-white p-2 shadow-soft ${className}`}>{img}</span>;
  }
  return <span className={`inline-flex ${className}`}>{img}</span>;
}

type DivProps = { children: React.ReactNode; className?: string };

/** Max-width page container with responsive gutters. */
export function Container({ children, className = "" }: DivProps) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Vertical section rhythm wrapper. */
export function Section({
  children,
  className = "",
  tint,
  id,
}: DivProps & { tint?: "surface" | "surface2" | "navy" | "white"; id?: string }) {
  const bg =
    tint === "surface"
      ? "bg-surface"
      : tint === "surface2"
        ? "bg-[var(--color-surface-2)]"
        : tint === "navy"
          ? "bg-navy-800 text-white"
          : "bg-white";
  return (
    <section id={id} className={`py-14 sm:py-20 ${bg} ${className}`}>
      {children}
    </section>
  );
}

/** Section eyebrow + heading + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <p className={`mb-2 text-sm font-bold uppercase tracking-[0.14em] ${invert ? "text-copper-400" : "text-copper-600"}`}>
          {eyebrow}
        </p>
      )}
      <As
        className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${invert ? "text-white" : "text-navy-800"}`}
      >
        {title}
      </As>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${invert ? "text-navy-100" : "text-ink-soft"}`}>{intro}</p>
      )}
    </div>
  );
}

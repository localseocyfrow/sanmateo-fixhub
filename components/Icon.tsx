import type { IconName } from "@/lib/types";

type Props = {
  name: IconName;
  className?: string;
  title?: string;
};

// Inline, single-color (currentColor) stroke icons — custom stove/repair motifs.
// No external icon dependency; tree-shaken to only what's used.
const paths: Record<IconName, React.ReactNode> = {
  stove: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8" cy="9" r="1.6" />
      <circle cx="16" cy="9" r="1.6" />
      <path d="M3 14h18" />
      <path d="M7 17h4" />
    </>
  ),
  flame: (
    <path d="M12 3c1 3 4 4.2 4 7.5A4 4 0 0 1 8 11c0-1.2.5-2.2 1.2-3C9.6 9 10.5 9.4 11 10c.4-2.3-.6-4.7 1-7z" />
  ),
  spark: (
    <>
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="m4.9 4.9 3.5 3.5" />
      <path d="m15.6 15.6 3.5 3.5" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
    </>
  ),
  burner: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
    </>
  ),
  range: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 7V4h18v3" />
      <circle cx="8" cy="12" r="1.4" />
      <circle cx="16" cy="12" r="1.4" />
      <path d="M7 16h10" />
    </>
  ),
  cooktop: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="2" />
      <circle cx="15.5" cy="10" r="2" />
      <circle cx="8.5" cy="15.5" r="1.4" />
      <circle cx="15.5" cy="15.5" r="1.4" />
    </>
  ),
  board: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h6M7 16h8" />
    </>
  ),
  pilot: (
    <>
      <path d="M12 21a5 5 0 0 0 5-5c0-3.5-3-5-5-9-2 4-5 5.5-5 9a5 5 0 0 0 5 5z" />
      <circle cx="12" cy="15.5" r="1.5" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-2 8 9-12h-7l2-8z" />,
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5-5.4l-2.3 2.3-2.1-.6-.6-2.1 2.3-2.3z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2 20h20L12 3z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0z" />
      <path d="M12 9v6" />
    </>
  ),
  power: (
    <>
      <path d="M12 3v9" />
      <path d="M6.5 7a8 8 0 1 0 11 0" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  phone: (
    <path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4.5 5a2 2 0 0 1 2-2z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6", title }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

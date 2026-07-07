import { site } from "@/lib/site";
import { Container } from "./ui/Layout";
import { CallButton, LinkButton } from "./ui/Buttons";
import { TrustStrip } from "./ui/TrustStrip";
import { Icon } from "./Icon";

/** Decorative stove illustration — inline SVG, no image request, no CLS. */
function StoveIllustration() {
  return (
    <svg viewBox="0 0 420 360" className="h-auto w-full max-w-md" role="img" aria-label="Illustration of a stove being diagnosed">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#164562" />
          <stop offset="1" stopColor="#0c2739" />
        </linearGradient>
      </defs>
      <rect x="40" y="70" width="340" height="250" rx="18" fill="url(#body)" />
      <rect x="60" y="150" width="300" height="150" rx="10" fill="#071f2f" />
      <rect x="76" y="168" width="268" height="116" rx="6" fill="#0ea5a5" opacity="0.12" />
      {/* Control panel */}
      <rect x="60" y="92" width="300" height="42" rx="8" fill="#071f2f" />
      {[110, 160, 260, 310].map((cx) => (
        <circle key={cx} cx={cx} cy="113" r="11" fill="#10324a" stroke="#26719e" strokeWidth="2" />
      ))}
      {/* Burners */}
      {[[150, 205], [270, 205]].map(([cx, cy]) => (
        <g key={cx}>
          <circle cx={cx} cy={cy} r="34" fill="none" stroke="#26719e" strokeWidth="3" opacity="0.6" />
          <circle cx={cx} cy={cy} r="18" fill="none" stroke="#26719e" strokeWidth="2" opacity="0.4" />
        </g>
      ))}
      {/* Active copper flame on one burner */}
      <path d="M150 178c8 14 22 18 22 33a22 22 0 0 1-44 0c0-9 5-15 11-20 2 5 7 8 11 11 3-11-4-20 0-24z" fill="#f0870a" />
      <path d="M150 198c5 2 8 6 8 11a8 8 0 0 1-16 0c0-5 3-9 8-11z" fill="#fdecd3" />
      {/* Diagnostic spark badge */}
      <g transform="translate(300 150)">
        <circle r="26" fill="#0ea5a5" />
        <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none">
          <path d="M0 -12V-4M0 4v8M-8.5 -8.5l5.7 5.7M2.8 2.8l5.7 5.7M-12 0h8M4 0h8" />
        </g>
      </g>
      <rect x="120" y="320" width="18" height="26" rx="4" fill="#0c2739" />
      <rect x="282" y="320" width="18" height="26" rx="4" fill="#0c2739" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-copper-600/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-teal-100">
            <Icon name="flame" className="h-4 w-4 text-copper-400" />
            Stove Repair in San Mateo by SanMateo FixHub
          </p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Stove Repair San Mateo CA by <span className="text-copper-400">SanMateo FixHub</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
            SanMateo FixHub helps diagnose gas stove, electric stove, range, and cooktop problems in San Mateo before
            small kitchen issues become larger disruptions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton variant="primary" source="hero" label="Call Now for Stove Repair" />
            <LinkButton href="/contact/" variant="ghostLight">
              Request Stove Service
            </LinkButton>
          </div>
          <div className="mt-8">
            <TrustStrip invert />
          </div>
          <p className="mt-4 text-sm text-navy-100">
            {site.hours.display} · {site.primaryCity} &amp; Peninsula coverage
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lift backdrop-blur-sm">
            <StoveIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Compact hero used on inner pages (service/location/problem/etc.). */
export function PageHero({
  eyebrow,
  title,
  intro,
  showCall = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  showCall?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
      <Container className="relative py-12 sm:py-16">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-copper-400">
            <Icon name="flame" className="h-4 w-4" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-100">{intro}</p>}
        {showCall && (
          <div className="mt-7 flex flex-wrap gap-3">
            <CallButton variant="primary" source="page-hero" label="Call Now" />
            <LinkButton href="/contact/" variant="ghostLight">
              Request Service
            </LinkButton>
          </div>
        )}
      </Container>
    </section>
  );
}

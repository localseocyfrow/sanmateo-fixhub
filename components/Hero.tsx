import Image from "next/image";
import { site } from "@/lib/site";
import { Container } from "./ui/Layout";
import { CallButton, LinkButton } from "./ui/Buttons";
import { TrustStrip } from "./ui/TrustStrip";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Decorative hero photograph — technician sits in the right third of the frame, so the
          crop is biased right-of-centre and anchored to the top to keep his head out of the cut.
          Empty alt: the H1 already carries the message, the photo adds nothing for a screen reader. */}
      <Image
        src="/images/home/home-page-hero-image.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover object-[78%_top] lg:object-[center_top]"
      />
      {/* Navy scrim tuned to this photo. Mobile: the copy runs full-width over the technician, so
          the wash is vertical and fairly even. Desktop: heavy behind the left-hand copy column
          (~0-50vw), fading out across the technician and kitchen so they stay naturally lit. */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(7,31,47,0.82)_0%,rgba(7,31,47,0.72)_45%,rgba(7,31,47,0.88)_100%)] lg:bg-[linear-gradient(to_right,rgba(7,31,47,0.94)_0%,rgba(7,31,47,0.90)_30%,rgba(7,31,47,0.72)_46%,rgba(12,39,57,0.38)_68%,rgba(12,39,57,0.14)_100%)]"
        aria-hidden
      />
      {/* Desktop-only bottom vignette for depth; mobile already has its vertical wash above. */}
      <div className="absolute inset-0 -z-10 hidden lg:block lg:bg-gradient-to-t lg:from-navy-950/45 lg:via-transparent lg:to-navy-950/15" aria-hidden />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-xl animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-100 backdrop-blur-sm">
            <Icon name="flame" className="h-4 w-4 text-copper-400" />
            Stove Repair in San Mateo by SanMateo FixHub
          </p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight drop-shadow-sm sm:text-5xl">
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

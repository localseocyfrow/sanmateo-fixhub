import Image from "next/image";
import { site } from "@/lib/site";
import { Container } from "./ui/Layout";
import { CallButton, LinkButton } from "./ui/Buttons";
import { TrustStrip } from "./ui/TrustStrip";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Hero photograph — a lit gas range in a San Mateo kitchen. */}
      <Image
        src="/images/home/san-mateo-stove-repair-hero.png"
        alt="Stainless steel gas range with lit blue burners in a modern San Mateo kitchen"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[68%_center] lg:object-center"
      />
      {/* Navy scrims for text contrast: dark on the left, subtle depth at the bottom. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-900/20" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" aria-hidden />

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

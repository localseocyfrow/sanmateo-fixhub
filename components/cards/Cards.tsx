import Link from "next/link";
import type { Service, Problem, Location } from "@/lib/types";
import { Icon } from "../Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-copper-400 hover:shadow-lift"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-copper-600 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy-800 group-hover:text-copper-700">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-copper-700">
        Learn more
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

export function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <Link
      href={`/problems/${problem.slug}/`}
      className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500 hover:shadow-card"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white">
        <Icon name={problem.icon} className="h-5 w-5" />
      </span>
      <span>
        <span className="block font-bold text-navy-800 group-hover:text-teal-700">{problem.name}</span>
        <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{problem.summary}</span>
      </span>
    </Link>
  );
}

export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}/`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-copper-400 hover:shadow-card"
    >
      <span className="flex items-center gap-2 font-bold text-navy-800 group-hover:text-copper-700">
        <Icon name="stove" className="h-5 w-5 text-copper-600" />
        {location.city}
      </span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{location.summary}</span>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-copper-700">
        Stove repair in {location.city}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

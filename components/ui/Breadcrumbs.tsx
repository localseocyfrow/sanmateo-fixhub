import Link from "next/link";
import { JsonLd } from "../JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

/** Breadcrumb trail + BreadcrumbList JSON-LD. `items` should include Home. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-surface">
      <ol className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-sm text-ink-faint sm:px-6 lg:px-8">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-semibold text-navy-800">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-copper-700 hover:underline">
                  {item.name}
                </Link>
              )}
              {!last && <span aria-hidden className="text-line">/</span>}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(items.map((c) => ({ name: c.name, url: c.href })))} />
    </nav>
  );
}

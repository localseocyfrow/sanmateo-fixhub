import Link from "next/link";
import { Icon } from "../Icon";

export type RelatedLink = { label: string; href: string; description?: string };

/** Internal-linking card list used at the bottom of service/location/problem pages. */
export function RelatedLinks({
  title,
  links,
  columns = 2,
}: {
  title: string;
  links: RelatedLink[];
  columns?: 1 | 2 | 3;
}) {
  if (!links.length) return null;
  const cols = columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <div>
      <h2 className="text-xl font-bold text-navy-800">{title}</h2>
      <div className={`mt-4 grid grid-cols-1 gap-3 ${cols}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-copper-400 hover:bg-copper-50"
          >
            <span className="mt-0.5 text-copper-600 transition-transform group-hover:translate-x-0.5">
              <Icon name="wrench" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-navy-800 group-hover:text-copper-700">{link.label}</span>
              {link.description && <span className="mt-0.5 block text-sm text-ink-faint">{link.description}</span>}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

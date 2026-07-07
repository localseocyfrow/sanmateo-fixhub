import { Icon } from "../Icon";
import type { IconName } from "@/lib/types";

// SAFE, non-fabricated trust signals only. No ratings, counts, or credentials.
const defaultItems: { icon: IconName; label: string }[] = [
  { icon: "flame", label: "Gas & Electric Stove Help" },
  { icon: "stove", label: "Homes & Businesses" },
  { icon: "search", label: "Clear Repair Guidance" },
  { icon: "clock", label: "Fast Availability Check" },
];

export function TrustStrip({
  items = defaultItems,
  invert = false,
}: {
  items?: { icon: IconName; label: string }[];
  invert?: boolean;
}) {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {items.map((item) => (
        <li
          key={item.label}
          className={`flex items-center gap-2 text-sm font-semibold ${invert ? "text-navy-100" : "text-ink-soft"}`}
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full ${
              invert ? "bg-white/10 text-copper-400" : "bg-teal-50 text-teal-700"
            }`}
          >
            <Icon name={item.icon} className="h-4 w-4" />
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

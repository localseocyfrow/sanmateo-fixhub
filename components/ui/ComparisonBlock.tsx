import type { Comparison } from "@/lib/types";

/** Two-column comparison table (e.g. Gas vs Electric, Repair vs Replacement). */
export function ComparisonBlock({ data }: { data: Comparison }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line shadow-card">
      <div className="bg-navy-800 px-5 py-4 text-white">
        <h3 className="text-lg font-bold">{data.title}</h3>
        {data.intro && <p className="mt-1 text-sm text-navy-100">{data.intro}</p>}
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] bg-surface text-sm font-bold text-navy-800">
        <div className="p-3 sm:p-4" aria-hidden />
        <div className="border-l border-line p-3 sm:p-4">{data.leftLabel}</div>
        <div className="border-l border-line p-3 sm:p-4">{data.rightLabel}</div>
      </div>
      <div className="divide-y divide-line bg-white">
        {data.rows.map((row) => (
          <div key={row.aspect} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)]">
            <div className="p-3 text-sm font-semibold text-navy-800 sm:p-4">{row.aspect}</div>
            <div className="border-l border-line p-3 text-sm text-ink-soft sm:p-4">{row.left}</div>
            <div className="border-l border-line p-3 text-sm text-ink-soft sm:p-4">{row.right}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

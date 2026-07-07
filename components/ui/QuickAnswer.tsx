import { Icon } from "../Icon";

/** Answer-first block optimized for AEO/GEO. Keep body to ~40–70 words. */
export function QuickAnswer({ children, heading = "Quick Answer" }: { children: React.ReactNode; heading?: string }) {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-teal-100 bg-teal-50 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">{heading}</p>
          <p className="mt-1 text-[1.02rem] leading-relaxed text-navy-900">{children}</p>
        </div>
      </div>
    </aside>
  );
}

import type { Faq } from "@/lib/types";
import { Icon } from "../Icon";

/**
 * FAQ accordion built on native <details>/<summary> — fully accessible and
 * works with zero client JavaScript (progressive enhancement, no hydration).
 */
export function FAQAccordion({ faqs, heading = "Frequently Asked Questions" }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">{heading}</h2>
      <div className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-navy-800 marker:hidden hover:bg-surface">
              <span>{faq.question}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-transform duration-200 group-open:rotate-45">
                <Icon name="spark" className="h-4 w-4" />
              </span>
            </summary>
            <div className="px-5 pb-5 leading-relaxed text-ink-soft">{faq.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

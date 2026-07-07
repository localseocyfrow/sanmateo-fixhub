import Link from "next/link";
import { clickToCall } from "@/lib/site";
import { Icon } from "../Icon";

/** Sticky bottom action bar on mobile only: one-tap call + request service. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 shadow-lift backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={clickToCall}
          data-call-source="mobile-bar"
          className="ringba-phone flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-copper-600 font-bold text-white"
        >
          <Icon name="phone" className="h-5 w-5" />
          Call Now
        </a>
        <Link
          href="/contact/"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-navy-800 font-bold text-navy-800"
        >
          <Icon name="wrench" className="h-5 w-5" />
          Request
        </Link>
      </div>
    </div>
  );
}

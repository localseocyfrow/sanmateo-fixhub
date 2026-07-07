import Link from "next/link";
import { site, clickToCall } from "@/lib/site";
import { Icon } from "../Icon";

/**
 * Top utility bar. Emergency-aware but truthful: it does NOT claim 24/7 or a
 * guaranteed response unless configured. Gas-smell safety guidance is always
 * appropriate to surface.
 */
export function EmergencyBar() {
  return (
    <div className="bg-navy-900 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-sm sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-navy-100">
          <Icon name="alert" className="h-4 w-4 text-copper-400" />
          <span>
            Smell gas?{" "}
            <Link href="/problems/gas-smell-from-stove/" className="font-semibold text-white underline underline-offset-2">
              Read urgent safety steps
            </Link>
          </span>
        </p>
        <p className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-navy-100 sm:flex">
            <Icon name="clock" className="h-4 w-4 text-teal-500" />
            {site.hours.display}
          </span>
          <a href={clickToCall} className="ringba-phone flex items-center gap-1.5 font-bold text-white hover:text-copper-400" data-call-source="topbar">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone.display}
          </a>
        </p>
      </div>
    </div>
  );
}

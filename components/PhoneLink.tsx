import { site, clickToCall } from "@/lib/site";
import { Icon } from "./Icon";

type Props = {
  className?: string;
  /** Show the phone icon before the number. */
  withIcon?: boolean;
  /** Override displayed label (defaults to the configured display number). */
  label?: string;
  /** Analytics / Ringba hook attribute value. */
  source?: string;
};

/**
 * Single reusable click-to-call component. Every phone number on the site flows
 * through here so the Ringba tracking number can be swapped in one place.
 *
 * Ringba dynamic number insertion: when enabled, Ringba's tag targets the
 * `data-ringba` / class hooks below and rewrites the visible number + href at
 * runtime. Until configured, the placeholder from lib/site.ts is shown.
 */
export function PhoneLink({ className = "", withIcon = false, label, source }: Props) {
  return (
    <a
      href={clickToCall}
      className={`ringba-phone ${className}`}
      data-ringba={site.ringba.numberPoolId || undefined}
      data-call-source={source}
      aria-label={`Call ${site.name} at ${site.phone.display}`}
    >
      {withIcon && <Icon name="phone" className="h-[1.05em] w-[1.05em]" />}
      <span className="ringba-number">{label ?? site.phone.display}</span>
    </a>
  );
}

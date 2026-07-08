import Link from "next/link";
import { site, clickToCall, mailTo, socialProfiles } from "@/lib/site";
import { footerNav, legalNav } from "@/lib/nav";
import { Logo } from "../Logo";
import { Icon } from "../Icon";
import { SocialIcon } from "../SocialIcons";

export function Footer() {
  const year = 2026; // static build-time year; avoids Date() in RSC caching

  return (
    <footer className="mt-auto bg-navy-900 text-navy-100 pb-24 lg:pb-0">
      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-white">Need stove repair in San Mateo?</h2>
            <p className="mt-1 text-navy-100">Call now or request service and we&apos;ll help you check next steps.</p>
          </div>
          <a
            href={clickToCall}
            data-call-source="footer"
            className="ringba-phone inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-copper-600 px-6 py-3 font-bold text-white hover:bg-copper-700"
          >
            <Icon name="phone" className="h-5 w-5" />
            {site.phone.display}
          </a>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:px-8">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-100">
            Specialist gas and electric stove, range, and cooktop repair for homes and businesses across San Mateo and
            the Peninsula.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-teal-500" /> {site.hours.display}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 text-teal-500" />
              <a href={clickToCall} className="ringba-phone hover:text-white" data-call-source="footer-info">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <SocialIcon name="mail" className="h-4 w-4 text-teal-500" />
              <a href={mailTo} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>

          <ul className="mt-5 flex items-center gap-3">
            {socialProfiles.map((s) => (
              <li key={s.key}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SanMateo FixHub on ${s.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-navy-100 ring-1 ring-white/10 transition hover:bg-copper-600 hover:text-white"
                >
                  <SocialIcon name={s.key} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerNav.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-100 hover:text-copper-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-navy-100 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. Serving {site.primaryCity} &amp; {site.county}.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-copper-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

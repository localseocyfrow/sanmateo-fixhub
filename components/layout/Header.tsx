"use client";

import { useState } from "react";
import Link from "next/link";
import { headerNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { Logo } from "../Logo";
import { CallButton } from "../ui/Buttons";
import { Icon } from "../Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {headerNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-surface hover:text-copper-700"
                >
                  {item.label}
                  <span aria-hidden className="text-ink-faint transition-transform group-hover:rotate-180">
                    <Icon name="spark" className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-surface hover:text-copper-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-surface hover:text-copper-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <CallButton variant="primary" source="header" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <nav aria-label="Mobile" className="max-h-[75vh] overflow-y-auto px-4 py-4">
            <ul className="space-y-1">
              {headerNav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                        aria-expanded={expanded === item.label}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-semibold text-navy-800 hover:bg-surface"
                      >
                        {item.label}
                        <span className={`transition-transform ${expanded === item.label ? "rotate-45" : ""}`}>
                          <Icon name="spark" className="h-4 w-4 text-ink-faint" />
                        </span>
                      </button>
                      {expanded === item.label && (
                        <ul className="ml-3 border-l border-line pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-surface hover:text-copper-700"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 font-semibold text-navy-800 hover:bg-surface"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <CallButton variant="primary" source="mobile-menu" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

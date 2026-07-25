import Link from "next/link";
import type { BlogBlock } from "@/lib/types";
import { Icon } from "../Icon";
import { CTASection } from "./CTASection";

/**
 * Renders the structured article blocks used by long-form blog posts.
 * Every block is plain data (see `BlogBlock` in lib/types) — no raw HTML,
 * no inline styles, no dangerouslySetInnerHTML. All blocks are reusable
 * across posts.
 */

/** Entries for the page guide: any block that has both a heading and an anchor. */
export type TocEntry = { label: string; anchor: string };

export function blogToc(blocks: BlogBlock[]): TocEntry[] {
  const entries: TocEntry[] = [];
  for (const b of blocks) {
    if ("anchor" in b && b.anchor && "heading" in b && b.heading) {
      entries.push({ label: b.heading, anchor: b.anchor });
    }
  }
  return entries;
}

/** Sticky-friendly "In this guide" card. Compact on mobile, fuller on desktop. */
export function BlogToc({ entries }: { entries: TocEntry[] }) {
  if (entries.length < 3) return null;
  return (
    <nav aria-label="In this guide" className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-faint">In this guide</h2>
      <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
        {entries.map((e, i) => (
          <li key={e.anchor} className="flex gap-2 text-sm">
            <span className="font-semibold text-ink-faint tabular-nums">{i + 1}.</span>
            <a href={`#${e.anchor}`} className="font-semibold text-navy-700 underline-offset-2 hover:text-copper-700 hover:underline">
              {e.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Section heading that doubles as an in-page anchor target. */
function BlockHeading({ heading, anchor }: { heading?: string; anchor?: string }) {
  if (!heading) return null;
  return (
    <h2 id={anchor} className="scroll-mt-24 text-2xl font-extrabold tracking-tight text-navy-800">
      {heading}
    </h2>
  );
}

function Paragraphs({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">
      {items.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-4 space-y-2">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3 text-ink-soft">
          <span className="mt-1 shrink-0 text-copper-600">
            <Icon name="check" className="h-4 w-4" />
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Footnote({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="mt-3 text-sm text-ink-faint">{text}</p>;
}

const SITE_HOST = "stoverepairsanmateoca.com";

/** True for an absolute link that points off-site (e.g. a safety authority). */
function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href) && !href.includes(SITE_HOST);
}

/**
 * Contextual links rendered after a block's copy. Internal links use next/link;
 * external links (safety authorities) render as plain anchors carrying
 * rel="nofollow noopener noreferrer" and open in a new tab.
 */
function BlockLinks({ links }: { links?: { label: string; href: string }[] }) {
  if (!links?.length) return null;
  return (
    <div className="mt-3 space-y-1.5">
      {links.map((link) =>
        isExternal(link.href) ? (
          <p key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-navy-700 underline underline-offset-2 hover:text-copper-700"
            >
              {link.label}
              <Icon name="search" className="h-3.5 w-3.5" aria-hidden />
            </a>
          </p>
        ) : (
          <p key={link.href}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-1.5 font-semibold text-navy-700 underline underline-offset-2 hover:text-copper-700"
            >
              {link.label}
              <span aria-hidden>→</span>
            </Link>
          </p>
        ),
      )}
    </div>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.kind) {
    case "prose":
      return (
        <section>
          <BlockHeading heading={block.heading} anchor={block.anchor} />
          <Paragraphs items={block.body} />
          <Bullets items={block.bullets} />
          <BlockLinks links={block.links} />
          <Footnote text={block.footnote} />
        </section>
      );

    case "stats":
      return (
        <section>
          <BlockHeading heading={block.heading} anchor={block.anchor} />
          <Paragraphs items={block.intro} />
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xl font-extrabold tracking-tight text-navy-800">{s.value}</p>
                <p className="mt-1 font-semibold text-ink">{s.label}</p>
                {s.note && <p className="mt-1 text-sm text-ink-faint">{s.note}</p>}
              </div>
            ))}
          </div>
          <Footnote text={block.footnote} />
        </section>
      );

    case "table":
      return (
        <section>
          <BlockHeading heading={block.heading} anchor={block.anchor} />
          <Paragraphs items={block.intro} />
          {/* Scrolls inside its own container so the page never scrolls sideways. */}
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line shadow-card">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              {block.caption && <caption className="sr-only">{block.caption}</caption>}
              <thead className="bg-navy-800 text-white">
                <tr>
                  {block.columns.map((c) => (
                    <th key={c} scope="col" className="whitespace-nowrap px-4 py-3 font-bold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {block.rows.map((row, i) => (
                  <tr key={i} className="align-top even:bg-surface">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={
                          j === 0
                            ? "px-4 py-3 font-semibold text-navy-800"
                            : "px-4 py-3 text-ink-soft"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footnote text={block.footnote} />
        </section>
      );

    case "compare":
      return (
        <section>
          <BlockHeading heading={block.heading} anchor={block.anchor} />
          <Paragraphs items={block.intro} />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[block.left, block.right].map((col) => (
              <div key={col.title} className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="font-bold text-navy-800">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 shrink-0 text-copper-600">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Footnote text={block.footnote} />
        </section>
      );

    case "callout": {
      const safety = block.tone === "safety";
      return (
        <div
          className={
            safety
              ? "rounded-2xl border-l-4 border-copper-600 bg-copper-50 p-6"
              : "rounded-2xl border border-navy-100 bg-navy-50 p-6"
          }
        >
          {block.heading && (
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy-800">
              <Icon name={safety ? "alert" : "wrench"} className={`h-6 w-6 ${safety ? "text-copper-600" : "text-navy-600"}`} />
              {block.heading}
            </h2>
          )}
          {block.body?.length ? (
            <div className="mt-2 space-y-2 leading-relaxed text-ink-soft">
              {block.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}
          {block.bullets?.length ? (
            <ul className="mt-3 space-y-2">
              {block.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-soft">
                  <span className={`mt-1 shrink-0 ${safety ? "text-copper-700" : "text-navy-600"}`}>
                    <Icon name={safety ? "shield" : "check"} className="h-4 w-4" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <BlockLinks links={block.links} />
        </div>
      );
    }

    case "checklist":
      return (
        <section>
          <BlockHeading heading={block.heading} anchor={block.anchor} />
          <Paragraphs items={block.intro} />
          {block.ordered ? (
            <ol className="mt-4 space-y-3">
              {block.items.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ol>
          ) : (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-ink-soft">
                  <span className="mt-1 shrink-0 text-copper-600">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <Footnote text={block.footnote} />
        </section>
      );

    case "cta":
      return <CTASection variant="band" heading={block.heading} subheading={block.subheading} source="blog-inline" />;
  }
}

export function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

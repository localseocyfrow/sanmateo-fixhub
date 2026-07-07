import type { ContentSection } from "@/lib/types";

/** Renders an array of {heading, body[], bullets?} sections as article prose. */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="prose-body max-w-none">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

/** Simple heading + paragraph list + optional bullets (non-prose, tighter). */
export function TextBlock({ heading, paragraphs, className = "" }: { heading?: string; paragraphs: string[]; className?: string }) {
  return (
    <div className={className}>
      {heading && <h2 className="text-2xl font-extrabold tracking-tight text-navy-800">{heading}</h2>}
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

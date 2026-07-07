import { Icon } from "../Icon";

/**
 * Clearly-labeled placeholder for content that requires VERIFIED business data
 * (job photos, technician profiles, case studies, certifications).
 * Renders an honest "coming soon" panel instead of fabricating proof.
 */
export function FutureContent({
  title,
  description,
  icon = "stove",
}: {
  title: string;
  description: string;
  icon?: Parameters<typeof Icon>[0]["name"];
}) {
  return (
    <div className="rounded-2xl border border-dashed border-navy-100 bg-surface p-6 text-center sm:p-8">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-600 shadow-soft">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy-800">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{description}</p>
      <p className="mt-3 inline-block rounded-full bg-navy-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-700">
        Future content area
      </p>
    </div>
  );
}

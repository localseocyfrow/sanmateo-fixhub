export type Step = { title: string; body: string };

/** Numbered, connected process steps (used on home + repair-process page). */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative rounded-2xl border border-line bg-white p-6 shadow-card">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-lg font-extrabold text-white">
            {i + 1}
          </span>
          <h3 className="mt-4 font-bold text-navy-800">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

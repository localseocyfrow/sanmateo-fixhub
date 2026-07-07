/** Concise "What is X?" definition block for AEO and featured-snippet capture. */
export function DefinitionBlock({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-copper-600 bg-surface p-5 sm:p-6">
      <h3 className="text-lg font-bold text-navy-800">{`What Is ${term}?`}</h3>
      <p className="mt-2 leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

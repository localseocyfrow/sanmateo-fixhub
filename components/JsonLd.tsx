// Renders one or more JSON-LD blocks. Server component (no client JS).
type Props = { data: object | null | (object | null)[] };

export function JsonLd({ data }: Props) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Content is app-controlled (no user input); safe to inject.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

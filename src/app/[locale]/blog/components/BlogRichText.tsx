const INLINE_PATTERN = /(\*\*[^*]+\*\*|==[^=]+==|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

/** Renders the inline markup of blog texts: **bold**, ==highlight== and [label](url). */
export default function BlogRichText({ text }: { text: string }) {
  return (
    <>
      {text.split(INLINE_PATTERN).map((part, i) => {
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("==")) {
          return (
            <span key={i} className="bg-(--lime) px-1.5 rounded">
              {part.slice(2, -2)}
            </span>
          );
        }
        const link = part.match(LINK_PATTERN);
        if (link) {
          return (
            <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="underline">
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

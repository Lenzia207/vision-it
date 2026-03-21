export default function TitleHeader({ title, description, tag }: { title: string; description?: string; tag?: string }) {

    return (
        <div className="flex flex-col items-center text-center gap-4 mb-16 reveal-on-scroll">
          {tag && <span className="section-tag">{tag}</span>}
          <h2 className="text-display-2">{title}</h2>
          {description && (
            <p className="text-lg max-w-5xl" style={{ color: "var(--text-300)" }}>
              {description}
            </p>
          )}
        </div>
    )
}
export default function TitleHeader({ title, description }: { title: string; description?: string }) {

    return (
        <div className="text-center justify-items-center mb-20 reveal-on-scroll">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight whitespace-pre-line mb-4" style={{ color: "var(--text-primary)" }}>
            {title}
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          {description && (
            <p className="text-lg lg:text-xl whitespace-pre-line max-w-5xl" style={{ color: "var(--text-secondary)" }}>{description}</p>
          )}
        </div>
    )
}
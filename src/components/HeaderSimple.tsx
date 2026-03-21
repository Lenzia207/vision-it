export default function HeaderSimple({ title }: { title: string }) {
    return (   <div className="mb-16 md:mb-20 text-center">
                   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
                        {title}
                   </h1>
                   <div className="accent-line mx-auto"></div>
                </div>)
}
export default function TitleHeader({ title, description }: { title: string; description?: string }) {

    return (
        <div className="text-center justify-items-center mb-20 reveal-on-scroll">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-white mb-10">
            {title}
          </h2>
          {description && (
            <p className="text-zinc-500  text-justify text-lg lg:text-xl whitespace-pre-line">{description}</p>
          )}
        </div>
    )
}
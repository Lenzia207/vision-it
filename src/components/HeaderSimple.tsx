export default function HeaderSimple({ title }: { title: string }) {
    return (   <div className="mb-16 md:mb-20 text-center">
                   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
                        {title}
                   </h1>
                   <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto rounded-full opacity-80"></div>
                </div>)
}
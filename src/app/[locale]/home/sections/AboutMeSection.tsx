import TitleHeader from "@/components/TitleHeader";
import Image from "next/image";

interface AboutMeSectionProps {
  title: string;
  description: string;
  fullname: string;
  social_media: {
    name: string;
    icon: string;
    url: string;
  }[];
}

export default function AboutMeSection({
  title,
  description,
  fullname,
  social_media,
}: AboutMeSectionProps) {
  return (
    <section
      id="about"
      className="relative py-24 md:py-16 bg-zinc-900/20 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 text-center reveal-on-scroll">
        <TitleHeader title={title}  />

        <div className="flex flex-col items-center gap-10">
          {/* Avatar Placeholder with Glow */}
          <div className="relative justify-items-center mb-8 group cursor-pointer">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full  blur-3xl transition duration-500 group-hover:opacity-100"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center">
                <Image
                src="/images/about-me.jpg"
                alt="Profile Image"
                width={160}
                height={160}
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
           <div className="text-2xl lg:text-4xl mt-4">{fullname}</div>
          </div>
          <div className="flex flex-row gap-10">
            {social_media.map(({ name, icon, url }, index) => (
              <a
                href={url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#0077b5] hover:bg-[#006396] text-white text-sm font-medium rounded-lg transition-colors mb-8 shadow-lg shadow-blue-900/20"
              >
                {name}
                <Image src={icon} alt={name} width={16} height={16} />
              </a>
            ))}
          </div>
            <p className="text-zinc-500  text-justify text-lg lg:text-xl whitespace-pre-line">{description}</p>

        </div>
      </div>
    </section>
  );
}

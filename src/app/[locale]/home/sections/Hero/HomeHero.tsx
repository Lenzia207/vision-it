import { HomeHero as HomeHeroData } from "../data/types/home-types";
import HeroVideo from "./HeroVideo";

interface HomeHeroProps {
  data: HomeHeroData;
}

export default function HomeHero({ data }: HomeHeroProps) {
  return (
    <section id="top" className="section-dark relative overflow-hidden landscape:h-svh">
      <HeroVideo cta={data.secondaryCta} />

      {/* The video carries the visible message; the page's text stays for search engines and screen readers */}
      <h1 className="sr-only">
        {data.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="sr-only">{data.text}</p>
      <p className="sr-only">{data.keywords.join(", ")}</p>
    </section>
  );
}

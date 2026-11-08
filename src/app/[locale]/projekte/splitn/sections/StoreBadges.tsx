import Image from "next/image";
import { SplitnCaseStudyData } from "../../data/case-studies-types";

type Stores = SplitnCaseStudyData["hero"]["stores"];

function getBadges(stores: Stores, locale: string) {
  const badgeLocale = locale === "de" ? "de" : "en";
  return [
    { ...stores.appStore, src: "/images/badges/app-store-en.svg", width: 150, height: 50, className: "h-[50px] w-auto" },
    // The Google Play PNGs carry transparent padding, offset via negative margin
    { ...stores.googlePlay, src: `/images/badges/google-play-${badgeLocale}.png`, width: 168, height: 65, className: "h-[65px] w-auto -my-2 -mx-1" },
  ];
}

// Official store badges; each one becomes an external link once its url is set
export default function StoreBadges({ stores, locale }: { stores: Stores; locale: string }) {
  return (
    <>
      {getBadges(stores, locale).map((badge) => {
        const image = <Image src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} className={badge.className} />;
        return badge.url ? (
          <a key={badge.src} href={badge.url} target="_blank" rel="noopener noreferrer" className="inline-flex">
            {image}
          </a>
        ) : (
          <span key={badge.src} className="inline-flex">
            {image}
          </span>
        );
      })}
    </>
  );
}

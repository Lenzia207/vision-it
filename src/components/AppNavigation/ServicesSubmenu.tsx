import { Link } from "@/app/i18n/routing";
import { MainNavigation as MainNavigationItem, ServiceCardData } from "@/app/[locale]/home/sections/data/types/home-types";

interface ServicesSubmenuProps {
  id: string;
  item: MainNavigationItem;
  serviceCards: ServiceCardData[];
  locale: string;
  onClose: () => void;
}

/** Desktop dropdown below the header listing every service area. */
export default function ServicesSubmenu({ id, item, serviceCards, locale, onClose }: ServicesSubmenuProps) {
  return (
    <div id={id} className="hidden min-[1060px]:block border-t border-white/10">
      <div className="max-w-[1320px] mx-auto grid grid-cols-[280px_1fr] gap-12 px-[clamp(20px,4vw,48px)] pt-8 pb-10">
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-(--lime)">{item.name}</span>
          {item.submenuDescription && <p className="m-0 text-sm leading-relaxed text-[#C7D9D8]">{item.submenuDescription}</p>}
        </div>
        <ul className="m-0 p-0 list-none grid grid-cols-2 gap-x-8">
          {serviceCards.map((card, i) => (
            <li key={card.key}>
              <Link
                href={`/${card.link}`}
                locale={locale}
                onClick={onClose}
                className="group h-full grid grid-cols-[28px_minmax(0,1fr)] items-baseline content-start gap-3 px-4 -mx-4 py-3.5 border-b border-white/8 no-underline transition-colors hover:bg-white/5"
              >
                <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-[#9DB3B2]">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[15px] font-medium text-white transition-colors group-hover:text-(--lime)">{card.title}</span>
                  <span className="text-[13px] leading-normal text-[#9DB3B2]">{card.items.slice(0, 3).join(" · ")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

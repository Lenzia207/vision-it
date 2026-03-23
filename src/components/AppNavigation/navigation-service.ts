import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import router from "next/router";

export const navigate = (
    sectionId: string,
    locale: string,
    isHomePage: boolean,

) => {
    if (isHomePage) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        sessionStorage.setItem("scrollTarget", sectionId);
        router.push(`/${locale}`);
    }
};

export const checkSectionLocation = (isHomePage: boolean) => {
    if (!isHomePage) return;
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;
    sessionStorage.removeItem("scrollTarget");
    const timer = setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(timer);
};

/**
 * Returns an onScroll handler that hides the nav when scrolling down
 * and shows it when scrolling up or near the top.
 *
 * Uses a ref for lastY to avoid stale closures — safe to use with an
 * empty dependency array.
 *
 * @example
 * useEffect(() => createScrollVisibilityHandler(lastYRef, setVisible), []);
 */
export const createScrollVisibilityHandler = (
    setScrolled: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
};

export const setItemActive = (data: HomePageData, setActiveSection: React.Dispatch<React.SetStateAction<string>>) => {



    const ids = data.main_navigation
        .map((item) => item.pageId.replace("#", ""))
        .filter(Boolean);

    const getActive = () => {
        const threshold = window.innerHeight * 0.4;
        let current = "";
        for (const id of ids) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (el.getBoundingClientRect().top <= threshold) current = id;
        }
        setActiveSection(current);
    };

    window.addEventListener("scroll", getActive, { passive: true });
    getActive();
    return () => window.removeEventListener("scroll", getActive);
};
import BottomNavigation from "@/components/BottomNavigation";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { LocaleParams } from "../i18n/local-params";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/sections/data/home-page-data";

export default async function Home(props: LocaleParams) {
  const { locale } = await props.params;
  console.log(locale);

  const data = await fetchHomePageData(locale);

  if (!data) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollRevealObserver />
      <HomeScreen data={data} />
      {/* Footer */}
      <footer className="py-8 pb-20  border-t border-white/5 text-center text-zinc-600 text-sm">
        <p>&copy; 2026 GENZY</p>
      </footer>

      <BottomNavigation />
    </main>
  );
}

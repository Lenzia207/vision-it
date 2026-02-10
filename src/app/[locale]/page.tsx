import BottomNavigation from "@/components/BottomNavigation";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { LocaleParams } from "../i18n/local-params";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/sections/data/home-page-data";
import MainNavigation from "@/components/MainNavigation";
import Footer from "./home/sections/Footer";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}


export default async function Home(props: LocaleParams) {
  const { locale } = await props.params;
  console.log(locale);

  const data = await fetchHomePageData(locale);

  if (!data) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollRevealObserver />
      <MainNavigation />
      <HomeScreen data={data} locale={locale} />
      <Footer />

      {/* Mobile View */}
      <BottomNavigation />
    </main>
  );
}

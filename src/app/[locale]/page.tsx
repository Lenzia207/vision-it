import { LocaleParams } from "../i18n/local-params";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/sections/data/home-page-data";

import PageWrapper from "@/components/PageWrapper";
export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function Home(props: LocaleParams) {
  const { locale } = await props.params;
  console.log(locale);

  const data = await fetchHomePageData(locale);

  if (!data) return <div>Loading...</div>;

  return (
    <PageWrapper
      locale={locale}
      pageContent={<HomeScreen data={data} locale={locale} />}
    />
  );
}

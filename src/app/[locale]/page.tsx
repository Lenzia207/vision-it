import type { Metadata } from "next";
import { LocaleParams } from "../i18n/local-params";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/sections/data/home-page-data";

import PageWrapper from "@/components/PageWrapper";
export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const base = "https://www.vision-it.at";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${base}/${locale}/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${base}/de/`,
        en: `${base}/en/`,
        "x-default": `${base}/de/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "VisionIT — Web Design & Web Development",
      description:
        "Custom web design and modern web development for small businesses and freelancers. Portfolio, pricing & contact.",
      openGraph: {
        title: "VisionIT — Web Design & Web Development",
        description:
          "Custom web design and modern web development for small businesses and freelancers.",
        url: canonical,
      },
    };
  }

  return {
    ...shared,
    title: "VisionIT — Webdesign & Webentwicklung",
    description:
      "Individuelles Webdesign und moderne Webentwicklung für kleine Unternehmen und Freelancer. Portfolio, Preise & Kontakt.",
    openGraph: {
      title: "VisionIT — Webdesign & Webentwicklung",
      description:
        "Individuelles Webdesign und moderne Webentwicklung für kleine Unternehmen und Freelancer.",
      url: canonical,
    },
  };
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

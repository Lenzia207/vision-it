import type { Metadata } from "next";
import { LocaleParams } from "@/app/i18n/local-params";
import fetchCaseStudiesData from "../data/case-studies-page-data";
import { buildCaseStudyMetadata } from "../data/case-study-metadata";
import HerzHirnHumorCaseStudy from "./HerzHirnHumorCaseStudy";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const data = await fetchCaseStudiesData(locale);

  return buildCaseStudyMetadata(locale, "herzhirnhumor", data.herzhirnhumor.meta);
}

export default async function HerzHirnHumorCaseStudyPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchCaseStudiesData(locale);

  return <HerzHirnHumorCaseStudy data={data.herzhirnhumor} locale={locale} />;
}

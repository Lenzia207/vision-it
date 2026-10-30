import type { Metadata } from "next";
import { LocaleParams } from "@/app/i18n/local-params";
import fetchCaseStudiesData from "../data/case-studies-page-data";
import { buildCaseStudyMetadata } from "../data/case-study-metadata";
import SplitnCaseStudy from "./SplitnCaseStudy";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const data = await fetchCaseStudiesData(locale);

  return buildCaseStudyMetadata(locale, "splitn", data.splitn.meta);
}

export default async function SplitnCaseStudyPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchCaseStudiesData(locale);

  return <SplitnCaseStudy data={data.splitn} locale={locale} />;
}

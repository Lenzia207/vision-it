import type { Metadata } from "next";
import { baseUrl, caseStudiesUrl } from "@/app/configs/configs";
import { CaseStudySlug } from "./case-studies-types";

export function buildCaseStudyMetadata(
  locale: string,
  slug: CaseStudySlug,
  meta: { title: string; description: string }
): Metadata {
  const path = `${caseStudiesUrl}/${slug}`;
  const canonical = `${baseUrl}/${locale}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${path}`,
        en: `${baseUrl}/en${path}`,
        "x-default": `${baseUrl}/de${path}`,
      },
    },
    openGraph: {
      title: `${meta.title} | VisionIT`,
      description: meta.description,
      url: canonical,
      siteName: "VisionIT",
      type: "article",
    },
  };
}

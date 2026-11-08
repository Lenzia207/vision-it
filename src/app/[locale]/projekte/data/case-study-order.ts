import { caseStudiesUrl } from "@/app/configs/configs";
import { CaseStudySlug } from "./case-studies-types";

/** Reading order of the case studies; the "next project" link of the last one wraps to the first. */
export const caseStudyOrder: CaseStudySlug[] = ["elektrochemie", "herzhirnhumor", "camp-currie", "pictolog", "splitn"];

export function nextCaseStudyHref(slug: CaseStudySlug): string {
  const next = caseStudyOrder[(caseStudyOrder.indexOf(slug) + 1) % caseStudyOrder.length];
  return `${caseStudiesUrl}/${next}`;
}

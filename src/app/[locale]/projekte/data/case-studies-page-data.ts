import { cache } from "react";
import { CaseStudiesData } from "./case-studies-types";

/*
 * Fetches the translation data for the case study pages.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchCaseStudiesData = cache(async function (
  locale: string
): Promise<CaseStudiesData> {
  const caseStudiesData = await import(`@messages/${locale}/case-studies.json`);

  return {
    ...caseStudiesData.default.case_studies,
  };
});

export default fetchCaseStudiesData;

import { cache } from "react";
import { BriefingFormData } from "./types/briefing-form-types";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchBriefingFormData = cache(async function (
  locale: string
): Promise<BriefingFormData> {
  const [briefingFormData] = await Promise.all([
    import(`@messages/${locale}/briefing-form.json`),
  ]);

  return {
    ...briefingFormData.default,
  };
});

export default fetchBriefingFormData;

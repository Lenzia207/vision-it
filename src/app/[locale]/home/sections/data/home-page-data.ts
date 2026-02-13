import { HomePageData } from "./types/home-types";
import { cache } from "react";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchHomePageData = cache(async function (
  locale: string
): Promise<HomePageData> {
  const [homeData] = await Promise.all([
    import(`@messages/${locale}/home.json`),
    // import(`@/messages/${locale}/common.json`),
  ]);

  return {
    ...homeData.default,
  };
});

export default fetchHomePageData;

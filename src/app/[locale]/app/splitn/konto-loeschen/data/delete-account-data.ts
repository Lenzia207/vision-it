import { cache } from "react";
import { SplitnDeleteAccountData } from "./delete-account-types";

/** Loads the delete-account texts for the given locale, once per request. */
export const fetchSplitnDeleteAccountData = cache(async function (locale: string): Promise<SplitnDeleteAccountData> {
  const data = await import(`@messages/${locale}/splitn-delete-account.json`);
  return data.default;
});

export default fetchSplitnDeleteAccountData;

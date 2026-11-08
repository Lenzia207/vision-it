/**
 * Texts of the Splitn delete-account page.
 * Placeholders in the texts: {app} (bold app name), {mail} (support mail link), {privacyLink} (link to the Splitn privacy policy).
 */
export interface SplitnDeleteAccountData {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  inApp: { title: string; steps: string[]; note: string };
  byEmail: { title: string; text: string };
  deleted: { title: string; items: string[]; note: string };
  kept: { title: string; text: string };
  more: { title: string; text: string; privacyLinkText: string };
}

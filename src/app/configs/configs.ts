export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vision-it.at";
export const websiteDetailUrl = `/angebot-webseiten`;
export const mobileAppDetailUrl = `/angebot-mobile-apps`;
export const seoGeoDetailUrl = `/angebot-seo-geo`;
export const agenturenDetailUrl = `/angebot-agenturen`;
export const briefingFormularUrl = `/briefing-formular`;

/**
 * IDs/pageIds that should temporarily be hidden from the site
 * (nav, service overview, etc.) without deleting their data/pages.
 * Add an id here to "comment it out" everywhere it's used.
 */
export const hiddenAngebotIds = ["mobile-apps"];

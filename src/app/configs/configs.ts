export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vision-it.at";
export const websiteDetailUrl = `/angebot-webseiten`;
export const mobileAppDetailUrl = `/angebot-mobile-apps`;
export const seoGeoDetailUrl = `/angebot-seo-geo`;
export const agenturenDetailUrl = `/angebot-agenturen`;
export const briefingFormularUrl = `/briefing-formular`;
export const caseStudiesUrl = `/projekte`;
export const caseStudySlugs = ["elektrochemie", "herzhirnhumor", "camp-currie", "pictolog", "splitn"] as const;
export const splitnPrivacyUrl = `/app/splitn/datenschutz/`;
export const blogUrl = `/blog`;
export const blogSlugs = ["ki-sichtbarkeit-website"] as const;

/**
 * IDs/pageIds that should temporarily be hidden from the site
 * (nav, service overview, etc.) without deleting their data/pages.
 * Add an id here to "comment it out" everywhere it's used.
 */
export const hiddenAngebotIds: string[] = ["agenturen"];

import { MetadataRoute } from 'next';
import { agenturenDetailUrl, baseUrl, blogSlugs, blogUrl, briefingFormularUrl, caseStudiesUrl, caseStudySlugs, mobileAppDetailUrl, pictologPrivacyUrl, seoGeoDetailUrl, splitnDeleteAccountUrl, splitnPrivacyUrl, websiteDetailUrl } from './configs/configs';

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry['changeFrequency']>;

const locales = ['de', 'en'] as const;

/** Every indexed page: its locale-independent path, how often it changes and its priority. */
const routes: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/impressum/', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/datenschutz/', changeFrequency: 'yearly', priority: 0.3 },
  { path: briefingFormularUrl, changeFrequency: 'monthly', priority: 0.8 },
  { path: seoGeoDetailUrl, changeFrequency: 'monthly', priority: 0.9 },
  { path: mobileAppDetailUrl, changeFrequency: 'monthly', priority: 0.9 },
  { path: agenturenDetailUrl, changeFrequency: 'monthly', priority: 0.9 },
  { path: websiteDetailUrl, changeFrequency: 'monthly', priority: 0.9 },
  { path: splitnPrivacyUrl, changeFrequency: 'yearly', priority: 0.3 },
  { path: splitnDeleteAccountUrl, changeFrequency: 'yearly', priority: 0.3 },
  { path: pictologPrivacyUrl, changeFrequency: 'yearly', priority: 0.3 },
  { path: `${blogUrl}/`, changeFrequency: 'weekly', priority: 0.8 },
  ...blogSlugs.map((slug) => ({ path: `${blogUrl}/${slug}/`, changeFrequency: 'yearly' as const, priority: 0.7 })),
  ...caseStudySlugs.map((slug) => ({ path: `${caseStudiesUrl}/${slug}`, changeFrequency: 'yearly' as const, priority: 0.7 })),
];

/** One entry per locale, each linking to all language versions of the page. */
function localizedEntries(path: string, changeFrequency: ChangeFrequency, priority: number, lastModified: Date): SitemapEntry[] {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        de: `${baseUrl}/de${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.flatMap(({ path, changeFrequency, priority }) => localizedEntries(path, changeFrequency, priority, lastModified));
}

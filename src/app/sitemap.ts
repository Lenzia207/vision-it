import { MetadataRoute } from "next";

const baseUrl = "https://www.vision-it.at";
const locales = ["de", "en"] as const;

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "briefing-formular", priority: 0.8, changeFrequency: "monthly" },
  { path: "impressum", priority: 0.3, changeFrequency: "yearly" },
  { path: "datenschutz", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const { path, priority, changeFrequency } of pages) {
      const url = path
        ? `${baseUrl}/${locale}/${path}`
        : `${baseUrl}/${locale}`;

      entries.push({ url, lastModified: new Date(), changeFrequency, priority });
    }
  }

  return entries;
}

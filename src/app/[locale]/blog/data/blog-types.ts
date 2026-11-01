/**
 * Type declarations for the blog pages.
 */
export interface BlogSlugParams {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export interface BlogMeta {
  title: string;
  description: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogStatBar {
  label: string;
  value: string;
  percent: number;
  current?: boolean;
}

export interface BlogStatCard {
  country: string;
  value: string;
  chartLabel: string;
  bars: BlogStatBar[];
  text: string;
  source: string;
  /** Only set once the source URL is verified; the source then renders as a link. */
  sourceUrl?: string;
}

/** Text fields support **bold**, ==highlight== and [label](url). */
export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "statement"; text: string }
  | { type: "image"; image: BlogImage }
  | { type: "options"; items: { label: string; text: string; highlighted?: boolean }[] }
  | {
      type: "stats";
      label: string;
      sourceLabel: string;
      cards: BlogStatCard[];
      note: { label: string; paragraphs: string[] };
    }
  | { type: "questions"; items: string[] }
  | { type: "checklist"; items: { title: string; text: string }[] };

export interface BlogLink {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  /** ISO date, used for sorting and structured data. */
  publishedAt: string;
  dateLabel: string;
  readingTime: string;
  categories: string[];
  topic: string;
  title: string;
  excerpt: string;
  lead: string;
  image: BlogImage;
  meta: BlogMeta;
  blocks: BlogBlock[];
  cta: {
    title: string;
    text: string;
    primary: BlogLink;
    secondary: BlogLink;
  };
}

export interface BlogData {
  overview: {
    meta: BlogMeta;
    tag: string;
    title: string;
    breadcrumbLabel: string;
  };
  section: {
    tag: string;
    title: string;
    description: string;
    allPosts: string;
  };
  readMore: string;
  posts: BlogPost[];
}

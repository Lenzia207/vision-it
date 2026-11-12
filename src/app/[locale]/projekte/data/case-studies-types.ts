export type CaseStudySlug = "elektrochemie" | "herzhirnhumor" | "camp-currie" | "pictolog" | "splitn";

export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface CaseStudyCard {
  title: string;
  description: string;
}

/** Optional client quote: the block only renders once a real quote is added to the messages. */
export interface CaseStudyQuote {
  text: string;
  author: string;
}

interface CaseStudyLink {
  label: string;
  title: string;
}

interface CaseStudyBase {
  meta: { title: string; description: string };
  nav: { ariaLabel: string; back: string; label: string };
  facts: CaseStudyFact[];
  next: CaseStudyLink;
  contact: CaseStudyLink;
  quote?: CaseStudyQuote;
}

interface WebsiteCaseStudyHero {
  description: string;
  websiteCta: string;
  websiteUrl: string;
  detailsCta: string;
}

interface CaseStudyIntro {
  label: string;
  title: string;
  paragraphs: string[];
}

export interface ElektrochemieCaseStudyData extends CaseStudyBase {
  hero: WebsiteCaseStudyHero & { eyebrow: string; title: string };
  intro: CaseStudyIntro;
  screenshotAlt: string;
  domain: string;
  work: {
    label: string;
    title: string;
    description: string;
    items: (CaseStudyCard & { symbol: string })[];
  };
  result: {
    label: string;
    title: string;
    stats: { value: string; label: string }[];
  };
}

export interface HerzHirnHumorCaseStudyData extends CaseStudyBase {
  hero: WebsiteCaseStudyHero & {
    illustrationLabel: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
  };
  screenshotAlt: string;
  domain: string;
  challenge: { label: string; title: string; description: string };
  work: { label: string; title: string; items: CaseStudyCard[] };
}

export interface CampCurrieCaseStudyData extends CaseStudyBase {
  hero: WebsiteCaseStudyHero & { eyebrow: string; title: string };
  intro: CaseStudyIntro;
  screenshotAlt: string;
  domain: string;
  work: { label: string; title: string; items: CaseStudyCard[] };
}

/** Store badges; each one becomes an external link once its url is set, otherwise it shows a "Coming Soon" toast. */
export interface StoreLinks {
  appStore: { url: string; alt: string };
  googlePlay: { url: string; alt: string };
}

export interface PictologCaseStudyData extends CaseStudyBase {
  hero: {
    appName: string;
    iconAlt: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    stores: StoreLinks;
    featuresCta: string;
  };
  mock: {
    title: string;
    search: string;
    recent: string;
    projects: { title: string; pages: string }[];
    add: string;
    previewTitle: string;
    documentLabel: string;
    documentTitle: string;
    share: string;
  };
  idea: CaseStudyIntro;
  steps: CaseStudyCard[];
  features: { label: string; title: string; items: CaseStudyCard[]; stack: string[] };
}

export interface SplitnCaseStudyData extends CaseStudyBase {
  hero: {
    logoAlt: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    stores: StoreLinks;
    detailsCta: string;
  };
  mock: {
    home: {
      greeting: string;
      subtitle: string;
      balanceLabel: string;
      balance: string;
      oweLabel: string;
      owedLabel: string;
      quickActions: string;
      add: string;
      settleUp: string;
      createGroup: string;
      groups: string;
      seeAll: string;
      groupItems: { name: string; type: string; icon: "home" | "travel" }[];
    };
    group: {
      title: string;
      balance: string;
      balanceLabel: string;
      paid: string;
      paidLabel: string;
      total: string;
      totalLabel: string;
      settleAll: string;
      membersLabel: string;
      member: { name: string; detail: string; balance: string };
      activityLabel: string;
      pendingLabel: string;
      activities: { title: string; detail: string; amount: string; positive?: boolean }[];
    };
  };
  idea: CaseStudyIntro;
  splits: { title: string; items: { value: string; description: string }[] };
  features: { label: string; items: CaseStudyCard[] };
  architecture: { label: string; clientLabel: string; nodes: CaseStudyCard[] };
}

export interface CaseStudiesData {
  elektrochemie: ElektrochemieCaseStudyData;
  herzhirnhumor: HerzHirnHumorCaseStudyData;
  campCurrie: CampCurrieCaseStudyData;
  pictolog: PictologCaseStudyData;
  splitn: SplitnCaseStudyData;
}

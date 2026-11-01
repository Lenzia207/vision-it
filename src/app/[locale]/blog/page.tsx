import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/app/i18n/local-params";
import fetchBlogData from "./data/blog-page-data";
import { buildBlogMetadata } from "./data/blog-metadata";
import BlogCardList from "./components/BlogCardList";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const data = await fetchBlogData(locale);

  return buildBlogMetadata(locale, data.overview.meta);
}

export default async function BlogPage(props: LocaleParams) {
  const { locale } = await props.params;
  const { overview, readMore, posts } = await fetchBlogData(locale);

  return (
    <PageWrapper
      locale={locale}
      pageContent={
        <>
          <section className="section-dark section-padding" style={{ paddingTop: "8rem" }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="max-w-3xl flex flex-col gap-6 reveal-on-scroll">
                <span className="section-tag">{overview.tag}</span>
                <h1 className="text-display-2">{overview.title}</h1>
                
              </div>
            </div>
          </section>

          <section className="bg-white px-[clamp(20px,5vw,64px)] py-[clamp(64px,8vw,104px)]">
            <div className="max-w-[1240px] mx-auto">
              <BlogCardList posts={posts} readMore={readMore} locale={locale} headingLevel="h2" />
            </div>
          </section>
        </>
      }
    />
  );
}

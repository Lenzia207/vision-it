import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/PageWrapper";
import { blogSlugs } from "@/app/configs/configs";
import fetchBlogData from "../data/blog-page-data";
import { buildBlogMetadata } from "../data/blog-metadata";
import { BlogSlugParams } from "../data/blog-types";
import BlogArticle from "../components/BlogArticle";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return ["en", "de"].flatMap((locale) => blogSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: BlogSlugParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await fetchBlogData(locale);
  const post = data.posts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildBlogMetadata(locale, post.meta, post);
}

export default async function BlogPostPage(props: BlogSlugParams) {
  const { locale, slug } = await props.params;
  const { overview, posts } = await fetchBlogData(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageWrapper
      locale={locale}
      pageContent={
        <BlogArticle post={post} blogName={overview.tag} breadcrumbLabel={overview.breadcrumbLabel} locale={locale} />
      }
    />
  );
}

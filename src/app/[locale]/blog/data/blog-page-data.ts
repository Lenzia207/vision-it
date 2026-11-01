import { cache } from "react";
import { BlogData, BlogPost } from "./blog-types";

/*
 * Fetches the translation data for the blog pages, newest post first.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchBlogData = cache(async function (
  locale: string
): Promise<BlogData> {
  const blogData = await import(`@messages/${locale}/blog.json`);
  const data: BlogData = blogData.default;

  return {
    ...data,
    posts: [...data.posts].sort((a: BlogPost, b: BlogPost) => b.publishedAt.localeCompare(a.publishedAt)),
  };
});

export default fetchBlogData;

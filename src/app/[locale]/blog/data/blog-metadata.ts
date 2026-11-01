import type { Metadata } from "next";
import { baseUrl, blogUrl } from "@/app/configs/configs";
import { BlogImage, BlogMeta } from "./blog-types";

export function buildBlogMetadata(
  locale: string,
  meta: BlogMeta,
  post?: { slug: string; publishedAt: string; image: BlogImage }
): Metadata {
  const path = post ? `${blogUrl}/${post.slug}/` : `${blogUrl}/`;
  const canonical = `${baseUrl}/${locale}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${path}`,
        en: `${baseUrl}/en${path}`,
        "x-default": `${baseUrl}/de${path}`,
      },
    },
    openGraph: {
      title: `${meta.title} | VisionIT`,
      description: meta.description,
      url: canonical,
      siteName: "VisionIT",
      ...(post
        ? {
            type: "article" as const,
            publishedTime: post.publishedAt,
            images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }],
          }
        : { type: "website" as const }),
    },
  };
}

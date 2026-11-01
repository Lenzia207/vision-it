import { BlogPost } from "../data/blog-types";
import BlogCard from "./BlogCard";

interface BlogCardListProps {
  posts: BlogPost[];
  readMore: string;
  locale: string;
  headingLevel: "h2" | "h3";
}

/** Fixed-width cards in a centered row, so a single post sits in the middle. */
export default function BlogCardList({ posts, readMore, locale, headingLevel }: BlogCardListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {posts.map((post, i) => (
        <div
          key={post.slug}
          className="reveal-on-scroll flex flex-col w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <BlogCard post={post} readMore={readMore} locale={locale} headingLevel={headingLevel} />
        </div>
      ))}
    </div>
  );
}

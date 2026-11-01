import { Link } from "@/app/i18n/routing";
import { blogUrl } from "@/app/configs/configs";
import Eyebrow from "../../home/sections/components/Eyebrow";
import fetchBlogData from "../data/blog-page-data";
import BlogCardList from "./BlogCardList";

const MAX_TEASER_POSTS = 3;

/** Latest blog posts, shown on the home page and the SEO & GEO page. */
export default async function BlogTeaserSection({ locale }: { locale: string }) {
  const { section, readMore, posts } = await fetchBlogData(locale);

  return (
    <section id="blog" className="bg-(--bg-surface-1) px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,136px)]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-14">
        <div className="reveal-on-scroll flex flex-wrap justify-between items-end gap-8">
          <div className="flex flex-col gap-3.5 max-w-[720px]">
            <span className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="size-2.5 bg-(--lime)" />
              <Eyebrow>{section.tag}</Eyebrow>
            </span>
            <h2 className="m-0 font-mono font-medium text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] tracking-[-0.03em] text-(--teal)">
              {section.title}
            </h2>
            <p className="m-0 mt-1.5 text-[1.06rem] leading-[1.65] text-(--text-300)">{section.description}</p>
          </div>
          <Link href={blogUrl} locale={locale} className="btn btn-secondary">
            {section.allPosts}
          </Link>
        </div>

        <BlogCardList posts={posts.slice(0, MAX_TEASER_POSTS)} readMore={readMore} locale={locale} headingLevel="h3" />
      </div>
    </section>
  );
}

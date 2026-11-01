import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { blogUrl } from "@/app/configs/configs";
import { BlogPost } from "../data/blog-types";

interface BlogCardProps {
  post: BlogPost;
  readMore: string;
  locale: string;
  headingLevel: "h2" | "h3";
}

export default function BlogCard({ post, readMore, locale, headingLevel: Heading }: BlogCardProps) {
  return (
    <Link
      href={`${blogUrl}/${post.slug}`}
      locale={locale}
      className="group flex-1 flex flex-col no-underline text-(--teal) bg-white border-2 border-(--border-light) transition-[border-color,transform] duration-300 hover:border-(--lime) hover:-translate-y-1"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3.5 p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[0.81rem] text-(--text-300)">
          <span className="flex gap-1.5">
            {post.categories.map((category) => (
              <span key={category} className="bg-(--lime) text-(--teal) px-3 py-1 rounded-full font-semibold">
                {category}
              </span>
            ))}
          </span>
          <span className="flex gap-3">
            <span>{post.dateLabel}</span>
          </span>
        </div>
        <Heading className="m-0 font-mono text-[1.45rem] font-medium tracking-[-0.02em] leading-[1.2] text-balance">
          {post.title}
        </Heading>
        <p className="m-0 text-[0.94rem] leading-[1.65] text-(--text-300)">{post.excerpt}</p>
        <span className="mt-auto font-mono text-[0.94rem] font-semibold">
          {readMore}{" "}
          <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

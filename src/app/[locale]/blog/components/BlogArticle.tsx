import { Link } from "@/app/i18n/routing";
import { baseUrl, blogUrl } from "@/app/configs/configs";
import { BlogLink, BlogPost } from "../data/blog-types";
import BlogBlocks from "./BlogBlocks";

interface BlogArticleProps {
  post: BlogPost;
  blogName: string;
  breadcrumbLabel: string;
  locale: string;
}

function CtaLink({ link, variant, locale }: { link: BlogLink; variant: string; locale: string }) {
  const className = `btn ${variant}`;
  return link.href.startsWith("/") ? (
    <Link href={link.href} locale={locale} className={className}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

export default function BlogArticle({ post, blogName, breadcrumbLabel, locale }: BlogArticleProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta.description,
    datePublished: post.publishedAt,
    inLanguage: locale,
    image: `${baseUrl}${post.image.src}`,
    mainEntityOfPage: `${baseUrl}/${locale}${blogUrl}/${post.slug}/`,
    author: { "@type": "Person", name: "Lena Zyadeh" },
    publisher: { "@id": "https://vision-it.at/#business" },
  };

  return (
    <article className="text-(--teal) text-lg leading-[1.7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <header className="bg-(--bg-surface-1) px-6 pt-[72px] pb-16">
        <div className="max-w-[820px] mx-auto flex flex-col gap-6">
          <nav aria-label={breadcrumbLabel} className="font-mono text-[13px] tracking-[0.08em] uppercase text-(--text-300)">
            <Link href={blogUrl} locale={locale} className="underline">
              {blogName}
            </Link>{" "}
            / {post.topic}
          </nav>
          <h1 className="m-0 font-mono text-[clamp(36px,5.2vw,60px)] leading-[1.08] font-bold tracking-[-0.02em]">
            {post.title}
          </h1>
          <p className="m-0 text-[21px] leading-[1.6] text-(--text-300)">{post.lead}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-(--text-300)">
            <span className="flex gap-1.5">
              {post.categories.map((category) => (
                <span key={category} className="bg-(--lime) text-(--teal) px-3 py-1 rounded-full font-semibold">
                  {category}
                </span>
              ))}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{post.dateLabel}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <BlogBlocks blocks={post.blocks} />

      <section className="px-6 pt-[72px] pb-24">
        <div className="section-dark max-w-[1040px] mx-auto rounded-3xl p-[clamp(32px,5vw,56px)] flex flex-wrap gap-7 items-center justify-between">
          <div className="flex-[1_1_420px] min-w-0 flex flex-col gap-3">
            <h2 className="m-0 font-mono text-[clamp(26px,3.4vw,36px)] leading-[1.2] font-bold text-white">
              {post.cta.title}
            </h2>
            <p className="m-0 text-lg leading-[1.65] text-white/88">{post.cta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink link={post.cta.primary} variant="btn-primary" locale={locale} />
            <CtaLink link={post.cta.secondary} variant="btn-secondary" locale={locale} />
          </div>
        </div>
      </section>
    </article>
  );
}

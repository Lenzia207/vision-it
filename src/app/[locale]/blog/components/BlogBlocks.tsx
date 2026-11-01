import Image from "next/image";
import { BlogBlock, BlogStatCard } from "../data/blog-types";
import BlogRichText from "./BlogRichText";

const PROSE = "w-full max-w-[808px] mx-auto px-6";
const CARD_LABEL = "font-mono text-[13px] font-semibold uppercase tracking-[0.08em] text-(--text-300)";

function StatCard({ card, sourceLabel }: { card: BlogStatCard; sourceLabel: string }) {
  return (
    <div className="section-dark rounded-[20px] p-8 flex flex-col gap-5">
      <span className="self-start font-mono text-xs font-bold uppercase tracking-widest text-(--teal) bg-(--lime) px-2.5 py-1 rounded-full">
        {card.country}
      </span>
      <div className="font-mono text-5xl leading-none font-bold text-(--lime)">{card.value}</div>
      <div role="img" aria-label={card.chartLabel} className="flex flex-col gap-3">
        {card.bars.map((bar) => (
          <div key={bar.label} className="flex flex-col gap-1.5">
            <div className="flex justify-between gap-3 text-[13px] leading-normal text-white/85">
              <span>{bar.label}</span>
              <span className="font-bold text-right">{bar.value}</span>
            </div>
            <div className="h-[18px] rounded-md bg-white/12">
              <div
                className={`h-[18px] rounded-md ${bar.current ? "bg-(--lime)" : "bg-white/55"}`}
                style={{ width: `${bar.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="m-0 text-[17px] leading-[1.6]">{card.text}</p>
      <p className="m-0 mt-auto text-[13px] leading-normal text-white/78">
        {card.source}
        {card.sourceUrl && (
          <>
            {" · "}
            <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-(--lime) underline">
              {sourceLabel}
            </a>
          </>
        )}
      </p>
    </div>
  );
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className={`${PROSE} mt-10 mb-1 first:mt-4 font-mono text-[clamp(26px,3.4vw,36px)] leading-[1.2] font-bold tracking-[-0.01em] whitespace-pre-line`}>
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className={`${PROSE} m-0 whitespace-pre-line`}>
          <BlogRichText text={block.text} />
        </p>
      );
    case "statement":
      return (
        <p className={`${PROSE} my-2 font-mono text-[clamp(22px,2.8vw,28px)] leading-[1.35] font-semibold`}>
          <BlogRichText text={block.text} />
        </p>
      );
    case "image":
      return (
        <figure className={`${PROSE} my-2`}>
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width}
            height={block.image.height}
            sizes="(min-width: 700px) 640px, 100vw"
            className="block w-full max-w-[640px] h-auto mx-auto rounded-2xl"
          />
        </figure>
      );
    case "options":
      return (
        <div className={PROSE}>
          <ul className="list-none m-0 my-2 p-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-4">
            {block.items.map((item) => (
              <li
                key={item.label}
                className={`border border-(--border-light) rounded-2xl p-[22px] flex flex-col gap-2.5 text-base leading-[1.6] ${
                  item.highlighted ? "bg-(--bg-surface-1)" : ""
                }`}
              >
                <span className={CARD_LABEL}>{item.label}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "stats":
      return (
        <section aria-label={block.label} className="w-full max-w-[1088px] mx-auto px-6 mt-2.5 mb-[18px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {block.cards.map((card) => (
              <StatCard key={card.country} card={card} sourceLabel={block.sourceLabel} />
            ))}
          </div>
          <div className="mt-5 bg-(--bg-surface-1) border border-(--border-light) rounded-[20px] p-8 flex flex-col gap-3.5">
            <span className={CARD_LABEL}>{block.note.label}</span>
            {block.note.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 text-base leading-[1.65] whitespace-pre-line">
                <BlogRichText text={paragraph} />
              </p>
            ))}
          </div>
        </section>
      );
    case "questions":
      return (
        <div className={PROSE}>
          <ul className="list-none m-0 my-1 py-6 px-7 bg-(--bg-surface-1) rounded-2xl flex flex-col gap-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3.5 items-baseline">
                <span aria-hidden="true" className="font-mono font-bold text-(--text-300)">?</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "checklist":
      return (
        <div className={PROSE}>
          <ol className="list-none m-0 my-2 p-0 flex flex-col gap-3.5">
            {block.items.map((item, i) => (
              <li key={item.title} className="flex gap-5 items-start border border-(--border-light) rounded-2xl p-[22px]">
                <span
                  aria-hidden="true"
                  className="shrink-0 size-11 rounded-xl bg-(--lime) text-(--teal) flex items-center justify-center font-mono font-bold text-xl"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="m-0 font-mono text-xl leading-[1.35]">{item.title}</h3>
                  <p className="m-0 text-[17px]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
  }
}

export default function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-[22px] pt-16">
      {blocks.map((block, i) => (
        <BlogBlockView key={i} block={block} />
      ))}
    </div>
  );
}

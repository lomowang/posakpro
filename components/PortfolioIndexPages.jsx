import Image from "next/image";
import Link from "next/link";
import { newsItems, pressItems, texts } from "@/lib/works";
import Reveal from "@/components/Reveal";

function PageIntro({ index, title, description }) {
  return (
    <header className="border-b border-black/25 pb-10 pt-16 md:pb-16 md:pt-24">
      <div className="mb-12 flex flex-wrap justify-between gap-4 text-[10px] uppercase tracking-[0.3em] md:mb-20">
        <span>Index / {index}</span>
        <span>POSAK JODIAN</span>
      </div>
      <div className="grid gap-8 md:grid-cols-[1fr_18rem] md:items-end lg:grid-cols-[1fr_22rem]">
        <h1 className="story-display text-[16vw] leading-[0.78] sm:text-[14vw] md:text-[9vw] lg:text-[11vw]">
          {title}
        </h1>
        <p className="max-w-sm text-sm leading-relaxed text-black/65 md:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}

function ArrowLink({ href, children = "View details" }) {
  const external = href?.startsWith("http");
  if (!href) return null;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-4 border-b border-black pb-1 text-[10px] uppercase tracking-[0.28em] transition-opacity hover:opacity-50"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

function NewsVisual({ item, priority }) {
  if (item.visual === "we-are-becoming") {
    return (
      <div className="relative flex min-h-[300px] max-w-full flex-col justify-between overflow-hidden border border-black/15 bg-[#f7f5ef] p-6 sm:aspect-[16/10] md:min-h-[420px] md:p-8 lg:min-h-[460px] lg:p-10">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.32em] text-black/50">
          <span>C-LAB</span>
          <span>2026</span>
        </div>
        <div>
          <p className="mb-6 text-[9px] uppercase tracking-[0.22em] text-black/50 sm:text-[10px] sm:tracking-[0.32em] lg:mb-8 lg:tracking-[0.35em]">
            Taiwan Contemporary Culture Lab
          </p>
          <h3 className="story-display max-w-full text-[12.5vw] leading-[0.84] text-black sm:text-[11vw] md:text-[5.8vw] lg:text-[7.2vw] xl:text-[7.8vw]">
            WE ARE
            <br />
            BECOMING
          </h3>
        </div>
        <div className="flex items-end justify-between gap-4 text-[9px] uppercase tracking-[0.18em] text-black/45 sm:text-[10px] sm:tracking-[0.28em]">
          <span>08 May — 16 August</span>
          <span>Exhibition</span>
        </div>
        <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full border border-black/10 md:h-[32rem] md:w-[32rem]" />
        <div className="pointer-events-none absolute bottom-24 left-10 h-px w-2/3 bg-black/20" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 62vw"
      />
    </div>
  );
}

export function NewsIndexPage() {
  return (
    <main className="bg-white px-5 pb-32 text-black md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <PageIntro index="01" title="NEWS" description="Current and recent exhibitions, screenings and public programmes." />
        <div>
          {newsItems.map((item, index) => (
            <Reveal key={item.title}>
              <article className="grid max-w-full gap-8 overflow-hidden border-b border-black/20 py-14 md:py-24 xl:grid-cols-12 xl:gap-10">
                <div className={`min-w-0 max-w-full xl:col-span-7 ${index % 2 ? "xl:col-start-6" : ""}`}>
                  <NewsVisual item={item} priority={index === 0} />
                </div>
                <div className={`min-w-0 max-w-full flex flex-col justify-between gap-12 xl:col-span-4 ${index % 2 ? "xl:col-start-1 xl:row-start-1" : "xl:col-start-9"}`}>
                  <div>
                    <div className="mb-8 flex justify-between text-[10px] uppercase tracking-[0.28em]">
                      <span>{item.year}</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="story-display break-words text-4xl leading-[0.98] md:text-5xl xl:text-6xl">
                      {item.title}
                    </h2>
                    <p className="mt-7 text-sm leading-relaxed text-black/65">
                      {item.dates}
                      <br />
                      {item.location}
                    </p>
                  </div>
                  <ArrowLink href={item.href} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

export function PressIndexPage() {
  return (
    <main className="bg-white px-5 pb-32 text-black md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <PageIntro index="02" title="PRESS" description="Conversations, reviews and published encounters with POSAK JODIAN's practice." />
        <div className="border-b border-black/20 pt-4 md:pt-10">
          {pressItems.map((item, index) => (
            <Reveal key={`${item.href}-${index}`}>
              <article className="grid gap-6 border-t border-black/20 py-10 md:grid-cols-[5rem_minmax(0,1fr)_12rem] md:gap-10 md:py-12">
                <span className="text-[10px] tracking-[0.28em] text-black/55">
                  {item.year}
                </span>
                <div className="min-w-0">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-black/55">
                    {item.type} · {item.source}
                  </p>
                  <h2 className="story-display break-words text-3xl leading-none md:text-5xl">
                    {item.title}
                  </h2>
                </div>
                <div className="flex items-end md:justify-end">
                  <ArrowLink href={item.href}>{item.type === "Video" ? "Watch video" : "Read article"}</ArrowLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

export function TextIndexPage() {
  return (
    <main className="bg-white px-5 pb-32 text-black md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <PageIntro
          index="04"
          title={<>TEXT/<br />MEDIA</>}
          description="Writing, publications and research surrounding POSAK JODIAN's practice."
        />
        <div className="flex justify-end border-b border-black/20 py-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/60">
            Select “Read online” to open the article ↗
          </p>
        </div>
        <div className="py-12 md:py-20">
          {texts.map((item) => {
            const content = (
              <article className={`group grid gap-6 border-t border-black/20 py-9 md:grid-cols-[5rem_minmax(0,1.3fr)_minmax(0,1fr)_10rem] md:items-start md:gap-8 md:py-12 lg:grid-cols-[5rem_minmax(0,1.3fr)_minmax(0,1fr)_12rem] lg:gap-10 ${item.href ? "cursor-pointer" : ""}`}>
                <span className="text-[10px] tracking-[0.28em] text-black/55">{item.year}</span>
                <div className="min-w-0">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-black/55">{item.source}</p>
                  <h2 className="story-display text-3xl leading-none transition-opacity group-hover:opacity-55 md:text-4xl lg:text-5xl">{item.title}</h2>
                  {item.href && <p className="mt-6 inline-block border-b border-black pb-1 text-[9px] uppercase tracking-[0.25em]">Read online ↗</p>}
                </div>
                <p className="text-sm leading-relaxed text-black/65">{item.excerpt}</p>
                {item.image ? (
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                      <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:opacity-70" sizes="12rem" />
                    </div>
                    {item.href && <p className="mt-3 text-right text-[9px] uppercase tracking-[0.22em]">Open article ↗</p>}
                  </div>
                ) : (
                  <span className="text-right text-xl">{item.href ? "↗" : "—"}</span>
                )}
              </article>
            );

            return (
              <Reveal key={item.title}>
                {item.href ? (
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </Link>
                ) : (
                  <div>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}

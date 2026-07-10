import Image from "next/image";
import Link from "next/link";
import { newsItems, texts } from "@/lib/works";
import Reveal from "@/components/Reveal";

function PageIntro({ index, title, description }) {
  return <header className="border-b border-black/25 pb-10 pt-16 md:pb-16 md:pt-24">
    <div className="mb-12 flex justify-between text-[10px] uppercase tracking-[0.3em] md:mb-20"><span>Index / {index}</span><span>Posak Jodian</span></div>
    <div className="grid gap-8 md:grid-cols-[1fr_22rem] md:items-end">
      <h1 className="story-display text-[18vw] leading-[0.72] md:text-[11vw]">{title}</h1>
      <p className="max-w-sm text-sm leading-relaxed text-black/65 md:text-base">{description}</p>
    </div>
  </header>;
}

function ArrowLink({ href, children = "View details" }) {
  const external = href?.startsWith("http");
  if (!href) return null;
  return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-4 border-b border-black pb-1 text-[10px] uppercase tracking-[0.28em] transition-opacity hover:opacity-50">{children}<span aria-hidden="true">↗</span></Link>;
}

export function NewsIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="01" title="NEWS" description="Current and recent exhibitions, screenings and public programmes." />
      <div>{newsItems.map((item, index) => <Reveal key={item.title}><article className="grid gap-8 border-b border-black/20 py-14 md:grid-cols-12 md:gap-10 md:py-24">
        <div className={`relative aspect-[16/10] overflow-hidden bg-black/5 md:col-span-7 ${index % 2 ? "md:col-start-6" : ""}`}><Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 62vw" /></div>
        <div className={`flex flex-col justify-between gap-12 md:col-span-4 ${index % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-9"}`}>
          <div><div className="mb-8 flex justify-between text-[10px] uppercase tracking-[0.28em]"><span>{item.year}</span><span>0{index + 1}</span></div><h2 className="story-display text-4xl leading-[0.98] md:text-6xl">{item.title}</h2><p className="mt-7 text-sm leading-relaxed text-black/65">{item.dates}<br />{item.location}</p></div>
          <ArrowLink href={item.href} />
        </div>
      </article></Reveal>)}</div>
    </div>
  </main>;
}

export function PressIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="02" title="PRESS" description="Conversations, reviews and published encounters with the artist’s practice." />
      <Reveal><article className="grid gap-10 border-b border-black/20 py-14 md:grid-cols-12 md:py-24">
        <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden border border-black/15 bg-[#f7f5ef] p-6 md:col-span-7 md:min-h-[620px] md:p-10">
          <div className="flex justify-between text-[10px] uppercase tracking-[0.32em] text-black/50">
            <span>C-LAB</span>
            <span>2026</span>
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-black/50">
              Taiwan Contemporary Culture Lab
            </p>
            <h3 className="story-display text-[18vw] leading-[0.72] text-black md:text-[8vw]">
              WE ARE
              <br />
              BECOMING
            </h3>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-black/60 md:text-base" lang="zh-Hant">
              我們正成為。關於祭儀、見證、翻譯與「我們」邊界的展覽書寫。
            </p>
          </div>
          <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.28em] text-black/45">
            <span>08 May — 16 August</span>
            <span>Press / Review</span>
          </div>
          <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full border border-black/10 md:h-[32rem] md:w-[32rem]" />
          <div className="pointer-events-none absolute bottom-24 left-10 h-px w-2/3 bg-black/20" />
        </div>
        <div className="flex flex-col justify-between gap-14 md:col-span-5">
          <div>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em]">Exhibition review · 15 June 2026</p>
            <h2 className="story-display text-4xl leading-none md:text-6xl">WE Are Becoming</h2>
            <div className="mt-8 space-y-5 text-sm leading-[1.85] text-black/70 md:text-[15px]" lang="zh-Hant">
              <p>Posak Jodian身為臺灣阿美族藝術家，進入馬來半島Temiar族人的祭儀場域時，帶有接近原住民族經驗的感知位置，卻也面對不同族群、語言與儀式秩序之間的距離。Sewang的重演顯示族人允許藝術家靠近儀式，也同時揭示儀式在攝影機與展覽觀看條件下被再次組織的狀態，藝術家因此仍站在見證與轉譯的位置上，無法完全成為儀式內部的一員。阿美族語中kami 與kita兩種「我們」的差異，正好標示這層邊界：kami不包含聽者，kita則包含聽者，「我們」在此並非自然成立的共同體，而是在接納、觀看、重演與翻譯之間不斷移動的位置。</p>
              <p>當祭儀開始時，展場燈光幾乎全暗，只剩地上一座象徵祭儀場所的小房子發出微光；民俗樂音響起，觀眾也被帶入一種以身體感受聲響與黑暗的狀態。這種經驗不依賴完整翻譯，也不是單純觀看異文化儀式的影像再現。它讓觀眾短暫處在被邀請與被隔開之間：我們聽見儀式，也被儀式包圍，卻無法完全佔有其意義。作品因此讓「我們」成為一個必須被小心辨認的邊界，難以被輕易收束為整齊的合聲。</p>
            </div>
          </div>
          <ArrowLink href="https://mag.clab.org.tw/clabo-article/we-are-becoming/">Read article</ArrowLink>
        </div>
      </article></Reveal>
      <Reveal><article className="grid gap-10 border-b border-black/20 py-14 md:grid-cols-12 md:py-24">
        <div className="relative aspect-[16/9] overflow-hidden bg-black/5 md:col-span-8"><Image src="/pro/misa/misa_02.webp" alt="Misafafahiyan Metamorphosis — Portrait of an Amis Performer" fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 68vw" /></div>
        <div className="flex flex-col justify-between gap-14 md:col-span-4"><div><p className="mb-8 text-[10px] uppercase tracking-[0.28em]">Feature · 2025</p><h2 className="story-display text-4xl leading-none md:text-6xl">Misafafahiyan Metamorphosis</h2><p className="mt-8 text-sm leading-relaxed text-black/65">Portrait of an Amis Performer<br />FAR–NEAR</p></div><ArrowLink href="https://far-near.media/stories/misafafahiyan-metamorphosis-portrait-of-an-amis-performer/">Read article</ArrowLink></div>
      </article></Reveal>
      <Reveal><article className="grid gap-10 border-b border-black/20 py-14 md:grid-cols-12 md:py-24">
        <div className="relative aspect-[16/9] overflow-hidden bg-black/5 md:col-span-8"><Image src="/pro/news/clabo.webp" alt="CLABO Experimental Waves" fill className="object-cover" sizes="(max-width: 768px) 100vw, 68vw" /></div>
        <div className="flex flex-col justify-between gap-14 md:col-span-4"><div><p className="mb-8 text-[10px] uppercase tracking-[0.28em]">Interview · 09 May 2023</p><h2 className="story-display text-4xl leading-none md:text-6xl">Radiw Misafafahiyan and Radiw No Orip</h2><p className="mt-8 text-sm leading-relaxed text-black/65">CLABO Experimental Waves<br />Taiwan Contemporary Culture Lab</p></div><ArrowLink href="https://mag.clab.org.tw/clabo-article/radiw-misafafahiyan-and-radiw-no-orip/">Read article</ArrowLink></div>
      </article></Reveal>
    </div>
  </main>;
}

export function TextIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="04" title={<>TEXT/<br />MEDIA</>} description="Writing, publications and research surrounding Posak Jodian’s practice." />
      <div className="flex justify-end border-b border-black/20 py-5"><p className="text-[10px] uppercase tracking-[0.25em] text-black/60">Select “Read online” to open the article ↗</p></div>
      <div className="py-12 md:py-20">{texts.map((item) => {
        const content = <article className={`group grid gap-6 border-t border-black/20 py-9 md:grid-cols-[5rem_1.3fr_1fr_12rem] md:items-start md:gap-10 md:py-12 ${item.href ? "cursor-pointer" : ""}`}><span className="text-[10px] tracking-[0.28em] text-black/55">{item.year}</span><div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-black/55">{item.source}</p><h2 className="story-display text-3xl leading-none transition-opacity group-hover:opacity-55 md:text-5xl">{item.title}</h2>{item.href && <p className="mt-6 inline-block border-b border-black pb-1 text-[9px] uppercase tracking-[0.25em]">Read online ↗</p>}</div><p className="text-sm leading-relaxed text-black/65">{item.excerpt}</p>{item.image ? <div><div className="relative aspect-[4/3] overflow-hidden bg-black/5"><Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:opacity-70" sizes="12rem" /></div>{item.href && <p className="mt-3 text-right text-[9px] uppercase tracking-[0.22em]">Open article ↗</p>}</div> : <span className="text-right text-xl">{item.href ? "↗" : "—"}</span>}</article>;
        return <Reveal key={item.title}>{item.href ? <Link href={item.href} target="_blank" rel="noopener noreferrer">{content}</Link> : <div>{content}</div>}</Reveal>;
      })}</div>
    </div>
  </main>;
}

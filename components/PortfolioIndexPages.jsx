import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    year: "2025",
    dates: "17 May — 21 September 2025",
    title: "Duration of 149 Sea Miles: The Struggle of Memory Against Forgetting",
    location: "National Human Rights Museum, Taiwan",
    image: "/pro/Durationof149SeaＭiles.jpg",
    href: "https://www.nhrm.gov.tw/w/nhrm/News_24111815365642501",
  },
  {
    year: "2024",
    dates: "11 May — 09 June 2024",
    title: "Bad Romance: Affective Body with its Misconceptions and Rumours",
    location: "Waley Art, Taipei, Taiwan",
    image: "/pro/Badromance.jpg",
    href: "https://www.facebook.com/events/419124790911287/",
  },
  {
    year: "2024",
    dates: "09 May — 07 July 2024",
    title: "Fever Dream",
    location: "UP Vargas Museum, Manila, Philippines",
    image: "/pro/FeverDream.jpg",
    href: "https://vargasmuseum.org/fever-dream/",
  },
];

const works = [
  { number: "01", year: "2018", title: "Lakec", medium: "Moving image · 20′04″", image: "/pro/Lakec_1.png", href: "/workpage/Lakec" },
  { number: "02", year: "2020", title: "Lakec: A Very Simple River", medium: "Moving image · 14′02″", image: "/pro/Simswiper_1.png", href: "/workpage/Simpleriver" },
  { number: "03", year: "2022", title: "Misafafahiyan Metamorphosis", medium: "Moving image and sound · 16′07″", image: "/pro/Misafafahiyan_14.jpeg", href: "/workpage/Misafafahiyan" },
];

const texts = [
  {
    year: "2022",
    title: "We — In Between Kita and Kami #Kami #Kita",
    source: "Nusantara Archive Project · Keyword Dictionary of Asian Contemporary Art",
    excerpt: "A collaboration unfolding cultural exchange through language, Indigenous experience and the shared Austronesian world.",
    href: "https://www.keywordsart.com/Astronesian-Atlas.php",
  },
  {
    year: "2021",
    title: "Lakec and Lakec: A Very Simple River",
    source: "No Man’s Land · Issue 50: The Portal & The Rearview Mirror",
    excerpt: "An account of field research moving between Taiwan and the Malay Peninsula, oral histories and lived experience.",
    image: "/pro/Cilifenam.jpeg",
    href: "https://www.heath.tw/nml-article/lakec-and-lakec-a-very-simple-river/",
  },
  {
    year: "2021",
    title: "Remapping — Paper Exhibition",
    source: "ACT 85 · Indigenous Fields, Contemporary Transformations",
    excerpt: "A publication considering Indigenous fields, contemporary transformation and the tensions of plurality.",
  },
  {
    year: "2021",
    title: "Remapping",
    source: "Pulima Link · Curated by Huang Ching-Ing",
    excerpt: "Artists remap nodes and paths, suturing fragmented stories into a new field of resonance.",
    image: "/pro/Remapping.jpeg",
    href: "https://www.pulima.com.tw/PulimaENG/exhibition_202101.aspx",
  },
  {
    year: "2019",
    title: "Palm Trees, Helicopters, the Boulder, and the Storyteller",
    source: "Nusantara Archive Project · No Man’s Land",
    excerpt: "A journey through community, memory and storytelling across the Malay Peninsula.",
    image: "/pro/PalmTrees.jpg",
    href: "https://www.heath.tw/nml-article/palm-trees-helicopters-the-boulder-and-the-storyteller/",
  },
];

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
  return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-4 border-b border-black pb-1 text-[10px] uppercase tracking-[0.28em]">{children}<span aria-hidden="true">↗</span></Link>;
}

export function NewsIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="01" title="NEWS" description="Current and recent exhibitions, screenings and public programmes." />
      <div>{newsItems.map((item, index) => <article key={item.title} className="grid gap-8 border-b border-black/20 py-14 md:grid-cols-12 md:gap-10 md:py-24">
        <div className={`relative aspect-[16/10] overflow-hidden bg-black/5 md:col-span-7 ${index % 2 ? "md:col-start-6" : ""}`}><Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 62vw" /></div>
        <div className={`flex flex-col justify-between gap-12 md:col-span-4 ${index % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-9"}`}>
          <div><div className="mb-8 flex justify-between text-[10px] uppercase tracking-[0.28em]"><span>{item.year}</span><span>0{index + 1}</span></div><h2 className="story-display text-4xl leading-[0.98] md:text-6xl">{item.title}</h2><p className="mt-7 text-sm leading-relaxed text-black/65">{item.dates}<br />{item.location}</p></div>
          <ArrowLink href={item.href} />
        </div>
      </article>)}</div>
    </div>
  </main>;
}

export function PressIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="02" title="PRESS" description="Conversations, reviews and published encounters with the artist’s practice." />
      <article className="grid gap-10 border-b border-black/20 py-14 md:grid-cols-12 md:py-24">
        <div className="relative aspect-[16/9] overflow-hidden bg-black/5 md:col-span-8"><Image src="/pro/clabo.JPG" alt="WE Are Becoming at Taiwan Contemporary Culture Lab" fill priority className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 68vw" /></div>
        <div className="flex flex-col justify-between gap-14 md:col-span-4"><div><p className="mb-8 text-[10px] uppercase tracking-[0.28em]">Exhibition review · 15 June 2026</p><h2 className="story-display text-4xl leading-none md:text-6xl">WE Are Becoming</h2><p className="mt-8 text-sm leading-relaxed text-black/65">The Boundaries of Chorus<br />CLABO Experimental Waves<br />Taiwan Contemporary Culture Lab</p></div><ArrowLink href="https://mag.clab.org.tw/clabo-article/we-are-becoming/" children="Read article" /></div>
      </article>
      <article className="grid gap-10 border-b border-black/20 py-14 md:grid-cols-12 md:py-24">
        <div className="relative aspect-[16/9] overflow-hidden bg-black/5 md:col-span-8"><Image src="/pro/clabo.JPG" alt="CLABO Experimental Waves" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 68vw" /></div>
        <div className="flex flex-col justify-between gap-14 md:col-span-4"><div><p className="mb-8 text-[10px] uppercase tracking-[0.28em]">Interview · 09 May 2023</p><h2 className="story-display text-4xl leading-none md:text-6xl">Radiw Misafafahiyan and Radiw No Orip</h2><p className="mt-8 text-sm leading-relaxed text-black/65">CLABO Experimental Waves<br />Taiwan Contemporary Culture Lab</p></div><ArrowLink href="https://mag.clab.org.tw/clabo-article/radiw-misafafahiyan-and-radiw-no-orip/" children="Read article" /></div>
      </article>
    </div>
  </main>;
}

function LegacyWorkIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="03" title="WORK" description="Selected moving-image works shaped by field research, memory and Indigenous experience." />
      <div className="py-14 md:py-24">{works.map((work, index) => <Link href={work.href} key={work.title} className="group grid gap-6 border-b border-black/20 pb-14 pt-8 md:grid-cols-[6rem_1fr] md:gap-10 md:pb-24 md:pt-12">
        <div className="flex justify-between text-[10px] tracking-[0.28em] md:block"><span>{work.number}</span><span className="md:mt-3 md:block">{work.year}</span></div>
        <div><div className={`relative overflow-hidden bg-black/5 ${index === 0 ? "aspect-[16/8]" : "aspect-[16/9]"}`}><Image src={work.image} alt={work.title} fill priority={index === 0} className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 88vw" /></div><div className="mt-6 flex items-start justify-between gap-5"><div><h2 className="story-display text-4xl leading-none md:text-7xl">{work.title}</h2><p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/55">{work.medium}</p></div><span className="text-2xl">↗</span></div></div>
      </Link>)}</div>
    </div>
  </main>;
}

export function TextIndexPage() {
  return <main className="bg-white px-5 pb-32 text-black md:px-10">
    <div className="mx-auto max-w-[1600px]">
      <PageIntro index="04" title={<>TEXT/<br />MEDIA</>} description="Writing, publications and research surrounding Posak Jodian’s practice." />
      <div className="flex justify-end border-b border-black/20 py-5"><p className="text-[10px] uppercase tracking-[0.25em] text-black/60">Select “Read online” to open the article ↗</p></div>
      <div className="py-12 md:py-20">{texts.map((item, index) => {
        const content = <article className={`group grid gap-6 border-t border-black/20 py-9 md:grid-cols-[5rem_1.3fr_1fr_12rem] md:items-start md:gap-10 md:py-12 ${item.href ? "cursor-pointer" : ""}`}><span className="text-[10px] tracking-[0.28em] text-black/55">{item.year}</span><div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-black/55">{item.source}</p><h2 className="story-display text-3xl leading-none transition-opacity group-hover:opacity-55 md:text-5xl">{item.title}</h2>{item.href && <p className="mt-6 inline-block border-b border-black pb-1 text-[9px] uppercase tracking-[0.25em]">Read online ↗</p>}</div><p className="text-sm leading-relaxed text-black/65">{item.excerpt}</p>{item.image ? <div><div className="relative aspect-[4/3] overflow-hidden bg-black/5"><Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:opacity-70" sizes="12rem" /></div>{item.href && <p className="mt-3 text-right text-[9px] uppercase tracking-[0.22em]">Open article ↗</p>}</div> : <span className="text-right text-xl">{item.href ? "↗" : "—"}</span>}</article>;
        return item.href ? <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">{content}</Link> : <div key={item.title}>{content}</div>;
      })}</div>
    </div>
  </main>;
}

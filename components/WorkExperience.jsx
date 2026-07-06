"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    slug: "Lakec", number: "01", year: "2018", title: "Lakec", medium: "Moving image", duration: "20′04″", hero: "/pro/Lakec_1.png", href: "/workpage/Lakec",
    gallery: ["/pro/Lakec_1.png", "/pro/Lakec_2.jpg", "/pro/Lakec_3.png", "/pro/Lakec_4.png", "/pro/Lakec/lakec_5.png", "/pro/Lakec/lakec_6.png", "/pro/Lakec/lakec_7.png", "/pro/Lakec/lakec_8.png"],
    statement: [
      "Lakec draws inspiration from Posak Jodian’s childhood memories of Amis people living by the water, and from her younger brother’s move from their hometown to work in Taipei. It traces the experience of Indigenous young people—and of earlier generations—who leave home and try to survive in the city.",
      "Posak connects Satefo, the Fata’an River near her hometown, with Xiubitang beside the Xindian River through images of flowing water. Interviews, oral histories, myths and songs shared by people in both places form a portrait of life between migration and the river journey home.",
    ],
  },
  {
    slug: "Simpleriver", number: "02", year: "2020", title: "Lakec: A Very Simple River", medium: "Moving image", duration: "14′02″", hero: "/pro/Simswiper_1.png", href: "/workpage/Simpleriver",
    gallery: ["/pro/Simswiper_1.png", "/pro/Simswiper_2.png", "/pro/Simswiper_3.png", "/pro/Simpleriver/river_4.png", "/pro/Simpleriver/river_5.png", "/pro/Simpleriver/river_6.png"],
    statement: [
      "Lakec: A Very Simple River is Posak Jodian’s first work about the Malay Peninsula. The camera becomes a form of writing, following the river into the heart of Indigenous communities in Malaysia.",
      "Focusing on the Jakun people of the Peninsula, the work draws from oral stories and lived experience. It weaves a narrative between what is documented and undocumented in collective memory—a landscape suspended between tangible and intangible geographies.",
    ],
  },
  {
    slug: "Misafafahiyan", number: "03", year: "2022", title: "Misafafahiyan Metamorphosis", medium: "Moving image and sound", duration: "16′07″", hero: "/pro/Misafafahiyan_14.jpeg", href: "/workpage/Misafafahiyan",
    gallery: ["/pro/Misafafahiyan_1.jpeg", "/pro/Misafafahiyan_14.jpeg", "/pro/Misafafahiyan_4.jpeg", "/pro/Misafafahiyan/Misafafahiyan_9.jpeg", "/pro/Misafafahiyan/Misafafahiyan_11.jpeg", "/pro/Misafafahiyan/Misafafahiyan_16.jpg", "/pro/Misafafahiyan/Misafafahiyan_18.jpeg"],
    audio: [{ title: "Sobay Mona Song I", src: "/mp3/SobayMonaSong1.m4a" }, { title: "Sobay Mona Song II", src: "/mp3/SobayMonaSong2.m4a" }, { title: "Goat Carrying Song", src: "/mp3/GoatCarryingSong.m4a" }],
    statement: [
      "Misafafahiyan Metamorphosis focuses on Hao Hao, a seventy-year-old Amis trans performer living in Fata’an. The work brings together a sixteen-minute video and photographic puzzles.",
      "Karaoke backing tracks, dialogue, dress-up, everyday sound and self-mockery interweave stories of family, returning home and nightlife. Hao Hao’s body carries histories of Indigenous labour, urban displacement and gender difference into a contemporary field of self-assembly and resistance.",
    ],
  },
];

export function WorkHeroPage() {
  return <main className="bg-white text-black"><section className="relative h-[calc(100svh-106px)] min-h-[620px] border-b border-black/20">
    <Swiper modules={[Navigation, Pagination, Keyboard, A11y, EffectFade]} navigation pagination={{ type: "fraction" }} keyboard={{ enabled: true }} loop effect="fade" fadeEffect={{ crossFade: true }} speed={700} className="work-hero-swiper h-full">
      {projects.map((project) => <SwiperSlide key={project.slug}><Link href={project.href} className="group relative block h-full overflow-hidden bg-black">
        <Image src={project.hero} alt={project.title} fill priority={project.number === "01"} className="object-cover opacity-90 transition duration-1000 group-hover:scale-[1.015] group-hover:opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
        <div className="absolute inset-x-0 bottom-0 z-10 grid gap-6 px-5 pb-14 text-white md:grid-cols-[7rem_1fr_auto] md:items-end md:px-10 md:pb-12"><div className="text-[10px] uppercase tracking-[0.3em]"><span>{project.number}</span><span className="mt-2 block">{project.year}</span></div><div><h1 className="story-display max-w-5xl text-5xl leading-[0.88] md:text-8xl lg:text-[7.5rem]">{project.title}</h1><p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/70">{project.medium} · {project.duration}</p></div><span className="hidden text-5xl font-light md:block">↗</span></div>
      </Link></SwiperSlide>)}
    </Swiper>
  </section>

  <section className="px-5 py-20 md:px-10 md:py-32">
    <div className="mx-auto max-w-[1700px]">
      <div className="mb-14 flex items-end justify-between border-b border-black/25 pb-5">
        <h2 className="story-display text-5xl md:text-7xl">All works</h2>
        <span className="text-[10px] uppercase tracking-[0.3em]">2018 — 2022</span>
      </div>
      <div className="grid gap-12 md:grid-cols-3 md:gap-5">
        {projects.map((project) => <Link href={project.href} key={project.slug} className="group border-b border-black/20 pb-7">
          <div className="relative aspect-[4/3] overflow-hidden bg-black/5"><Image src={project.hero} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 33vw" /></div>
          <div className="mt-5 flex items-start justify-between gap-5">
            <div><p className="mb-3 text-[9px] uppercase tracking-[0.28em] text-black/50">{project.number} · {project.year}</p><h3 className="story-display text-3xl leading-[0.95] md:text-4xl">{project.title}</h3><p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-black/50">{project.medium} · {project.duration}</p></div>
            <span className="text-2xl">↗</span>
          </div>
        </Link>)}
      </div>
    </div>
  </section></main>;
}

export function WorkDetailPage({ slug }) {
  const project = projects.find((item) => item.slug === slug) || projects[0];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <main className="bg-white px-5 pb-20 text-black md:px-10 md:pb-32"><div className="mx-auto max-w-[1700px]">
    <header className="border-b border-black/20 pb-10 pt-16 md:pb-16 md:pt-24"><div className="mb-12 flex justify-between text-[10px] uppercase tracking-[0.3em]"><span>{project.number} / Selected work</span><span>{project.year}</span></div><div className="grid gap-8 md:grid-cols-[1fr_18rem] md:items-end"><h1 className="story-display max-w-6xl text-[15vw] leading-[0.75] md:text-[9vw]">{project.title}</h1><div className="border-t border-black/25 pt-4 text-xs uppercase leading-7 tracking-[0.2em]"><p>Posak Jodian</p><p>{project.medium}</p><p>{project.duration}</p><p>Taiwan · {project.year}</p></div></div></header>
    <div className="relative mt-10 h-[72svh] min-h-[480px] overflow-hidden bg-black/5 md:mt-16"><Image src={project.hero} alt={project.title} fill priority className="object-cover" sizes="100vw" /></div>
    <section className="grid gap-12 border-b border-black/20 py-20 md:grid-cols-[1fr_2fr] md:py-32"><div><p className="text-[10px] uppercase tracking-[0.3em]">About the work</p><p className="mt-5 text-sm leading-relaxed text-black/55">{project.year}<br />{project.medium}<br />{project.duration}</p></div><div className="space-y-8 text-xl leading-relaxed md:text-3xl md:leading-[1.55]">{project.statement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="py-16 md:py-28"><div className="mb-12 flex justify-between border-b border-black/20 pb-5 text-[10px] uppercase tracking-[0.3em]"><span>Stills / Documentation</span><span>{String(project.gallery.length).padStart(2, "0")} images</span></div><div className="space-y-8 md:space-y-20">{project.gallery.slice(1).map((src, imageIndex) => <figure key={src} className={imageIndex % 3 === 1 ? "md:ml-auto md:w-[68%]" : imageIndex % 3 === 2 ? "md:w-[58%]" : "w-full"}><div className="relative aspect-[16/10] overflow-hidden bg-black/5"><Image src={src} alt={`${project.title}, still ${imageIndex + 2}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 75vw" /></div><figcaption className="mt-3 text-[9px] uppercase tracking-[0.25em] text-black/45">{project.title} · Still {String(imageIndex + 2).padStart(2, "0")}</figcaption></figure>)}</div></section>
    {project.audio && <section className="border-t border-black/20 py-16 md:py-24"><h2 className="story-display mb-12 text-5xl md:text-7xl">Sound</h2><div>{project.audio.map((track, trackIndex) => <div key={track.src} className="grid gap-4 border-t border-black/20 py-6 md:grid-cols-[5rem_1fr_2fr] md:items-center"><span className="text-[10px] tracking-[0.3em]">0{trackIndex + 1}</span><p className="text-lg">{track.title}</p><audio controls preload="none" className="h-10 w-full" src={track.src}>Your browser does not support audio playback.</audio></div>)}</div></section>}
    <nav className="grid border-y border-black/20 md:grid-cols-2"><Link href={previous.href} className="group border-b border-black/20 py-10 md:border-b-0 md:border-r md:pr-10"><span className="text-[10px] uppercase tracking-[0.3em] text-black/50">← Previous work</span><p className="story-display mt-4 text-3xl transition-opacity group-hover:opacity-50 md:text-5xl">{previous.title}</p></Link><Link href={next.href} className="group py-10 text-right md:pl-10"><span className="text-[10px] uppercase tracking-[0.3em] text-black/50">Next work →</span><p className="story-display mt-4 text-3xl transition-opacity group-hover:opacity-50 md:text-5xl">{next.title}</p></Link></nav>
  </div></main>;
}

export function LakecDetailPage() { return <WorkDetailPage slug="Lakec" />; }
export function SimpleriverDetailPage() { return <WorkDetailPage slug="Simpleriver" />; }
export function MisafafahiyanDetailPage() { return <WorkDetailPage slug="Misafafahiyan" />; }

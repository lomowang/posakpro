"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const works = [
  { title: "Lakec", year: "2018", image: "/pro/Lakec_1.png", href: "/workpage/Lakec" },
  { title: "Lakec: A Very Simple River", year: "2020", image: "/pro/Simswiper_1.png", href: "/workpage/Simpleriver" },
  { title: "Misafafahiyan Metamorphosis", year: "2022", image: "/pro/Misafafahiyan_14.jpeg", href: "/workpage/Misafafahiyan" },
];

const exhibitions = [
  ["2008", "Self-portrait showed at Hualien Creative and Cultural Industries Park."],
  ["2011", "Story of Bai published on Taiwan Indigenous TV (TITV)."],
  ["2012", "Naruwan—Life Finds a Way—Taiwan Indigenous Artists Exhibition."],
  ["2018", "Lakec showed at Open Contemporary Art Center’s (OCAC) “PETAMU Project”."],
  ["2018", "Lakec showed at A+ WORKS of ART “A+ Online Festival of Video Art”."],
  ["2019", "Bitter Sweet participated in Open Contemporary Art Center’s project, showed at Taiwan Museum of Fine Arts."],
  ["2019", "Asian Art Biennial: The Strangers from beyond the Mountain and the Sea."],
  ["2019", "Palm Trees, Helicopters, the Boulder, and the Storyteller included in Nusantara Archive, published on the No Man’s Land online platform."],
  ["2020", "Lakec: A Very Simple River participated in Nusantara Archive and showed at Taipei Fine Arts Museum “The Secret South”."],
  ["2021", "Lakec project published in ACT 85: Indigenous Fields, Contemporary Transformations—Indigeneity in Arts and Confusions in Plurality, in the “Remapping—Paper Exhibition”."],
  ["2021", "Lakec project published on Pulima Link “Remapping”."],
  ["2021", "Lakec project received an Excellent Work Award in the Pulima Art Award."],
  ["2021", "Lakec: A Very Simple River showed at Hong-gah Museum “The Oceans and the Interpreters—Interpreters’ Screening II: The Mysterious Island”."],
  ["2022", "Lakec: A Very Simple River showed at Taitung Art Museum “Another Continent”."],
  ["2022", "Misafafahiyan Metamorphosis showed at Solid Art “Ocean and Interpreters”."],
  ["2023", "Misafafahiyan Metamorphosis showed at Britto Arts Trust “Ocean and Interpreters” in Dhaka, Bangladesh."],
  ["2023", "Misafafahiyan Metamorphosis received a Jury Award in the Pulima Art Award."],
  ["2023", "Misafafahiyan Metamorphosis showed at Jogja Fotografis Festival “Frame” in Yogyakarta, Indonesia."],
  ["2023", "Misafafahiyan Metamorphosis showed at Hualien Creative and Cultural Industries Park."],
  ["2023", "Pulima Art Festival “Amorous Mountains, Erotic Seas: Queer, Indigene, and the Hidden History”."],
  ["2026", "WE Are Becoming, presenting In the House Where Light Is Almost Invisible, at Taiwan Contemporary Culture Lab (C-LAB), Taipei, Taiwan, 8 May–16 August 2026."],
  ["2026", "Horizon Ablaze: Culture and Contemporary Art of Heat, at Taichung Museum of Art, Taichung, Taiwan, 15 May–30 August 2026."],
];

function Biography() {
  return <section className="bg-white px-5 pb-24 pt-10 text-black md:px-10 md:pb-40 md:pt-16">
    <div className="mx-auto max-w-[1500px]">
      <div className="grid gap-12 border-t border-black/25 pt-7 md:grid-cols-[1fr_2fr] md:gap-20">
        <div><p className="text-[10px] uppercase tracking-[0.35em]">About the artist</p><h2 className="story-display mt-5 text-6xl leading-none md:text-8xl">Posak<br />Jodian</h2></div>
        <div className="space-y-8 text-lg leading-[1.65] md:text-2xl md:leading-[1.55]">
          <p>Posak Jodian, an Amis who lives in Taipei. Posak is the given name and Jodian is the father’s name. Posak has a background in ethnolinguistics and Communication studies. She mainly uses video as a method and her own ethnic identity as a starting point, to observe the traditional field formulation of tribes and the urban life of the aborigines who left their hometown through long-term field research.</p>
          <p>Meanwhile, she participates in the scenes of various mass movements, and the various actions of young people in between the gaps of cities. Trying to use the ethnic and cultural actions as a fulcrum to open the boundaries between identity and recognition.</p>
          <div className="border-l border-[#d34c2f] pl-6 text-base leading-relaxed md:pl-9 md:text-xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em]">Selected presentations</p>
            <p><em>Lakec</em> (2018), OCAC “PETAMU Project”; <em>Lakec: A Very Simple River</em> (2020), Taitung Art Museum “Another Continent”; the <em>Lakec</em> project in “Remapping—Paper Exhibition” (2021); and <em>Misafafahiyan Metamorphosis</em> at Solid Art “Ocean and Interpreters” (2022).</p>
            <p className="mt-5">She is also a member of OCAC, PMS, Halfway Cafe and Taiwan Haibizi Tent Theatre.</p>
          </div>
        </div>
      </div>

      <div className="mt-32 border-t border-black/25 pt-7 md:mt-48">
        <div className="mb-16 flex items-baseline justify-between"><h2 className="story-display text-6xl md:text-9xl">Exhibitions</h2><span className="text-[10px] uppercase tracking-[0.3em]">2008—2026</span></div>
        <ol>{exhibitions.map(([year, event], index) => <li key={`${year}-${index}`} className="grid gap-3 border-t border-black/15 py-5 md:grid-cols-[8rem_1fr] md:gap-10 md:py-7"><span className="text-xs tracking-[0.28em] opacity-60">{year}</span><p className="text-base leading-snug md:text-xl">{event}</p></li>)}</ol>
      </div>
    </div>
  </section>;
}

function StoryFrame({ progress }) {
  const portraitY = useTransform(progress, [0, 1], ["0vh", "-8vh"]);
  const portraitScale = useTransform(progress, [0, 1], [1, .88]);
  const titleY = useTransform(progress, [0, 1], ["0vh", "-6vh"]);

  return <div className="relative h-screen overflow-hidden bg-white text-black">
    <div className="story-grain" aria-hidden="true" />
    <div className="absolute left-5 top-5 z-40 text-[9px] uppercase tracking-[0.22em] md:left-9 md:top-8 md:text-[11px] md:tracking-[0.28em]">Posak Jodian · Artist Portfolio</div>
    <div className="absolute right-5 top-5 z-40 hidden text-[11px] uppercase tracking-[0.28em] md:right-9 md:top-8 md:block">Taipei / Taiwan</div>
    <motion.div style={{ y: portraitY, scale: portraitScale }} className="absolute inset-x-[20%] top-[7%] h-[72%] overflow-hidden md:inset-x-[35%] md:h-[78%]"><Image src="/pro/Posak.png" alt="Posak Jodian" fill priority className="object-cover grayscale" sizes="(max-width: 768px) 60vw, 30vw" /></motion.div>
    <motion.div style={{ y: titleY }} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center"><p className="mb-4 text-xs uppercase tracking-[0.45em]">Artist · Filmmaker · Field Researcher</p><h1 className="story-display text-[18vw] leading-[0.76] md:text-[12vw]">POSAK<br />JODIAN</h1><p className="mt-8 text-[10px] uppercase tracking-[0.36em]">Scroll to enter</p></motion.div>
    <div className="absolute bottom-5 left-5 z-40 text-[10px] tracking-[0.25em] md:bottom-8 md:left-9">© 2026</div>
    <motion.div className="absolute bottom-0 left-0 z-50 h-1 w-full bg-[#d34c2f]" style={{ scaleX: progress, transformOrigin: "left" }} />
  </div>;
}

export default function Hero() {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  return <>
    <section ref={storyRef} className="relative h-[180vh] bg-white"><div className="sticky top-0 h-screen"><StoryFrame progress={scrollYProgress} /></div></section>
    <Biography />
    <section id="works" className="bg-white px-5 py-24 text-black md:px-10 md:py-36"><div className="mx-auto max-w-[1600px]"><div className="mb-20 flex items-end justify-between border-b border-black/25 pb-6"><h2 className="story-display text-6xl md:text-9xl">WORKS</h2><p className="hidden max-w-xs text-right text-sm leading-relaxed text-black/60 md:block">Moving image, field research and stories carried across land, water and generations.</p></div><div className="space-y-20 md:space-y-32">{works.map((work, index) => <Link href={work.href} key={work.title} className="group grid gap-5 border-b border-black/15 pb-16 md:grid-cols-[5rem_1fr] md:gap-10"><span className="text-xs tracking-[0.35em] text-black/50">0{index + 1}</span><div><div className="relative aspect-[16/9] overflow-hidden bg-black/5"><Image src={work.image} alt={work.title} fill className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-80" sizes="(max-width: 768px) 100vw, 85vw" /></div><div className="mt-5 flex items-start justify-between gap-4"><h3 className="story-display text-3xl leading-none md:text-6xl">{work.title}</h3><span className="text-xs tracking-[0.25em] text-black/55">{work.year} ↗</span></div></div></Link>)}</div><div className="mt-24 flex justify-center"><Link href="/Work" className="rounded-full border border-black/40 px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-black hover:text-white">View all works</Link></div></div></section>
  </>;
}

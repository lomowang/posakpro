import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { projects, exhibitions, portrait } from "@/lib/works";
import Reveal from "@/components/Reveal";

const works = projects.map((project) => ({
  title: project.title,
  year: project.year,
  image: project.hero,
  href: project.href,
}));

const introEase = [0.22, 1, 0.36, 1];

function TitleLine({ children, delay }) {
  const reduceMotion = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduceMotion ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: introEase }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Biography() {
  return <section id="site-content" className="scroll-mt-8 bg-white px-5 pb-24 pt-10 text-black md:px-10 md:pb-40 md:pt-16">
    <div className="mx-auto max-w-[1500px]">
      <Reveal>
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
      </Reveal>

      <div className="mt-32 border-t border-black/25 pt-7 md:mt-48">
        <Reveal>
          <div className="mb-16 flex items-baseline justify-between"><h2 className="story-display text-6xl md:text-9xl">Exhibitions</h2><span className="text-[10px] uppercase tracking-[0.3em]">2008—2026</span></div>
        </Reveal>
        <ol>{exhibitions.map(([year, event], index) => <li key={`${year}-${index}`} className="grid gap-3 border-t border-black/15 py-5 md:grid-cols-[8rem_1fr] md:gap-10 md:py-7"><span className="text-xs tracking-[0.28em] opacity-60">{year}</span><p className="text-base leading-snug md:text-xl">{event}</p></li>)}</ol>
      </div>
    </div>
  </section>;
}

function StoryFrame({ progress }) {
  const reduceMotion = useReducedMotion();
  const portraitY = useTransform(progress, [0, 1], ["0vh", "-8vh"]);
  const portraitScale = useTransform(progress, [0, 1], [1, .88]);
  const titleY = useTransform(progress, [0, 1], ["0vh", "-6vh"]);
  const enterSite = () => {
    document.getElementById("view-all-works")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return <div className="relative h-[100svh] overflow-hidden bg-white text-black">
    <div className="story-grain" aria-hidden="true" />
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="absolute left-5 top-5 z-40 text-[9px] uppercase tracking-[0.22em] md:left-9 md:top-8 md:text-[11px] md:tracking-[0.28em]"
    >
      Posak Jodian · Artist Portfolio
    </motion.div>
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="absolute right-5 top-5 z-40 hidden text-[11px] uppercase tracking-[0.28em] md:right-9 md:top-8 md:block"
    >
      Taipei / Taiwan
    </motion.div>
    <motion.div
      style={{ x: "-50%", y: portraitY, scale: portraitScale }}
      className="absolute left-1/2 top-[13svh] aspect-[4/5] w-[clamp(17rem,72vw,25rem)] overflow-hidden bg-black/5 md:top-[9svh] md:w-[clamp(20rem,38vw,32rem)] lg:top-[7svh] lg:w-[clamp(22rem,31vw,36rem)]"
    >
      <motion.div
        className="relative h-full w-full"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: introEase }}
      >
        <Image
          src={portrait}
          alt="Posak Jodian"
          fill
          priority
          className="object-cover object-center grayscale"
          sizes="(max-width: 768px) 72vw, (max-width: 1024px) 38vw, 31vw"
        />
      </motion.div>
    </motion.div>
    <motion.div style={{ y: titleY }} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: introEase }}
        className="mb-4 text-xs uppercase tracking-[0.45em]"
      >
        Artist · Filmmaker · Field Researcher
      </motion.p>
      <h1 className="story-display text-[18vw] leading-[0.76] md:text-[12vw]">
        <TitleLine delay={0.35}>POSAK</TitleLine>
        <TitleLine delay={0.5}>JODIAN</TitleLine>
      </h1>
      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        className="mt-8 text-[10px] uppercase tracking-[0.36em]"
      >
        Scroll to enter
      </motion.p>
    </motion.div>
    <div className="absolute bottom-5 left-5 z-40 text-[10px] tracking-[0.25em] md:bottom-8 md:left-9">© 2026</div>
    <button
      type="button"
      onClick={enterSite}
      className="absolute bottom-5 right-5 z-50 border border-black/35 bg-white/70 px-4 py-3 text-[10px] uppercase tracking-[0.28em] text-black backdrop-blur-sm transition hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/30 md:bottom-8 md:right-9 md:px-5"
      aria-label="Skip the intro and enter the site content"
    >
      Enter site ↓
    </button>
    <motion.div className="absolute bottom-0 left-0 z-50 h-1 w-full bg-[#d34c2f]" style={{ scaleX: progress, transformOrigin: "left" }} />
  </div>;
}

export default function Hero() {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  return <>
    <section ref={storyRef} className="relative h-[180vh] bg-white"><div className="sticky top-0 h-[100svh]"><StoryFrame progress={scrollYProgress} /></div></section>
    <Biography />
    <section id="works" className="scroll-mt-8 bg-white px-5 py-24 text-black md:px-10 md:py-36"><div className="mx-auto max-w-[1600px]">
      <Reveal>
        <div className="mb-20 flex items-end justify-between border-b border-black/25 pb-6"><h2 className="story-display text-6xl md:text-9xl">WORKS</h2><p className="hidden max-w-xs text-right text-sm leading-relaxed text-black/60 md:block">Moving image, field research and stories carried across land, water and generations.</p></div>
      </Reveal>
      <div className="space-y-20 md:space-y-32">{works.map((work, index) => <Reveal key={work.title} delay={0.05}>
        <Link href={work.href} className="group grid gap-5 border-b border-black/15 pb-16 md:grid-cols-[5rem_1fr] md:gap-10"><span className="text-xs tracking-[0.35em] text-black/50">0{index + 1}</span><div><div className="relative aspect-[16/9] overflow-hidden bg-black/5"><Image src={work.image} alt={work.title} fill className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-80" sizes="(max-width: 768px) 100vw, 85vw" /></div><div className="mt-5 flex items-start justify-between gap-4"><h3 className="story-display text-3xl leading-none md:text-6xl">{work.title}</h3><span className="text-xs tracking-[0.25em] text-black/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">{work.year} ↗</span></div></div></Link>
      </Reveal>)}</div>
      <div id="view-all-works" className="mt-24 flex justify-center"><Link href="/Work" className="rounded-full border border-black/40 px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-black hover:text-white">View all works</Link></div>
    </div></section>
  </>;
}

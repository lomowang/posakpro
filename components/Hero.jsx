import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { projects, cvExhibitions, portrait } from "@/lib/works";
import Reveal from "@/components/Reveal";

const works = projects.map((project) => ({
  title: project.title,
  year: project.year,
  image: project.hero,
  imagePosition: project.heroPosition,
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
  return (
    <section id="site-content" className="scroll-mt-8 bg-white px-5 pb-24 pt-10 text-black md:px-10 md:pb-40 md:pt-16">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="border-t border-black/25 pt-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em]">About the artist</p>
              <h2 className="story-display mt-5 max-w-full whitespace-nowrap text-[11vw] leading-none sm:text-6xl md:text-[8vw] lg:text-[8.5vw]">
                POSAK JODIAN
              </h2>
            </div>
            <div className="mt-10 max-w-5xl space-y-7 text-base leading-[1.75] md:mt-12 md:text-lg md:leading-[1.7] lg:text-[1.35rem] lg:leading-[1.62]">
              <p>
                Posak Jodian is an Pangcah/Amis artist based in Taipei whose practice spans moving image, documentary, and installation. Her work explores the intersections of Indigenous culture, identity, and belonging, often engaging with activism and critical histories. Through various forms of lens-based media, she investigates the entangled relationships between colonization, power, and collective memory.
              </p>
              <p>
                Her projects include <em>Misafafahiyan Metamorphosis</em> (2022), featured in Ocean and Interpreters at Solid Art; <em>There is a white deer in the mountain</em> part of Another Continent at National Human Rights Museum, Green Island Biennial 2025 “Duration of 149 Sea Miles: The Struggle of Memory against Forgetting”, and <em>Misafafahiyan - Teman dari Jauh</em> participate in Biennale Jogja 18 “KAWRUH: Land of Rooted Practices”.
              </p>
              <p>
                Beyond her individual practice, Posak is an active member of OCAC (Open Contemporary Art Center) and P.M.S., through which she continues to expand collaborative frameworks and dialogues between Indigenous knowledge, contemporary art, and social movements.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-32 border-t border-black/25 pt-7 md:mt-48">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 border-b border-black/15 pb-5 sm:flex-row sm:items-baseline sm:justify-between md:mb-16">
              <h2 className="story-display text-[14vw] leading-none sm:text-6xl md:text-8xl lg:text-9xl">EXHIBITIONS</h2>
              <span className="text-[10px] uppercase tracking-[0.3em]">2026—2018</span>
            </div>
          </Reveal>
          <ol>
            {cvExhibitions.map(([year, _zhEvent, enEvent], index) => (
              <li key={`${year}-${index}`} className="grid gap-3 border-t border-black/15 py-5 md:grid-cols-[8rem_1fr] md:gap-10 md:py-7">
                <span className="text-xs tracking-[0.28em] opacity-60">{year}</span>
                <p className="text-base leading-snug md:text-xl">{enEvent}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StoryFrame({ progress }) {
  const reduceMotion = useReducedMotion();
  const portraitY = useTransform(progress, [0, 1], ["0vh", "-8vh"]);
  const portraitScale = useTransform(progress, [0, 1], [1, 0.88]);
  const titleY = useTransform(progress, [0, 1], ["0vh", "-6vh"]);
  const enterSite = () => {
    document.getElementById("view-all-works")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="relative h-[100svh] overflow-hidden bg-white text-black">
      <div className="story-grain" aria-hidden="true" />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute left-5 top-5 z-40 text-[9px] uppercase tracking-[0.22em] md:left-9 md:top-8 md:text-[11px] md:tracking-[0.28em]"
      >
        POSAK JODIAN · Artist Portfolio
      </motion.div>
      <motion.div
        style={{ x: "-50%", y: portraitY, scale: portraitScale }}
        className="absolute left-1/2 top-[16svh] aspect-[4/5] w-[min(68vw,21rem)] overflow-hidden bg-black/5 sm:top-[13svh] sm:w-[min(58vw,24rem)] md:top-[10svh] md:w-[min(42vw,29rem)] lg:top-[7svh] lg:w-[min(31vw,36rem)]"
      >
        <motion.div
          className="relative h-full w-full"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: introEase }}
        >
          <Image
            src={portrait}
            alt="POSAK JODIAN"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="(max-width: 768px) 72vw, (max-width: 1024px) 38vw, 31vw"
          />
        </motion.div>
      </motion.div>
      <motion.div style={{ y: titleY }} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="story-display max-w-[96vw] whitespace-nowrap text-[11.5vw] leading-[0.82] sm:text-[10vw] md:text-[7.6vw] lg:text-[8vw]">
          <TitleLine delay={0.35}>POSAK JODIAN</TitleLine>
        </h1>
      </motion.div>
      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        className="absolute bottom-[8.5svh] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.36em] text-black md:bottom-[7svh]"
      >
        Scroll to enter
      </motion.p>
      <div className="absolute bottom-5 left-5 z-40 text-[10px] tracking-[0.25em]">© 2026</div>
      <button
        type="button"
        onClick={enterSite}
        className="absolute bottom-5 right-5 z-50 border border-black/35 bg-white/70 px-3 py-3 text-[9px] uppercase tracking-[0.22em] text-black backdrop-blur-sm transition hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/30 md:bottom-8 md:right-9 md:px-5 md:text-[10px] md:tracking-[0.28em]"
        aria-label="Skip the intro and enter the site content"
      >
        Enter site ↓
      </button>
    </div>
  );
}

export default function Hero() {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });

  return (
    <>
      <section ref={storyRef} className="relative h-[112svh] bg-white">
        <div className="sticky top-0 h-[100svh]">
          <StoryFrame progress={scrollYProgress} />
        </div>
      </section>
      <Biography />
      <section id="works" className="scroll-mt-8 bg-white px-5 py-24 text-black md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16 flex items-end justify-between border-b border-black/25 pb-6 md:mb-20">
              <h2 className="story-display text-[18vw] leading-none sm:text-6xl md:text-8xl lg:text-9xl">WORKS</h2>
            </div>
          </Reveal>
          <div className="space-y-20 md:space-y-32">
            {works.map((work, index) => (
              <Reveal key={work.title} delay={0.05}>
                <Link href={work.href} className="group grid gap-5 border-b border-black/15 pb-16 md:grid-cols-[5rem_1fr] md:gap-10">
                  <span className="text-xs tracking-[0.35em] text-black/50">0{index + 1}</span>
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-black/5">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        quality={68}
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-80"
                        style={{ objectPosition: work.imagePosition || "center" }}
                        sizes="(max-width: 768px) 100vw, 85vw"
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <h3 className="story-display min-w-0 text-3xl leading-none sm:text-4xl md:text-5xl lg:text-6xl">{work.title}</h3>
                      <span className="shrink-0 text-xs tracking-[0.25em] text-black/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">{work.year} ↗</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div id="view-all-works" className="mt-24 flex justify-center">
            <Link href="/Work" className="rounded-full border border-black/40 px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-black hover:text-white">
              View all works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

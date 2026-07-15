import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "@/lib/works";
import Reveal from "@/components/Reveal";

function WorkCardTitle({ project }) {
  if (project.slug === "UnlitHouse") {
    return (
      <>
        <span className="block sm:whitespace-nowrap">Within the</span>
        <span className="block sm:whitespace-nowrap">Unlit House</span>
      </>
    );
  }

  if (project.slug === "FriendFromAfar") {
    return (
      <>
        <span className="block sm:whitespace-nowrap">Misafafahiyan -</span>
        <span className="block sm:whitespace-nowrap">Teman dari Jauh</span>
      </>
    );
  }

  if (project.slug === "WhiteDeer") {
    return (
      <>
        <span className="block sm:whitespace-nowrap">There is a white deer</span>
        <span className="block sm:whitespace-nowrap">in the mountain</span>
      </>
    );
  }

  if (project.slug === "Simpleriver") {
    return (
      <>
        <span className="block sm:whitespace-nowrap">Lakec: A Very</span>
        <span className="block sm:whitespace-nowrap">Simple River</span>
      </>
    );
  }

  if (project.slug === "Misafafahiyan") {
    return (
      <>
        <span className="block sm:whitespace-nowrap">Misafafahiyan</span>
        <span className="block sm:whitespace-nowrap">Metamorphosis</span>
      </>
    );
  }

  return project.title;
}

function ProjectMetaLine({ project }) {
  return (
    <>
      {project.medium} · {project.duration}
    </>
  );
}

function shouldShowImageCredit(project, src) {
  if (!project.imageCredit) return false;
  if (!project.creditImages) return true;
  return project.creditImages.includes(src);
}

export function WorkHeroPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative h-[calc(100svh-88px)] min-h-[520px] border-b border-black/20 md:h-[calc(100svh-106px)] md:min-h-[620px]">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y, EffectFade]}
          navigation
          pagination={{ type: "fraction" }}
          keyboard={{ enabled: true }}
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={700}
          className="work-hero-swiper h-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <Link href={project.href} className="group relative block h-full overflow-hidden bg-black">
                <Image
                  src={project.hero}
                  alt={project.title}
                  fill
                  priority={project.number === "01"}
                  className="object-cover opacity-90 transition duration-1000 group-hover:scale-[1.015] group-hover:opacity-75"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 z-10 grid gap-6 px-5 pb-20 text-white md:grid-cols-[7rem_minmax(0,1fr)_auto] md:items-end md:px-10 md:pb-24">
                  <div className="text-[10px] uppercase tracking-[0.3em]">
                    <span>{project.number}</span>
                    <span className="mt-2 block">{project.year}</span>
                  </div>
                  <div className="min-w-0">
                    <h1 className="story-display max-w-none whitespace-nowrap text-[10.5vw] leading-[0.9] sm:text-5xl md:text-6xl lg:text-[5.8rem] xl:text-[6.7rem]">
                      {project.title}
                    </h1>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/70">
                      <ProjectMetaLine project={project} />
                    </p>
                  </div>
                  <span className="hidden text-5xl font-light md:block">↗</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <div className="mb-14 flex items-end justify-between border-b border-black/25 pb-5">
              <h2 className="story-display text-[15vw] leading-none sm:text-5xl md:text-7xl">All works</h2>
              <span className="text-[10px] uppercase tracking-[0.3em]">2018 — 2026</span>
            </div>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-5">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <Link href={project.href} className="group block border-b border-black/20 pb-7">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <Image
                      src={project.hero}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div className="min-w-0 flex-1">
                      <p className="mb-3 text-[9px] uppercase tracking-[0.28em] text-black/50">
                        {project.number} · {project.year}
                      </p>
                      <h3
                        className={`story-display break-words leading-[0.95] ${
                          project.title.length > 18
                            ? "text-[1.9rem] sm:text-[2.35rem] md:text-[2.25vw] lg:text-[2.45rem] xl:text-[2.85rem]"
                            : "text-3xl md:text-4xl"
                        }`}
                      >
                        <WorkCardTitle project={project} />
                      </h3>
                      <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-black/50">
                        <ProjectMetaLine project={project} />
                      </p>
                    </div>
                    <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function WorkDetailPage({ slug }) {
  const project = projects.find((item) => item.slug === slug) || projects[0];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="bg-white px-5 pb-20 text-black md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1700px]">
        <header className="border-b border-black/20 pb-10 pt-14 md:pb-16 md:pt-24">
          <div className="mb-10 flex justify-between text-[10px] uppercase tracking-[0.3em] md:mb-12">
            <span>{project.number} / Selected work</span>
            <span>{project.year}</span>
          </div>
          <div className="grid gap-8 md:grid-cols-[minmax(0,calc(100%-24rem))_18rem] md:items-end lg:grid-cols-[minmax(0,calc(100%-28rem))_22rem]">
            <h1 className="story-display max-w-full whitespace-nowrap text-[8vw] leading-[0.9] md:text-[3.2vw] md:leading-[0.88] lg:text-[3.55vw] xl:text-[4rem]">
              {project.title}
            </h1>
            <div className="relative z-10 border-t border-black/25 bg-white pt-4 text-xs uppercase leading-7 tracking-[0.2em]">
              <p>POSAK JODIAN</p>
              <p>
                <ProjectMetaLine project={project} />
              </p>
              <p>Taiwan · {project.year}</p>
            </div>
          </div>
        </header>

        <div className="relative mt-8 h-[48svh] min-h-[280px] max-h-[760px] overflow-hidden bg-black/5 md:mt-16 md:h-[62svh] md:min-h-[420px] lg:h-[72svh] lg:min-h-[480px]">
          <Image src={project.hero} alt={project.title} fill priority className="object-cover" sizes="100vw" />
        </div>
        {shouldShowImageCredit(project, project.hero) ? (
          <div className="mt-3 text-[9px] uppercase leading-5 tracking-[0.18em] text-black/45">
            {project.imageCredit.map((line) => (
              <span className="mr-4 inline-block" key={line}>
                {line}
              </span>
            ))}
          </div>
        ) : null}

        <section className="grid gap-10 border-b border-black/20 py-16 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12 md:py-24 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16 lg:py-28">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em]">About the work</p>
            <p className="mt-5 text-sm leading-relaxed text-black/55">
              {project.year}
              <br />
              <ProjectMetaLine project={project} />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-4xl space-y-7 text-base leading-[1.78] md:text-xl md:leading-[1.65] lg:text-[1.7rem] lg:leading-[1.58]">
              {project.statement.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="py-14 md:py-28">
          <Reveal>
            <div className="mb-10 flex justify-between border-b border-black/20 pb-5 text-[10px] uppercase tracking-[0.3em] md:mb-12">
              <span>Images / Documentation</span>
              <span>{String(project.gallery.length).padStart(2, "0")} images</span>
            </div>
          </Reveal>
          <div className="space-y-8 md:space-y-20">
            {project.gallery.filter((src) => src !== project.hero).map((src, imageIndex) => (
              <Reveal key={src}>
                <figure
                  className={
                    imageIndex % 3 === 1 ? "md:ml-auto md:w-[68%]" : imageIndex % 3 === 2 ? "md:w-[58%]" : "w-full"
                  }
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                    <Image
                      src={src}
                      alt={`${project.title} documentation ${imageIndex + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 75vw"
                    />
                  </div>
                  {shouldShowImageCredit(project, src) ? (
                    <figcaption className="mt-3 text-[9px] uppercase leading-5 tracking-[0.18em] text-black/45">
                      {project.imageCredit.map((line) => (
                        <span className="mr-4 inline-block" key={line}>
                          {line}
                        </span>
                      ))}
                    </figcaption>
                  ) : null}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <nav className="grid border-y border-black/20 md:grid-cols-2">
          <Link href={previous.href} className="group border-b border-black/20 py-10 md:border-b-0 md:border-r md:pr-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">← Previous work</span>
            <p className="story-display mt-4 break-words text-3xl transition-opacity group-hover:opacity-50 md:text-4xl lg:text-5xl">
              {previous.title}
            </p>
          </Link>
          <Link href={next.href} className="group py-10 text-left md:pl-10 md:text-right">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">Next work →</span>
            <p className="story-display mt-4 break-words text-3xl transition-opacity group-hover:opacity-50 md:text-4xl lg:text-5xl">
              {next.title}
            </p>
          </Link>
        </nav>
      </div>
    </main>
  );
}

import { awards, cvExhibitions } from "@/lib/works";
import Reveal from "@/components/Reveal";

function CvList({ items, language = "both" }) {
  return (
    <ul>
      {items.map(([year, zh, en], index) => (
        <li
          key={`${year}-${index}-${en}`}
          className="grid gap-4 border-b border-black/15 py-5 md:grid-cols-[5rem_1fr] md:gap-12 md:py-7"
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-black/45">
            {year}
          </span>
          <div className="space-y-2">
            {language !== "en" && (
              <p className="text-sm leading-relaxed text-black/80 md:text-lg md:leading-snug" lang="zh-Hant">
                {zh}
              </p>
            )}
            <p className={language === "en" ? "text-sm leading-relaxed text-black/80 md:text-lg md:leading-snug" : "text-xs leading-relaxed text-black/50 md:text-sm md:leading-relaxed"}>
              {en}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const Cvexperience = () => {
  return (
    <section className="py-16 md:py-28">
      <Reveal>
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/25 pb-6 md:mb-12">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/55">
              Curriculum vitae
            </p>
            <h2 className="story-display text-[14vw] leading-none sm:text-6xl md:text-8xl lg:text-9xl">
              AWARDS
            </h2>
          </div>
        </div>
      </Reveal>
      <CvList items={awards} language="en" />

      <Reveal>
        <div className="mb-10 mt-20 flex items-end justify-between gap-6 border-b border-black/25 pb-6 md:mb-12 md:mt-28">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/55">
              Experience
            </p>
            <h2 className="story-display text-[14vw] leading-none sm:text-6xl md:text-8xl lg:text-9xl">
              EXHIBITIONS
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-black/55 md:block">
            2026—2018
          </span>
        </div>
      </Reveal>
      <CvList items={cvExhibitions} language="en" />
    </section>
  );
};

export default Cvexperience;

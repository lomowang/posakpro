import { exhibitions } from "@/lib/works";
import Reveal from "@/components/Reveal";

const Cvexperience = () => {
  return (
    <section className="py-16 md:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-black/25 pb-6 md:mb-16">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/55">
              Curriculum vitae
            </p>
            <h2 className="story-display text-6xl leading-none md:text-9xl">
              Exhibitions
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-black/55 md:block">
            2008—2026
          </span>
        </div>
      </Reveal>
      <ul>
        {exhibitions.map(([year, event], index) => (
          <li
            key={`${year}-${index}`}
            className="grid gap-4 border-b border-black/15 py-5 md:grid-cols-[5rem_1fr] md:gap-12 md:py-7"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-black/45">
              {year}
            </span>
            <p className="text-sm leading-relaxed text-black/75 md:text-lg md:leading-snug">
              {event}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cvexperience;

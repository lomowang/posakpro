import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d0d0d] px-5 pb-8 pt-20 text-white md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1fr_auto] md:items-end md:pb-20">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-white/50">
              Get in touch
            </p>
            <a
              href="mailto:posak1987@gmail.com"
              className="story-display break-all text-3xl leading-none transition-opacity duration-300 hover:opacity-50 sm:text-5xl md:text-7xl"
            >
              posak1987@gmail.com
            </a>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em]">
            <Link
              href="https://www.facebook.com/posakjodian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-b border-white/40 pb-1 transition-colors hover:border-white"
            >
              <FaFacebook size={14} aria-hidden="true" />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/posakjodian/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-b border-white/40 pb-1 transition-colors hover:border-white"
            >
              <FaInstagram size={14} aria-hidden="true" />
              Instagram
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/45">
          <span>© {new Date().getFullYear()} Posak Jodian</span>
          <span className="hidden md:inline">Taipei / Taiwan</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="transition-colors hover:text-white"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

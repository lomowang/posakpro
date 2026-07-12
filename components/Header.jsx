import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 px-5 py-4 text-sm backdrop-blur-md transition-colors duration-300 md:px-10 ${
        scrolled ? "bg-white/95" : "bg-white/80"
      }`}
    >
      <p className="story-display text-center text-[26px] md:text-left">
        <Link href="/" className="transition-opacity hover:opacity-60">
          POSAK JODIAN
        </Link>
      </p>
      {/* 桌面版導覽列 */}
      <Nav
        containerStyles="hidden xl:flex items-center justify-center"
        listStyles="flex gap-2 text-sm leading-8"
      />
      {/* 行動版導覽列 */}
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

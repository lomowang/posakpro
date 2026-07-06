"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 px-5 py-4 text-sm backdrop-blur-md md:px-10 ${
        scrolled ? "bg-white/95 transition-all duration-300" : "bg-white/80"
      }`}
    >
      <h1 className="story-display text-center text-[26px] md:text-left">
        <Link href="/">Posak Jodian</Link>
      </h1>
      {/* 桌面版導覽列 */}
      <Nav
        containerStyles="hidden xl:flex items-center justify-center"
        listStyles="flex gap-2 text-sm leading-8 text-gray-400"
      />
      {/* 行動版導覽列 */}
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

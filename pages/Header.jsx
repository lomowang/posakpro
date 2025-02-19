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
      className={`top-0 z-50 max-w-[1980px] py-2 px-4 m-2 xl:py-10 text-sm text-center md:justify-between lg:px-8 ${
        scrolled
          ? "bg-white shadow-md transition-all duration-300"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-center font-bold text-[24px]">
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

// 首頁

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` top-0 z-50 max-w-[1980px] py-2 px-4 m-2 xl:py-10 text-sm text-center items-center md:justify-between lg:px-8 `}
    >
      <h1 className="text-center  font-medium">
        <Link href="/">Posak Jodian</Link>
      </h1>
      <Nav
        containerStyles="xl:flex items-center hidden justify-center "
        listStyles="flex gap-2 text-sm top-20 leading-8 text-gray-400 "
      />
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="xl:hidden"
      >
        <MobileNav />
      </motion.div>
    </header>
  );
};

export default Header;

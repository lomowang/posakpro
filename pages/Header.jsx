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
      className={`sticky top-0 z-50 max-w-[1980px] py-2 px-4 m-2 xl:py-10 text-sm text-center items-center md:justify-between lg:px-8 ${
        scrolled ? "bg-gray-100 shadow-xl " : ""
      }`}
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h1 className="text-center font-bold">
          <Link href="/">Posak Jodian</Link>
        </h1>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="xl:flex justify-center w-full mt-2"
      >
        <Nav
          containerStyles="xl:flex items-center hidden"
          listStyles="flex gap-2 text-sm"
        />
      </motion.div>

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

"use client";
import React from "react";
import Link from "next/link";

const work = [
  {
    Image: "/pro/Lakec_1.png",
    name: "Lakec",
    link: "/workpage/Lakec", // 每個作品的鏈接
  },
  {
    Image: "/pro/Misafafahiyan_14.jpeg",
    name: "Misafafahiyan",
    link: "/workpage/Misafafahiyan", // 每個作品的鏈接
  },
  {
    Image: "/pro/Simswiper_1.png",
    name: "Simswiper",
    link: "/workpage/Simpleriver", // 每個作品的鏈接
  },
];

const Work = () => {
  return (
    <section className="flex flex-wrap justify-center">
      {work.map((slide, index) => (
        <div key={index} className="w-1/6 p-2">
          <Link href={slide.link}>
            {/* 使用 <Link> 包裹 img 和 p */}
            <div>
              <img
                src={slide.Image}
                alt={slide.name}
                className="w-full h-auto object-cover bg-center"
              />
              <p className="text-center mt-2 font-light text-xs text-slate-400">
                {slide.name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Work;

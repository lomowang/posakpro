"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "NEWS",
    url: "/News",
  },
  {
    id: 2,
    title: "PRESS",
    url: "/Press",
  },
  {
    id: 3,
    title: "WORK",
    url: "/Work",
    subLinks: [
      { id: 1, title: "2018 Lakec（渡河）", url: "/workpage/Lakec" },
      {
        id: 2,
        title: "2022 Misafafahiyan Metamorphosis（Misafafahiyan 蛻變）",
        url: "/workpage/Misafafahiyan",
      },
      {
        id: 3,
        title: "2020 Lakec: A Very Simple River（渡河：太簡單的河）",
        url: "/workpage/Simpleriver",
      },
    ],
  },
  {
    id: 4,
    title: "TEXT/MEDIA",
    url: "/Text",
  },
  {
    id: 5,
    title: "ABOUT",
    url: "/About",
  },
];

const workSubLinks = [
  { id: 1, year: "2018", title: "Lakec", url: "/workpage/Lakec" },
  {
    id: 2,
    year: "2020",
    title: "Lakec: A Very Simple River",
    url: "/workpage/Simpleriver",
  },
  {
    id: 3,
    year: "2022",
    title: "Misafafahiyan Metamorphosis",
    url: "/workpage/Misafafahiyan",
  },
];

const Nav = ({ containerStyles, listStyles }) => {
  const [activeLink, setActiveLink] = useState(null); // 追蹤當前使用的頁面

  // 處理點擊事件
  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className={`${containerStyles} p-2 pb-0`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => (
          <li key={link.id} className="relative group px-4 xl:py-2">
            <Link
              href={link.url}
              className={`${
                activeLink === `link-${link.id}`
                  ? "text-black"
                  : "hover:text-slate-900"
              }`} // 當前正在使用此頁面 就是黑色
              onClick={() => handleClick(`link-${link.id}`)} // 點擊時設定使用狀態
            >
              {link.title}
            </Link>
            {link.subLinks && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <ul className="hidden min-w-[350px] border border-black/15 bg-white px-3 py-2 text-left text-black shadow-[0_18px_50px_rgba(0,0,0,0.08)] group-hover:block group-focus-within:block">
                  {workSubLinks.map((subLink) => (
                    <li
                      key={subLink.id}
                      className="border-b border-black/15 text-left last:border-b-0"
                    >
                      <Link
                        href={subLink.url}
                        className={`grid grid-cols-[3.5rem_1fr] items-baseline gap-3 px-1 py-2 text-sm font-bold leading-5 transition-opacity duration-300 ${
                          activeLink === `sublink-${subLink.id}`
                            ? "opacity-100"
                            : "hover:opacity-50"
                        }`}
                        onClick={() => handleClick(`sublink-${subLink.id}`)}
                      >
                        <span className="text-[9px] font-normal tracking-[0.18em] text-black/50">
                          {subLink.year}
                        </span>
                        <span>
                          {subLink.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

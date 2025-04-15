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
              <div className="absolute left-0 top-full pt-2 z-50">
                <ul className="hidden group-hover:block bg-white text-left text-slate-900 shadow-lg rounded w-auto max-w-[500px] min-w-[350px] min-h-[300px] px-2 py-2">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.id} className="text-left">
                      <Link
                        href={subLink.url}
                        className={`block px-4 py-2 font-bold border-b border-transparent transition-all duration-300 ${
                          activeLink === `sublink-${subLink.id}`
                            ? "text-black border-gray-300"
                            : "hover:text-slate-900 hover:border-gray-600"
                        }`}
                        onClick={() => handleClick(`sublink-${subLink.id}`)}
                      >
                        {subLink.title}
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

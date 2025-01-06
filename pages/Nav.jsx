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
      {
        id: 1,
        title: "Misafafahiyan",
        url: "/workpage/Misafafahiyan",
      },
      {
        id: 2,
        title: "Lakec:A Very Simple River",
        url: "/workpage/Simpleriver",
      },
      { id: 3, title: "Lakec", url: "/workpage/Lakec" },
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
  {
    id: 7,
    title: "CONTACT",
    url: "/Contact",
  },
];

const Nav = ({ containerStyles, listStyles }) => {
  const [activeLink, setActiveLink] = useState(null); // 追蹤當前使用的頁面

  // 處理點擊事件
  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className={`${containerStyles} p-0`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => (
          <li key={link.id} className="relative group">
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
                <ul className="hidden group-hover:block bg-white text-slate-900 shadow-lg rounded">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.id}>
                      <Link
                        href={subLink.url}
                        className={`block px-4 py-2 font-bold ${
                          activeLink === `sublink-${subLink.id}`
                            ? "text-black"
                            : "hover:text-slate-900"
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

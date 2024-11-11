"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "News",
    url: "/UpcomingEvents",
  },
  {
    id: 2,
    title: "Press",
    url: "/Press",
  },
  {
    id: 3,
    title: "Work",
    url: "/Works",
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
    title: "Text/Media",
    url: "/Text",
  },
  {
    id: 5,
    title: "About",
    url: "/Mainexperience",
  },
  {
    id: 7,
    title: "Contact",
    url: "/Contact",
  },
];

const Nav = ({ containerStyles, listStyles }) => {
  const [activeLink, setActiveLink] = useState(null); // 追踪当前激活的链接

  // 处理点击事件
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
              }`} // 如果当前链接激活，则显示黑色
              onClick={() => handleClick(`link-${link.id}`)} // 点击时设置为激活状态
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
                        }`} // 子链接也能根据激活状态改变颜色
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

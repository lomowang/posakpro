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
      { id: 1, title: "Misafafahiyan", url: "/Works/ProjectA" },
      { id: 2, title: "Lakec:A Very Simple River", url: "/Works/ProjectB" },
      { id: 3, title: "Lakec ", url: "/Works/ProjectB" },
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
  return (
    <nav className={`${containerStyles} p-0`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => (
          <li key={link.id} className="relative group">
            <Link href={link.url} className="hover:underline">
              {link.title}
            </Link>
            {link.subLinks && (
              <div className="absolute left-0 top-full pt-2">
                <ul className="hidden group-hover:block bg-white shadow-lg rounded">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.id}>
                      <Link
                        href={subLink.url}
                        className="block  px-4 py-2 hover:bg-gray-100 font-bold"
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

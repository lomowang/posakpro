"use client";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "近期活動",
    text: "Upcoming Events",
    url: "/components/UpcomingEvents",
  },
  {
    id: 2,
    title: "導演介紹",
    text: "Profile",
    url: "/components/Profile",
  },
  {
    id: 3,
    title: "作品介紹",
    text: "Works",
    url: "/Works",
  },
  {
    id: 4,
    title: "田野錄音",
    text: "Field Recordings",
    url: "/FieldRecordings",
  },
  {
    id: 5,
    title: "文章評論",
    text: "Press",
    url: "/Press",
  },
  {
    id: 6,
    title: "聯絡我們",
    text: "Contact",
    url: "/Contact",
  },
];

const Nav = ({ containerStyles, listStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => {
          return (
            <li>
              <Link key={link.id} href={link.url}>
                {link.title}
                <p>{link.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

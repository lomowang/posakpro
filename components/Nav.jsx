import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/lib/works";

const links = [
  { id: 1, title: "NEWS", url: "/News" },
  { id: 2, title: "PRESS", url: "/Press" },
  { id: 3, title: "WORK", url: "/Work", subLinks: true },
  { id: 4, title: "TEXT/MEDIA", url: "/Text" },
  { id: 5, title: "ABOUT", url: "/About" },
];

const Nav = ({ containerStyles, listStyles }) => {
  const router = useRouter();

  const isActive = (link) =>
    router.pathname === link.url ||
    (link.subLinks && router.pathname.startsWith("/workpage"));

  return (
    <nav className={`${containerStyles} p-2 pb-0`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => (
          <li key={link.id} className="group relative px-4 xl:py-2">
            <Link
              href={link.url}
              className={`relative tracking-[0.08em] transition-colors duration-300 ${
                isActive(link) ? "text-black" : "text-black/40 hover:text-black"
              }`}
            >
              {link.title}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-black transition-all duration-300 ${
                  isActive(link) ? "w-full" : "w-0 group-hover:w-full"
                }`}
                aria-hidden="true"
              />
            </Link>
            {link.subLinks && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <ul className="hidden min-w-[350px] border border-black/15 bg-white px-3 py-2 text-left text-black shadow-[0_18px_50px_rgba(0,0,0,0.08)] group-hover:block group-focus-within:block">
                  {projects.map((project) => (
                    <li
                      key={project.slug}
                      className="border-b border-black/15 text-left last:border-b-0"
                    >
                      <Link
                        href={project.href}
                        className={`grid grid-cols-[3.5rem_1fr] items-baseline gap-3 px-1 py-2 text-sm font-bold leading-5 transition-opacity duration-300 ${
                          router.asPath === project.href
                            ? "opacity-100"
                            : "opacity-80 hover:opacity-40"
                        }`}
                      >
                        <span className="text-[9px] font-normal tracking-[0.18em] text-black/50">
                          {project.year}
                        </span>
                        <span>{project.title}</span>
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

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const links = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-700 bg-slate-900/95 shadow-2xl shadow-slate-950/40" : "bg-slate-900/80"} backdrop-blur-md`}
    >
      <div className="section-shell flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-2xl font-black tracking-[0.25em] bg-linear-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent"
        >
          ZZ
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-80}
              activeClass="text-sky-400 after:w-full"
              spy
              className="relative cursor-pointer text-sm font-medium capitalize text-slate-300 transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-sky-400 after:transition-all hover:text-sky-400"
            >
              {link}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 p-2 text-slate-100 transition hover:border-sky-400 hover:text-sky-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <HiOutlineX size={20} />
          ) : (
            <HiOutlineMenuAlt3 size={20} />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-slate-800 bg-slate-900/95 px-4 transition-all duration-300 md:hidden ${mobileOpen ? "max-h-96 py-3" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col gap-3 pb-2">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-80}
              spy
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium capitalize text-slate-300 transition hover:bg-slate-800 hover:text-sky-400"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

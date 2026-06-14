import {
  FaGithub,
  FaKaggle,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";
import { FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/zohaib-zulfiqar-data-analyst",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/923170674509",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://www.tiktok.com/@zb_analyzt?_r=1&_t=ZS-97CKXGddKU8",
    icon: FaTiktok,
    label: "TikTok",
  },
  {
    href: "https://www.instagram.com/zb_choudhary?igsh=MWlxMjNqNnVoYnJkdw==",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://x.com/zbanalyzt", icon: FaXTwitter, label: "Twitter" },
  { href: "https://github.com/Zb-analyzt", icon: FaGithub, label: "GitHub" },
  { href: "https://www.kaggle.com/zbanalyzt", icon: FaKaggle, label: "Kaggle" },
  {
    href: "mailto:zohaib.dataanalyst@gmail.com",
    icon: FaEnvelope,
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70 px-4 py-10 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="section-shell flex flex-col items-center gap-5">
        <p>
          Designed &amp; Built by{" "}
          <span className="bg-linear-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text font-semibold text-transparent">
            Zohaib Zulfiqar
          </span>
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        <p>© 2026 All rights reserved</p>
      </div>
      <Link
        to="home"
        smooth
        duration={500}
        className="fixed bottom-5 right-5 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-sky-400 via-indigo-400 to-emerald-400 text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.22)] transition hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </Link>
    </footer>
  );
}

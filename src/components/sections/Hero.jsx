import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaGithub, FaKaggle, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const socials = [
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

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const { downloadResume } = await import("../../utils/downloadResume.js");
      await downloadResume();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),_transparent_38%)]" />
      <div className="section-shell section-padding relative flex min-h-[100vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-lg text-slate-400 sm:text-xl">Hi, I&apos;m</p>
          <h1 className="gradient-text text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Zohaib Zulfiqar
          </h1>
          <div className="mt-6 text-2xl font-semibold text-slate-100 sm:text-3xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                1800,
                "Python Developer",
                1800,
                "Power BI Expert",
                1800,
                "SQL Specialist",
                1800,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Transforming raw data into actionable business insights across
            supply chain, e-commerce, HR, public health and product analyst
            workflows.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.24)]"
            >
              View My Work
            </Link>
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-slate-800 hover:text-sky-400 disabled:cursor-wait disabled:opacity-70"
            >
              {isDownloading ? "Preparing CV..." : "Download CV"}
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 hover:border-sky-400 hover:text-sky-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

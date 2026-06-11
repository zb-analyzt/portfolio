import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`glass-card relative h-full rounded-3xl p-6 transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(56,189,248,0.12)] ${project.flagship ? "border-sky-400/40" : ""}`}
    >
      {project.flagship ? (
        <div className="absolute right-5 top-5 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.18)]">
          Flagship
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>
      <h3
        className={`mt-5 text-2xl font-semibold ${project.flagship ? "bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent" : "text-slate-100"}`}
      >
        {project.title}
      </h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Problem
          </p>
          <p className="mt-1">{project.problem}</p>
        </div>
        {open ? (
          <>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
                Approach
              </p>
              <p className="mt-1">{project.approach}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Outcome
              </p>
              <p className="mt-1">{project.outcome}</p>
            </div>
          </>
        ) : null}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-700 pt-5">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
        >
          {open ? "Hide Details" : "View Details"}
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
          aria-label={`${project.title} GitHub link`}
        >
          <FaGithub />
        </a>
      </div>
    </motion.article>
  );
}

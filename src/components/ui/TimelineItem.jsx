import { motion } from "framer-motion";

export default function TimelineItem({
  company,
  role,
  type,
  duration,
  current,
  bullets,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.45)]">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
      </span>
      <div className="glass-card rounded-3xl p-6 shadow-[0_0_40px_rgba(15,23,42,0.25)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-sky-400">
              {company}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-100">
              {role}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{type}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {current ? (
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-400">
                Current
              </span>
            ) : null}
            <span className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
              {duration}
            </span>
          </div>
        </div>
        <ul className="mt-5 space-y-3 text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

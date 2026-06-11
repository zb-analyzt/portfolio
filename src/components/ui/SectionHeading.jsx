import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

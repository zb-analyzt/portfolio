import { motion } from "framer-motion";

export default function StatCard({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl p-5 text-center transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
    >
      <div className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent">
        {value}
      </div>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}

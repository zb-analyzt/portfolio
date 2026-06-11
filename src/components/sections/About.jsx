import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import StatCard from "../ui/StatCard.jsx";

const stats = [
  { value: "7+", label: "Projects Completed" },
  { value: "2", label: "Internships" },
  { value: "100K+", label: "Rows Analyzed" },
  { value: "3.80", label: "CGPA" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="I build analytical systems and visual stories that help businesses understand what is happening, why it is happening, and what to do next."
        />
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 opacity-80 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-800/80 p-3 shadow-[0_0_50px_rgba(56,189,248,0.18)]">
              <div className="flex h-[420px] items-center justify-center rounded-[1.6rem] border border-slate-700 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(15,23,42,0.96)_55%)]">
                <div className="text-center">
                  <img
                    src="/aboutImage.jpeg"
                    alt="Zohaib Zulfiqar"
                    className="mx-auto h-52 w-52 rounded-full border-4 border-sky-400/40 object-cover shadow-[0_0_45px_rgba(56,189,248,0.25)]"
                  />
                  <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">
                    Zohaib Zulfiqar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-lg leading-8 text-slate-300">
              Zohaib Zulfiqar is a data analyst and frontend developer who
              combines business thinking with technical execution. He works
              across Python, SQL, Power BI, Excel and React.js to turn complex,
              messy datasets into clear decisions, polished dashboards and
              practical digital experiences. His background includes analytics
              internships, frontend delivery work and hands-on portfolio
              projects spanning supply chain, e-commerce, HR and health data.
            </p>
            <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-400">
              Frontend + Analytics = Rare Combo
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

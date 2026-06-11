import { motion } from "framer-motion";
import { FaChartBar, FaDatabase, FaRobot, FaCode } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading.jsx";
import SkillBadge from "../ui/SkillBadge.jsx";
import { skillGroups } from "../../data/skills.js";

const iconMap = {
  analytics: FaChartBar,
  database: FaDatabase,
  machine: FaRobot,
  web: FaCode,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="A focused toolkit for analytics, BI, machine learning and modern frontend delivery."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="mb-5 flex items-center gap-3 text-sky-400">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/10">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {group.title}
                  </h3>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.04 } },
                  }}
                  className="flex flex-wrap gap-3"
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillBadge>{skill}</SkillBadge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import { projects } from "../../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A portfolio of analytics dashboards, machine learning experiments and business-facing reporting solutions."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

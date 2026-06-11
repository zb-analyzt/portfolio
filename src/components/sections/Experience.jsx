import SectionHeading from "../ui/SectionHeading.jsx";
import TimelineItem from "../ui/TimelineItem.jsx";
import { experience } from "../../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="A blend of analytics and frontend work that strengthens both delivery quality and business understanding."
        />
        <div className="relative mx-auto w-full max-w-5xl border-l border-slate-700">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-indigo-400 to-emerald-400 opacity-70" />
          <div className="space-y-8 pl-6 sm:pl-8">
            {experience.map((item) => (
              <TimelineItem key={item.company} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

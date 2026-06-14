import SectionHeading from "../ui/SectionHeading.jsx";
import SkillBadge from "../ui/SkillBadge.jsx";
import { education } from "../../data/education.js";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="BS in Artificial Intelligence from KFUEIT with a strong foundation in data analytics, algorithms, and real-world problem-solving."
        />
        <div className="mx-auto w-full max-w-5xl glass-card rounded-3xl p-8 sm:p-10">
          <div className="mb-6 flex flex-col gap-3 border-b border-slate-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                {education.university}
              </h3>
              <p className="mt-1 text-slate-300">{education.degree}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-400">
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5">
                {education.duration}
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5">
                {education.location}
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              {education.highlights && (
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                    Key Highlights
                  </p>
                  <ul className="space-y-3 text-sm leading-6 text-slate-300">
                    {education.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 text-emerald-400">●</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {education.achievements && (
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    Achievements
                  </p>
                  <ul className="space-y-3 text-sm leading-6 text-slate-300">
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 text-indigo-400">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Relevant Courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <SkillBadge key={course}>{course}</SkillBadge>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Languages
                </p>
                <div className="space-y-2 text-sm text-slate-300">
                  {education.languages.map((language) => (
                    <p
                      key={language.name}
                      className="flex justify-between gap-4 border-b border-slate-800 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="font-medium text-slate-100">
                        {language.name}
                      </span>
                      <span className="text-slate-400">{language.level}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

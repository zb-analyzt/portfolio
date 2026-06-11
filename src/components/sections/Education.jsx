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
        <div className="mx-auto w-full max-w-5xl glass-card rounded-3xl p-8">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <div className="flex flex-col justify-start">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                CGPA
              </p>
              <div className="mt-2 bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-5xl font-black text-transparent">
                {education.cgpa}
              </div>
              <p className="text-sm text-slate-400">/ 4.00</p>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">
                  {education.university}
                </h3>
                <p className="mt-1 text-slate-300">{education.degree}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-400">
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">
                    {education.duration}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">
                    {education.location}
                  </span>
                </div>
              </div>

              {education.highlights && (
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                    Key Highlights
                  </p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {education.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-sky-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Relevant Courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <SkillBadge key={course}>{course}</SkillBadge>
                  ))}
                </div>
              </div>

              {education.achievements && (
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    Achievements
                  </p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-indigo-400">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Languages
                </p>
                <div className="space-y-1 text-sm text-slate-300">
                  {education.languages.map((language) => (
                    <p key={language.name}>
                      <span className="font-medium text-slate-100">
                        {language.name}
                      </span>{" "}
                      — {language.level}
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

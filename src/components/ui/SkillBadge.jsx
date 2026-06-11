export default function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 text-sm text-slate-200 transition duration-300 hover:border-sky-400 hover:text-sky-400 hover:shadow-[0_0_22px_rgba(56,189,248,0.18)]">
      {children}
    </span>
  );
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0F172A",
        secondaryBg: "#1E293B",
        cardBg: "#1E293B",
        accentPrimary: "#38BDF8",
        accentSecondary: "#818CF8",
        successGreen: "#34D399",
        textPrimary: "#F1F5F9",
        textMuted: "#94A3B8",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.2), 0 20px 60px rgba(2, 132, 199, 0.18)",
      },
      backgroundImage: {
        analyticsGrid:
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(56, 189, 248, 0.35)" },
          "50%": { boxShadow: "0 0 0 14px rgba(56, 189, 248, 0)" },
        },
      },
    },
  },
  plugins: [],
};

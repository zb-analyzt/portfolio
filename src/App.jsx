import { lazy, Suspense } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";

const Hero = lazy(() => import("./components/sections/Hero.jsx"));
const About = lazy(() => import("./components/sections/About.jsx"));
const Skills = lazy(() => import("./components/sections/Skills.jsx"));
const Experience = lazy(() => import("./components/sections/Experience.jsx"));
const Projects = lazy(() => import("./components/sections/Projects.jsx"));
const Education = lazy(() => import("./components/sections/Education.jsx"));
const Contact = lazy(() => import("./components/sections/Contact.jsx"));

const sectionFallback = (
  <div className="mx-auto flex min-h-[40vh] w-full max-w-7xl items-center justify-center px-6 py-20 text-slate-400">
    Loading section...
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-900 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.08),_transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <Navbar />
      <main className="relative">
        <Element name="home">
          <Suspense fallback={sectionFallback}>
            <Hero />
          </Suspense>
        </Element>
        <Element name="about">
          <Suspense fallback={sectionFallback}>
            <About />
          </Suspense>
        </Element>
        <Element name="skills">
          <Suspense fallback={sectionFallback}>
            <Skills />
          </Suspense>
        </Element>
        <Element name="experience">
          <Suspense fallback={sectionFallback}>
            <Experience />
          </Suspense>
        </Element>
        <Element name="projects">
          <Suspense fallback={sectionFallback}>
            <Projects />
          </Suspense>
        </Element>
        <Element name="education">
          <Suspense fallback={sectionFallback}>
            <Education />
          </Suspense>
        </Element>
        <Element name="contact">
          <Suspense fallback={sectionFallback}>
            <Contact />
          </Suspense>
        </Element>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

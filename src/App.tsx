import { useEffect, Suspense } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useCursor } from "./hooks/useCursor";

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="font-display font-black text-2xl text-white tracking-tight">
          <img
            src="/icons/about-photo.jpg"
            alt="Logo"
            className="w-10 h-10 mr-2 rounded-full"
          />
        </span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioLayout() {
  useCursor();

  // Re-attach cursor expand on any new interactive elements after mount
  useEffect(() => {
    const isFingerPointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFingerPointer) return;
    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cur || !ring) return;

    const expand = () => {
      cur.classList.add("big");
      ring.classList.add("big");
    };
    const collapse = () => {
      cur.classList.remove("big");
      ring.classList.remove("big");
    };

    document.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", collapse);
    });
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" className="cursor hidden md:block" />
      <div id="cursor-ring" className="cursor-ring hidden md:block" />

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PortfolioLayout />
    </Suspense>
  );
}

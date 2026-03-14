import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PricingPage from "./pages/PricingPage";

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

function PortfolioLayout() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Suspense>
  );
}

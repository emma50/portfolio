import { stats } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Decorative SVG */}
      <svg
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.055] pointer-events-none hidden lg:block"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="400"
          height="400"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect
          x="50"
          y="50"
          width="300"
          height="300"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect
          x="100"
          y="100"
          width="200"
          height="200"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect
          x="150"
          y="150"
          width="100"
          height="100"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1="0"
          x2="400"
          y2="400"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="400"
          y1="0"
          x2="0"
          y2="400"
          stroke="white"
          strokeWidth="0.5"
        />
        <circle cx="200" cy="200" r="199" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="149" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="99" stroke="white" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-8 w-full">
        {/* Eyebrow */}
        <div className="animate-fade-up inline-flex items-center gap-2.5 bg-accent/8 border border-accent/20 px-3.5 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
          <span className="text-accent text-xs font-semibold tracking-[0.1em] uppercase font-display">
            Open to remote roles &amp; contracts
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-1 font-display font-black leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          Senior
          <br />
          <span className="text-accent">Frontend</span>
          <br />
          <span className="text-muted">Engineer.</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-2 mt-7 max-w-[560px] text-muted leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.075rem)" }}
        >
          I build{" "}
          <strong className="text-text font-medium">
            production-grade React and Next.js applications
          </strong>{" "}
          for SaaS teams. Specializing in performance optimization, scalable
          architecture, and frontends that{" "}
          <strong className="text-text font-medium">
            convert trial users into paying customers.
          </strong>
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-3 flex flex-wrap gap-4 mt-11">
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-bg font-display font-bold text-sm tracking-wide px-7 py-3.5 hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
          >
            Hire Me for a Role →
          </a>
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 border border-border text-text font-display font-semibold text-sm tracking-wide px-7 py-3.5 hover:border-muted hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Start a Project
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-4 flex flex-wrap gap-x-12 gap-y-6 mt-16 pt-12 border-t border-border">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-display font-black text-white leading-none tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
              >
                {s.num.replace(/\D/, "")}
                <span className="text-accent">
                  {s.num.replace(/[^%+]/g, "")}
                </span>
              </div>
              <div className="text-muted text-xs uppercase tracking-widest mt-1.5 font-display">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

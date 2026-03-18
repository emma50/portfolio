import { HERO_STATS } from '../data'

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden
        px-5 md:px-10 pb-12 md:pb-20 pt-28"
    >
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Available badge */}
      <div className="flex items-center gap-2 font-mono text-10 text-lime tracking-widest2 uppercase mb-7
        opacity-0 animate-fade-up">
        <span className="avail-dot" />
        Available for projects
      </div>

      {/* Headline */}
      <h1
        className="font-display font-extrabold leading-[0.92] tracking-tight max-w-[1050px]
          opacity-0 animate-fade-up-d2"
        style={{ fontSize: 'clamp(2.8rem, 8.5vw, 7.5rem)' }}
      >
        Senior Frontend<br />
        Engineer for<br />
        <em className="not-italic text-lime">Startups.</em>
      </h1>

      {/* Subheading */}
      <p
        className="mt-7 max-w-[500px] text-[#888] leading-[1.75] opacity-0 animate-fade-up-d3"
        style={{ fontSize: 'clamp(15px, 2vw, 17px)' }}
      >
        I help founders and product teams ship clean, fast, production-grade
        web products — without the overhead of a full-time hire.
      </p>

      {/* CTAs */}
      <div className="mt-9 flex flex-wrap gap-3 items-center opacity-0 animate-fade-up-d4">
        <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="btn-primary">
          Start a project →
        </a>
        <a href="#work" onClick={(e) => scrollTo(e, '#work')} className="btn-ghost">
          See my work
        </a>
      </div>

      {/* Stats */}
      <div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8
          pt-8 border-t border-neutral-800 opacity-0 animate-fade-up-d5"
      >
        {HERO_STATS.map((s) => (
          <div key={s.num}>
            <div
              className="font-display font-extrabold leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
            >
              {s.num.replace(/[+%]/, '')}<em className="not-italic text-lime">{s.num.match(/[+%]/)?.[0]}</em>
            </div>
            <div className="text-10 text-[#777] mt-1.5 leading-[1.45] max-w-[110px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

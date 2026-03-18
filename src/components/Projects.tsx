import { useEffect, useRef } from 'react'
import { PROJECTS } from '../data'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    section.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="work" className="py-24 md:py-28">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="reveal mb-12">
          <div className="s-label">Projects</div>
          <h2 className="s-heading">Selected work.</h2>
          <p className="text-[14px] text-[#777] mt-3 max-w-[420px] leading-[1.6]">
            Production applications I've designed and built — each with real users, real metrics.
          </p>
        </div>

        {/* Grid */}
        <div
          className="reveal reveal-d1 grid grid-cols-1 md:grid-cols-2
            border border-neutral-800 rounded-[6px] overflow-hidden gap-px bg-neutral-800"
        >
          {PROJECTS.map((proj) => (
            <a
              key={proj.title}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neutral-950 p-6 md:p-9 flex flex-col gap-4
                no-underline text-inherit relative overflow-hidden
                transition-colors duration-200 hover:bg-neutral-915"
            >
              {/* Bottom shimmer line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px
                  bg-gradient-to-r from-transparent via-lime to-transparent
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Top row */}
              <div className="flex justify-between items-start">
                <span className="font-mono text-10 text-neutral-700 tracking-wide2 uppercase">
                  {proj.type}
                </span>
                <span
                  className="text-[1.1rem] text-neutral-700 transition-all duration-200
                    group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime"
                >
                  ↗
                </span>
              </div>

              {/* Title */}
              <div
                className="font-display font-extrabold leading-tight transition-colors duration-200
                  group-hover:text-lime"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}
              >
                {proj.title}
              </div>

              {/* Description */}
              <p className="text-[13.5px] text-[#777] leading-[1.7] flex-1">
                {proj.desc}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center flex-wrap gap-2 mt-1">
                <span
                  className="font-mono text-10 text-lime bg-lime/[0.07]
                    border border-lime/[0.14] px-2.5 py-1 rounded-[2px] tracking-[0.03em]"
                >
                  {proj.metric}
                </span>
                <span
                  className="text-[12px] text-[#777] font-mono tracking-[0.04em]
                    transition-colors duration-200 group-hover:text-lime"
                >
                  Live Site →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

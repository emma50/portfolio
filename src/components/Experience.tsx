import { useEffect, useRef } from 'react'
import { EXPERIENCE } from '../data'

/** Renders a bullet string, making **bold** spans white + semibold */
function Bullet({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <li className="text-[13.5px] text-[#777] leading-[1.65] pl-5 relative
      before:content-['→'] before:absolute before:left-0 before:text-lime
      before:text-[11px] before:top-[3px]">
      {parts.map((part, i) =>
        i % 2 === 1
          ? <strong key={i} className="text-white font-semibold">{part}</strong>
          : <span key={i}>{part}</span>
      )}
    </li>
  )
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    section.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="experience"
      className="py-24 md:py-28 bg-neutral-925 border-t border-b border-neutral-800"
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-20 items-start">

          {/* Sticky sidebar */}
          <div className="exp-sticky reveal">
            <div className="s-label">Experience</div>
            <h2 className="s-heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              Results I've<br />delivered.
            </h2>
            <p className="text-[14px] text-[#777] leading-[1.75] mt-4">
              6+ years across startups, YC-backed companies, and high-growth remote teams.
              Not just code shipped — outcomes produced.
            </p>
          </div>

          {/* Role list */}
          <div className="reveal reveal-d1 divide-y divide-neutral-800">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company} className="py-8 first:pt-0 last:pb-0">
                {/* Company row */}
                <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                  <div>
                    <div className="font-display text-[1.15rem] font-extrabold">{exp.company}</div>
                    <div className="font-mono text-11 text-lime tracking-[0.05em] mt-0.5">
                      {exp.role}
                    </div>
                  </div>
                  {(exp.period || exp.badge) && (
                    <div className="font-mono text-10 text-neutral-700 tracking-[0.04em] mt-0.5 whitespace-nowrap">
                      {exp.badge ?? exp.period}
                    </div>
                  )}
                </div>

                {/* Blurb */}
                {exp.blurb && (
                  <p className="text-[13px] text-[#666] leading-[1.65] italic mb-4">{exp.blurb}</p>
                )}

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, i) => (
                    <Bullet key={i} text={b} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

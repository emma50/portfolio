import { useEffect, useRef } from 'react'
import { PROCESS_STEPS } from '../data'

export default function Process() {
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
    <section ref={ref} id="process" className="py-24 md:py-28">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="reveal">
          <div className="s-label">How it works</div>
          <h2 className="s-heading">
            Simple process.<br /><em>No surprises.</em>
          </h2>
        </div>

        <div
          className="reveal reveal-d1 mt-12 grid grid-cols-2 md:grid-cols-4
            border border-neutral-800 rounded-[6px] overflow-hidden gap-px bg-neutral-800"
        >
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="bg-neutral-950 p-6 md:p-8">
              <div className="font-mono text-10 text-lime tracking-wide2 mb-4">
                {step.num}
              </div>
              <h3 className="text-[15px] font-semibold mb-2">{step.title}</h3>
              <p className="text-[13px] text-[#777] leading-[1.65]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

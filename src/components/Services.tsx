import { useEffect, useRef } from 'react'
import { SERVICES } from '../data'

export default function Services() {
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
    <section
      ref={ref}
      id="services"
      className="py-24 md:py-28 bg-neutral-925 border-t border-b border-neutral-800"
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="reveal">
          <div className="s-label">Services</div>
          <h2 className="s-heading">
            Here's what I<br />build for you.
          </h2>
        </div>

        {/* Grid */}
        <div
          className="reveal reveal-d1 mt-12 grid grid-cols-1 sm:grid-cols-2
            border border-neutral-800 rounded-[6px] overflow-hidden gap-px bg-neutral-800"
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.num}
              className="group bg-neutral-925 p-6 md:p-10 relative overflow-hidden
                transition-colors duration-200 hover:bg-neutral-915"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-lime
                  scale-x-0 origin-left transition-transform duration-300
                  group-hover:scale-x-100"
              />
              <div className="font-mono text-10 text-neutral-700 tracking-wide3 mb-5">
                {svc.num}
              </div>
              <h3 className="font-display text-[1.15rem] font-bold mb-3">{svc.title}</h3>
              <p className="text-[13.5px] text-[#666] leading-[1.7]">{svc.desc}</p>
              <span className="inline-block mt-4 font-mono text-10 text-lime tracking-[0.04em]">
                {svc.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

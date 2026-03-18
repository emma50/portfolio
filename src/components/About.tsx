import { useEffect, useRef } from 'react'
import { STACK } from '../data'

export default function About() {
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
    <section ref={ref} className="py-24 md:py-28" id="about">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* Left */}
          <div className="reveal">
            <div className="s-label">What I do</div>
            <h2 className="s-heading">
              I turn product ideas into{' '}
              <em>working software.</em>
            </h2>
          </div>

          {/* Right */}
          <div className="reveal reveal-d1">
            <div className="space-y-4 text-[#888] leading-[1.8] text-[15px]">
              <p>
                Startups move fast. You need someone who understands both the product and the
                code — someone who can jump in, get up to speed quickly, and ship without
                hand-holding.
              </p>
              <p>
                That's what I do. I've spent 6+ years building production web applications
                across startups, a YC-backed company, and high-growth remote teams. Clean code,
                fast delivery, no drama.
              </p>
              <p>
                I work best with founders and product leads who know what they want to build but
                need a senior engineer to own the frontend end-to-end.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-[7px]">
              {STACK.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { PRICING_PLANS } from '../data'

export default function Pricing() {
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

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={ref}
      id="pricing"
      className="py-24 md:py-28 bg-neutral-925 border-t border-b border-neutral-800"
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="reveal">
          <div className="s-label">Pricing</div>
          <h2 className="s-heading">
            Transparent pricing,<br />built for every stage.
          </h2>
          <p className="max-w-[520px] text-[15px] text-[#777] leading-[1.8] mt-4 mb-12">
            Every project starts with a free 30-minute call. Choose the scope that fits
            where you are — you can always scale up later.
          </p>
        </div>

        {/* Cards */}
        <div
          className="reveal reveal-d1 grid grid-cols-1 md:grid-cols-3
            border border-neutral-800 rounded-[6px] overflow-hidden gap-px bg-neutral-800
            max-w-[480px] md:max-w-none mx-auto"
        >
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-6 md:p-9 transition-colors duration-200 hover:bg-neutral-915
                ${plan.featured ? 'bg-[#0b1006]' : 'bg-neutral-950'}`}
            >
              {/* Tier */}
              <div
                className={`font-mono text-10 tracking-wide3 uppercase mb-3
                  ${plan.featured ? 'text-lime' : 'text-neutral-700'}`}
              >
                {plan.tier}
              </div>

              {/* Name */}
              <div className="font-display text-[1.35rem] font-extrabold mb-1.5">
                {plan.name}
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#777] leading-[1.6] mb-5">{plan.desc}</p>

              {/* Price */}
              <div className="font-display font-extrabold leading-none mb-1.5"
                style={{ fontSize: '2.4rem' }}>
                {plan.price.startsWith('$') ? (
                  <>
                    <sup className="text-[1.1rem] align-super">$</sup>
                    {plan.price.slice(1)}
                  </>
                ) : (
                  plan.price
                )}
                <sub className="text-[0.9rem] font-normal text-[#777] font-body align-baseline ml-1">
                  {plan.priceSub}
                </sub>
              </div>

              <hr className="border-neutral-800 my-5" />

              {/* Features */}
              <ul className="flex-1 flex flex-col gap-2.5 mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`text-[13px] flex gap-2.5 items-start leading-[1.5]
                      ${f.disabled ? 'text-neutral-700' : 'text-[#777]'}`}
                  >
                    <span
                      className={`flex-shrink-0 text-[10px] font-bold mt-[3px]
                        ${f.disabled ? 'text-neutral-700' : 'text-lime'}`}
                    >
                      {f.disabled ? '—' : '✓'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className={`block text-center no-underline px-4 py-3 rounded-[3px]
                  text-[13px] font-semibold tracking-[0.02em] mt-auto transition-all duration-200
                  ${plan.featured
                    ? 'bg-lime text-neutral-950 hover:bg-lime-dim hover:-translate-y-px'
                    : 'border border-neutral-750 text-[#777] hover:border-lime hover:text-lime hover:-translate-y-px'
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="mt-5 font-mono text-10 text-neutral-700 text-center tracking-[0.04em]">
          All prices in USD · 50% upfront, 50% on completion · Wise · PayPal · Bank transfer
        </p>
      </div>
    </section>
  )
}

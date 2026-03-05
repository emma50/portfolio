import { skillGroups } from '../data'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="bg-surface border-t border-b border-border py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">About</span>
              <span className="w-10 h-px bg-accent/40" />
            </div>
            <h2 className="font-display font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              I build systems<br />that scale.
            </h2>
            <div className="space-y-5 text-muted leading-[1.85]">
              <p>
                Most frontend engineers can ship features. I ship{' '}
                <strong className="text-text font-medium">systems</strong> — architecture that holds up under
                real user load, design patterns a team can inherit without pain, and performance work
                that shows up in the metrics that matter.
              </p>
              <p>
                My background in{' '}
                <strong className="text-text font-medium">Chemical Engineering</strong> shaped how I think:
                find the constraint, eliminate waste, measure the result. I apply that same rigor to every
                codebase. When I led a TypeScript migration that reduced runtime defects by 30%, it wasn't
                about syntax — it was about shared confidence across the team.
              </p>
              <p>
                I'm based in Lagos, Nigeria and work exclusively with remote teams across the US, UK, and
                Europe. Available for{' '}
                <strong className="text-text font-medium">full-time roles</strong> and{' '}
                <strong className="text-text font-medium">frontend sprint contracts.</strong>
              </p>
            </div>
            <div className="mt-9 flex items-center gap-6">
              <a
                href="/resume/Okwuidegbe-Emmanuel-Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-accent font-display font-bold text-sm tracking-wider border-b border-accent/30 pb-0.5 hover:border-accent transition-colors"
              >
                Download CV →
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-7">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-display font-semibold text-muted uppercase tracking-[0.12em] mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`text-[0.8rem] px-3 py-1.5 border font-body ${
                        s.highlight
                          ? 'border-accent/25 bg-accent/6 text-accent'
                          : 'border-border bg-white/[0.03] text-text'
                      }`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

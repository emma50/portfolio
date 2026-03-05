import { projects } from '../data'
import { useInView } from '../hooks/useInView'

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`group relative bg-bg border border-border p-8 sm:p-9 overflow-hidden transition-all duration-700 hover:border-accent/20 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <p className="font-display font-bold text-muted text-[0.7rem] tracking-[0.1em] uppercase mb-4">
        {project.index}
      </p>
      <h3 className="font-display font-black text-white text-[1.35rem] tracking-tight mb-3">
        {project.name}
      </h3>
      <p className="text-muted text-sm leading-[1.75] mb-5">{project.desc}</p>

      {/* Metric pill */}
      <div className="inline-flex items-center gap-2 bg-accent/7 border border-accent/18 text-accent text-xs font-semibold px-3 py-1.5 mb-5">
        {project.metric}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[0.72rem] px-2.5 py-1 border border-border text-muted">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-display font-bold text-accent text-[0.78rem] tracking-widest uppercase group-hover:gap-3 transition-all duration-200"
      >
        Live Site →
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-surface border-t border-b border-border py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">Projects</span>
          <span className="w-10 h-px bg-accent/40" />
        </div>
        <h2 className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
          Selected work.
        </h2>
        <p className="text-muted text-base max-w-[500px] leading-relaxed mb-14">
          Production applications I've designed and built — each with real users, real metrics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

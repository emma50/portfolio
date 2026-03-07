import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

const PROJECT_META = [
  {
    key: "fabspace",
    index: "01",
    name: "FabspaceAI",
    tags: ["Next.js", "TypeScript", "AI Integrations", "Tailwind CSS"],
    link: "https://www.fabspaceai.com/",
  },
  {
    key: "protronics",
    index: "02",
    name: "Protronics",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Performance"],
    link: "https://www.protronics-inc.com/",
  },
  {
    key: "vision",
    index: "03",
    name: "Vision App",
    tags: ["React", "Cloudinary", "Gemini API", "Vercel"],
    link: "https://vision-app-five.vercel.app/",
  },
  {
    key: "cloudi",
    index: "04",
    name: "Cloudi",
    tags: ["React", "Next.js", "Accessibility", "Responsive Design"],
    link: "https://cloudi-five.vercel.app/",
  },
];

function ProjectCard({
  meta,
  index,
}: {
  meta: (typeof PROJECT_META)[0];
  index: number;
}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group relative bg-bg border border-border p-8 sm:p-9 overflow-hidden transition-all duration-700 hover:border-accent/20 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <p className="font-display font-bold text-muted text-[0.7rem] tracking-[0.1em] uppercase mb-4">
        {meta.index}
      </p>
      <h3 className="font-display font-black text-white text-[1.35rem] tracking-tight mb-3">
        {meta.name}
      </h3>
      <p className="text-muted text-sm leading-[1.75] mb-5">
        {t(`projects.items.${meta.key}.desc` as Parameters<typeof t>[0])}
      </p>
      <div className="inline-flex items-center gap-2 bg-accent/7 border border-accent/18 text-accent text-xs font-semibold px-3 py-1.5 mb-5">
        {t(`projects.items.${meta.key}.metric` as Parameters<typeof t>[0])}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-6">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.72rem] px-2.5 py-1 border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={meta.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-display font-bold text-accent text-[0.78rem] tracking-widest uppercase group-hover:gap-3 transition-all duration-200"
      >
        {t("projects.live_site")}
      </a>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="bg-surface border-t border-b border-border py-24 lg:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
            {t("projects.section_label")}
          </span>
          <span className="w-10 h-px bg-accent/40" />
        </div>
        <h2
          className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          {t("projects.title")}
        </h2>
        <p className="text-muted text-base max-w-[500px] leading-relaxed mb-14">
          {t("projects.subtitle")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {PROJECT_META.map((p, i) => (
            <ProjectCard key={p.key} meta={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

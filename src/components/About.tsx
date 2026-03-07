import { useTranslation, Trans } from "react-i18next";
import { useInView } from "../hooks/useInView";

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Storybook",
];
const testingDevops = [
  "Jest",
  "Cypress",
  "React Testing Library",
  "GitHub Actions",
  "Docker",
  "Vitest",
];
const specialized = [
  "Core Web Vitals",
  "CI/CD Pipelines",
  "Performance Optimization",
  "SEO Architecture",
  "WCAG Accessibility",
  "GitHub Copilot ✓",
];
const stateData = [
  "Redux / RTK Query",
  "Zustand",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Firebase",
];
const highlightedSkills = new Set([
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
]);

export default function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  const skillGroups = [
    { labelKey: "about.skill_groups.core_stack", skills: coreStack },
    { labelKey: "about.skill_groups.testing_devops", skills: testingDevops },
    { labelKey: "about.skill_groups.specialized_in", skills: specialized },
    { labelKey: "about.skill_groups.state_data", skills: stateData },
  ];

  return (
    <section
      id="about"
      className="bg-surface border-t border-b border-border py-24 lg:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
                {t("about.section_label")}
              </span>
              <span className="w-10 h-px bg-accent/40" />
            </div>
            <h2
              className="font-display font-black text-white leading-[1.05] tracking-tight mb-6 whitespace-pre-line"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              {t("about.title")}
            </h2>
            <div className="space-y-5 text-muted leading-[1.85]">
              <p>
                <Trans
                  i18nKey="about.p1"
                  components={{
                    strong: <strong className="text-text font-medium" />,
                  }}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.p2"
                  components={{
                    strong: <strong className="text-text font-medium" />,
                  }}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.p3"
                  components={{
                    strong: <strong className="text-text font-medium" />,
                  }}
                />
              </p>
            </div>
            <div className="mt-9">
              <a
                href="/resume/Okwuidegbe-Emmanuel-Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-accent font-display font-bold text-sm tracking-wider border-b border-accent/30 pb-0.5 hover:border-accent transition-colors"
              >
                {t("about.download_cv")}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            {skillGroups.map((g) => (
              <div key={g.labelKey}>
                <p className="text-xs font-display font-semibold text-muted uppercase tracking-[0.12em] mb-3">
                  {t(g.labelKey as Parameters<typeof t>[0])}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className={`text-[0.8rem] px-3 py-1.5 border font-body ${highlightedSkills.has(s) ? "border-accent/25 bg-accent/6 text-accent" : "border-border bg-white/[0.03] text-text"}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

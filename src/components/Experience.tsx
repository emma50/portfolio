import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

// Static data (non-translatable: company name, period, location, badge, links)
const EXP_META = [
  {
    key: "glovez",
    company: "Glovez",
    period: "Mar 2023 – Aug 2025",
    location: "Remote · Lagos, Nigeria",
  },
  {
    key: "gitstart",
    company: "GitStart",
    period: "Dec 2021 – Sep 2022",
    location: "Remote · San Francisco",
    badge: "YC S19",
  },
  {
    key: "compute",
    company: "Compute Essentials",
    period: "Dec 2019 – Oct 2021",
    location: "Remote · Wyoming, US",
  },
  {
    key: "andela",
    company: "Andela",
    period: "Mar 2019 – Jun 2019",
    location: "Lagos, Nigeria",
  },
];

function BulletText({ text }: { text: string }) {
  // Convert **bold** markdown to <strong> tags
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <div>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-text font-medium">
            {part
              .slice(2, -2)
              .split(/(\d+%|\d+\s*min|<\d+\s*min|\d+\s*→\s*\S+)/)
              .map((chunk, j) =>
                /\d+%|<\d+|\d+ min/.test(chunk) ? (
                  <span key={j} className="text-accent font-semibold">
                    {chunk}
                  </span>
                ) : (
                  chunk
                ),
              )}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </div>
  );
}

function ExpItem({
  meta,
  index,
}: {
  meta: (typeof EXP_META)[0];
  index: number;
}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const roleKey = `experience.roles.${meta.key}` as const;
  const bullets = t(`${roleKey}.bullets`, { returnObjects: true }) as string[];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-[200px_1fr] border-t border-border py-12 gap-6 md:gap-0 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Meta */}
      <div className="md:pr-10 pt-0.5 flex flex-row md:flex-col flex-wrap gap-x-4 gap-y-1 md:gap-y-1.5">
        <p className="font-display font-bold text-white text-base w-full md:w-auto">
          {meta.company}
        </p>
        {meta.badge && (
          <span className="inline-block text-[0.65rem] font-display font-bold tracking-widest uppercase bg-accent2/10 border border-accent2/25 text-accent2 px-2 py-0.5 w-fit">
            {meta.badge}
          </span>
        )}
        <p className="text-xs text-muted mt-0 md:mt-1.5">{meta.period}</p>
        <p className="text-[0.72rem] text-muted opacity-70">{meta.location}</p>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display font-bold text-white text-xl tracking-tight mb-2">
          {t(`${roleKey}.role` as Parameters<typeof t>[0])}
        </h3>
        {t(`${roleKey}.blurb` as Parameters<typeof t>[0], {
          defaultValue: "",
        }) && (
          <p className="text-sm text-muted italic leading-relaxed mb-5">
            {t(`${roleKey}.blurb` as Parameters<typeof t>[0])}
          </p>
        )}
        <ul className="flex flex-col gap-3.5">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-3.5 text-sm text-muted leading-[1.7]"
            >
              <span className="text-accent font-display font-bold flex-shrink-0 mt-px">
                →
              </span>
              <BulletText text={bullet} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
                {t("experience.section_label")}
              </span>
              <span className="w-10 h-px bg-accent/40" />
            </div>
            <h2
              className="font-display font-black text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              {t("experience.title")}
            </h2>
          </div>
          <p className="text-muted text-sm max-w-[320px] leading-relaxed sm:text-right">
            {t("experience.subtitle")}
          </p>
        </div>
        <div>
          {EXP_META.map((meta, i) => (
            <ExpItem key={meta.key} meta={meta} index={i} />
          ))}
          <div className="border-b border-border" />
        </div>
      </div>
    </section>
  );
}

import { useTranslation, Trans } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { num: t("hero.stats.years_num"), label: t("hero.stats.years_label") },
    { num: t("hero.stats.traffic_num"), label: t("hero.stats.traffic_label") },
    { num: t("hero.stats.defects_num"), label: t("hero.stats.defects_label") },
    { num: t("hero.stats.deploys_num"), label: t("hero.stats.deploys_label") },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <svg
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.055] pointer-events-none hidden lg:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect
          x="0"
          y="0"
          width="400"
          height="400"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect
          x="50"
          y="50"
          width="300"
          height="300"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect
          x="100"
          y="100"
          width="200"
          height="200"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect
          x="150"
          y="150"
          width="100"
          height="100"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1="0"
          x2="400"
          y2="400"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="400"
          y1="0"
          x2="0"
          y2="400"
          stroke="white"
          strokeWidth="0.5"
        />
        <circle cx="200" cy="200" r="199" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="149" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="99" stroke="white" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-8 w-full">
        <div className="animate-fade-up inline-flex items-center gap-2.5 bg-accent/8 border border-accent/20 px-3.5 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
          <span className="text-accent text-xs font-semibold tracking-[0.1em] uppercase font-display">
            {t("hero.available")}
          </span>
        </div>

        <h1
          className="animate-fade-up-1 font-display font-black leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          {t("hero.title_line1")}
          <br />
          <span className="text-accent">{t("hero.title_line2")}</span>
          <br />
          <span className="text-muted">{t("hero.title_line3")}</span>
        </h1>

        <p
          className="animate-fade-up-2 mt-7 max-w-[560px] text-muted leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.075rem)" }}
        >
          <Trans
            i18nKey="hero.sub"
            components={{
              strong: <strong className="text-text font-medium" />,
            }}
          />
        </p>

        <div className="animate-fade-up-3 flex flex-wrap gap-4 mt-11">
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-bg font-display font-bold text-sm tracking-wide px-7 py-3.5 hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
          >
            {t("hero.cta_primary")}
          </a>
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 border border-border text-text font-display font-semibold text-sm tracking-wide px-7 py-3.5 hover:border-muted hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            {t("hero.cta_secondary")}
          </a>
        </div>

        <div className="animate-fade-up-4 flex flex-wrap gap-x-12 gap-y-6 mt-16 pt-12 border-t border-border">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-display font-black text-white leading-none tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
              >
                {s.num.replace(/[%+]/, "")}
                <span className="text-accent">
                  {s.num.replace(/[^%+]/g, "")}
                </span>
              </div>
              <div className="text-muted text-xs uppercase tracking-widest mt-1.5 font-display">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

const SOCIAL_LINKS = [
  {
    icon: "in",
    key: "linkedin",
    href: "https://www.linkedin.com/in/okwuidegbeemmanuel/",
  },
  { icon: "gh", key: "github", href: "https://github.com/emma50" },
  { icon: "𝕏", key: "twitter", href: "https://x.com/OkwuidegbeEmma1" },
];

export default function Contact() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  return (
    <section
      id="contact"
      className="bg-surface border-t border-border py-24 lg:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
                {t("contact.section_label")}
              </span>
              <span className="w-10 h-px bg-accent/40" />
            </div>
            <h2
              className="font-display font-black text-white leading-[1.05] tracking-tight mb-6 whitespace-pre-line"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              {t("contact.title")}
            </h2>
            <div className="inline-flex items-center gap-2.5 bg-accent/7 border border-accent/20 px-4 py-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
              <span className="text-accent text-xs font-display font-semibold tracking-wider uppercase">
                {t("contact.availability")}
              </span>
            </div>
            <p className="text-muted leading-[1.8] mb-10 text-sm sm:text-base">
              {t("contact.body")}
            </p>
            <div className="flex flex-col">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 border-b border-border text-text font-display font-semibold text-base hover:text-accent hover:pl-2 transition-all duration-200"
                >
                  <span className="w-9 h-9 bg-bg border border-border flex items-center justify-center text-muted text-sm flex-shrink-0 group-hover:border-accent/30 group-hover:text-accent transition-all">
                    {s.icon}
                  </span>
                  {t(`contact.social.${s.key}` as Parameters<typeof t>[0])}
                </a>
              ))}
            </div>
          </div>
          <div className="self-start lg:pt-2">
            <div className="bg-bg border border-border p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
                  {t("contact.email_label")}
                </span>
                <span className="w-10 h-px bg-accent/40" />
              </div>
              <p className="text-muted text-sm leading-[1.75] mb-5">
                {t("contact.email_body")}
              </p>
              <a
                href="mailto:okwuidegbeemmanuel@gmail.com"
                className="block font-display font-bold text-white text-base sm:text-lg mb-8 hover:text-accent transition-colors break-all"
              >
                okwuidegbeemmanuel@gmail.com
              </a>
              <a
                href="mailto:okwuidegbeemmanuel@gmail.com"
                className="inline-flex items-center gap-2 bg-accent text-bg font-display font-bold text-sm tracking-wide px-7 py-3.5 hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
              >
                {t("contact.send")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

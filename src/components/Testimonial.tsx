import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

export default function Testimonial() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`relative border border-border bg-surface p-10 sm:p-14 lg:p-16 max-w-[820px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="absolute top-[-18px] left-10 font-display font-black text-accent opacity-15 leading-none select-none pointer-events-none"
            style={{ fontSize: "7rem" }}
            aria-hidden="true"
          >
            "
          </span>
          <blockquote className="text-text text-lg sm:text-xl leading-[1.8] font-light italic mb-10 relative z-10">
            {t("testimonial.quote")}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-border flex items-center justify-center font-display font-black text-accent text-lg flex-shrink-0">
              CN
            </div>
            <div>
              <p className="font-display font-bold text-white text-[0.95rem]">
                {t("testimonial.name")}
              </p>
              <p className="text-muted text-sm">{t("testimonial.title")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

// ─── Static metadata (non-translatable) ────────────────────────────────────
const PACKAGES = [
  {
    key: "starter",
    index: "01",
    featured: false,
    featureCount: 6,
  },
  {
    key: "growth",
    index: "02",
    featured: true,
    featureCount: 7,
  },
  {
    key: "premium",
    index: "03",
    featured: false,
    featureCount: 7,
  },
] as const;

const RETAINER_TAGS = [
  "retainer_tag_1",
  "retainer_tag_2",
  "retainer_tag_3",
  "retainer_tag_4",
] as const;

// ─── Package Card ───────────────────────────────────────────────────────────
function PackageCard({
  pkg,
  cardIndex,
}: {
  pkg: (typeof PACKAGES)[number];
  cardIndex: number;
}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  const features = Array.from({ length: pkg.featureCount }, (_, i) =>
    t(`pricing.packages.${pkg.key}.features.${i}` as Parameters<typeof t>[0]),
  );

  return (
    <div
      ref={ref}
      className={`
        relative flex flex-col bg-bg border overflow-hidden
        transition-all duration-700 hover:-translate-y-1
        ${pkg.featured ? "border-accent/60" : "border-border hover:border-accent/20"}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDelay: `${cardIndex * 80}ms` }}
    >
      {/* Top accent bar — only on featured */}
      {pkg.featured && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent2 to-transparent" />
      )}

      {/* Card header */}
      <div
        className={`px-7 pt-8 pb-6 border-b border-border ${pkg.featured ? "bg-accent/[0.04]" : ""}`}
      >
        {/* Index + badge row */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-display font-bold text-muted text-[0.7rem] tracking-[0.1em] uppercase">
            {pkg.index}
          </span>
          {pkg.featured && (
            <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/25 text-accent text-[0.65rem] font-display font-bold tracking-widest uppercase px-2.5 py-1">
              {t("pricing.popular_badge")}
            </span>
          )}
        </div>

        {/* Tier label */}
        <p className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase mb-1">
          {t(`pricing.packages.${pkg.key}.tier` as Parameters<typeof t>[0])}
        </p>

        {/* Package name */}
        <h3 className="font-display font-black text-white text-[1.35rem] tracking-tight mb-1">
          {t(`pricing.packages.${pkg.key}.name` as Parameters<typeof t>[0])}
        </h3>

        {/* Target audience */}
        <p className="text-muted text-[0.8rem] leading-snug mb-5">
          {t(`pricing.packages.${pkg.key}.target` as Parameters<typeof t>[0])}
        </p>

        {/* Price */}
        <div className="mb-2">
          <span
            className={`font-display font-black leading-none tracking-tight ${pkg.featured ? "text-accent" : "text-white"}`}
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}
          >
            {t(`pricing.packages.${pkg.key}.price` as Parameters<typeof t>[0])}
          </span>
        </div>

        {/* Delivery */}
        <div className="inline-flex items-center gap-1.5 text-muted text-[0.75rem] font-body">
          <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
          {t(`pricing.packages.${pkg.key}.delivery` as Parameters<typeof t>[0])}
        </div>
      </div>

      {/* Features list */}
      <ul className="flex-1 px-7 py-6 flex flex-col gap-3">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-[3px]"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 6l3 3 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-muted text-[0.83rem] leading-snug">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="px-7 pb-8">
        <a
          href={`mailto:okwuidegbeemmanuel@gmail.com?subject=${encodeURIComponent(t(`pricing.packages.${pkg.key}.name` as Parameters<typeof t>[0]) + " Inquiry")}`}
          className={`
            inline-flex w-full justify-center items-center gap-2
            font-display font-bold text-sm tracking-wide py-3.5
            transition-all duration-200 hover:-translate-y-0.5
            ${
              pkg.featured
                ? "bg-accent text-bg hover:opacity-85"
                : "border border-border text-text hover:border-muted hover:text-white"
            }
          `}
        >
          {t("pricing.cta")}
        </a>
      </div>
    </div>
  );
}

// ─── Retainer strip ─────────────────────────────────────────────────────────
function RetainerStrip() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`mt-3 bg-bg border border-border p-7 sm:p-9 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Left */}
        <div className="flex-1">
          <p className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase mb-2">
            {t("pricing.retainer_label")}
          </p>
          <h3 className="font-display font-black text-white text-[1.15rem] tracking-tight mb-2">
            {t("pricing.retainer_title")}
          </h3>
          <p className="text-muted text-sm leading-[1.75] max-w-[480px] mb-4">
            {t("pricing.retainer_desc")}
          </p>
          <div className="flex flex-wrap gap-2">
            {RETAINER_TAGS.map((tagKey) => (
              <span
                key={tagKey}
                className="text-[0.72rem] px-2.5 py-1 border border-border text-muted font-body"
              >
                {t(`pricing.${tagKey}` as Parameters<typeof t>[0])}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
          <div>
            <span className="font-display font-black text-accent leading-none tracking-tight text-[1.6rem]">
              {t("pricing.retainer_price")}
            </span>
            <span className="text-muted text-sm font-body ml-1">
              {t("pricing.retainer_per")}
            </span>
          </div>
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com?subject=Retainer%20Inquiry"
            className="inline-flex items-center gap-2 border border-border text-text font-display font-bold text-sm tracking-wide px-6 py-3 hover:border-muted hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            {t("pricing.retainer_cta")}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Payment note ────────────────────────────────────────────────────────────
function PaymentNote() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`mt-10 flex items-start gap-4 bg-accent/[0.04] border border-accent/15 px-6 py-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <svg
        className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-muted text-sm leading-[1.75]">
        <span className="text-text font-medium">
          {t("pricing.note_title")}:{" "}
        </span>
        {t("pricing.note_body")}
      </p>
    </div>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────
export default function Pricing() {
  const { t } = useTranslation();
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 mb-14 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
              {t("pricing.section_label")}
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>
          <h2
            className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {t("pricing.title")}
          </h2>
          <p className="text-muted text-base max-w-[520px] leading-relaxed">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Package cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.key} pkg={pkg} cardIndex={i} />
          ))}
        </div>

        {/* Retainer */}
        <RetainerStrip />

        {/* Payment note */}
        <PaymentNote />
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// ─── Types & static data ─────────────────────────────────────────────────────

type Market = "ng" | "global";

const PACKAGES = [
  { key: "starter", index: "01", featured: false, featureCount: 6 },
  { key: "growth", index: "02", featured: true, featureCount: 7 },
  { key: "premium", index: "03", featured: false, featureCount: 7 },
] as const;

type Cell = boolean | string;

interface TableRow {
  key: string;
  starter: Cell;
  growth: Cell;
  premium: Cell;
  groupKey?: string;
}

const TABLE_ROWS: TableRow[] = [
  // Delivery
  {
    key: "feat_pages",
    starter: "val_5pages",
    growth: "val_10pages",
    premium: "val_unlimited_pages",
    groupKey: "group_delivery",
  },
  {
    key: "feat_timeline",
    starter: "val_2weeks",
    growth: "val_4weeks",
    premium: "val_negotiated",
  },
  {
    key: "feat_revisions",
    starter: "val_1round",
    growth: "val_3rounds",
    premium: "val_unlimited",
  },
  {
    key: "feat_support",
    starter: false,
    growth: "val_14days",
    premium: "val_30days",
  },
  // Core
  {
    key: "feat_responsive",
    starter: true,
    growth: true,
    premium: true,
    groupKey: "group_core",
  },
  {
    key: "feat_seo",
    starter: "val_basic",
    growth: "val_advanced",
    premium: "val_enterprise",
  },
  { key: "feat_form", starter: true, growth: true, premium: true },
  { key: "feat_custom_ui", starter: true, growth: true, premium: true },
  // Advanced
  {
    key: "feat_api",
    starter: false,
    growth: true,
    premium: true,
    groupKey: "group_advanced",
  },
  { key: "feat_auth", starter: false, growth: true, premium: true },
  { key: "feat_perf", starter: false, growth: true, premium: true },
  { key: "feat_multi_api", starter: false, growth: false, premium: true },
  // Enterprise
  {
    key: "feat_rbac",
    starter: false,
    growth: false,
    premium: true,
    groupKey: "group_enterprise",
  },
  { key: "feat_dashboard", starter: false, growth: false, premium: true },
  { key: "feat_testing", starter: false, growth: false, premium: true },
  { key: "feat_channel", starter: false, growth: false, premium: true },
];

const PROCESS_COUNT = 5;
const FAQ_COUNT = 7;

// ─── Helper: render a table cell value ───────────────────────────────────────

function TableCell({ value, featured }: { value: Cell; featured?: boolean }) {
  const { t } = useTranslation();
  if (value === true)
    return (
      <span className={featured ? "text-accent font-bold" : "text-accent"}>
        <svg className="w-4 h-4 mx-auto" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8l3.5 3.5 6.5-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  if (value === false) return <span className="text-muted/40">—</span>;
  return (
    <span
      className={`text-xs font-body ${featured ? "text-text font-medium" : "text-muted"}`}
    >
      {t(`pricingPage.table_${value}` as Parameters<typeof t>[0])}
    </span>
  );
}

// ─── Section: Hero ───────────────────────────────────────────────────────────

function PricingHero({
  market,
  onToggle,
}: {
  market: Market;
  onToggle: (m: Market) => void;
}) {
  const { t } = useTranslation();
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Subtle grid bg decoration */}
      <svg
        className="absolute right-0 top-1/4 w-[320px] h-[320px] opacity-[0.04] pointer-events-none hidden lg:block"
        viewBox="0 0 320 320"
        fill="none"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <rect
            key={i}
            x={i * 40}
            y={i * 40}
            width={320 - i * 80}
            height={320 - i * 80}
            stroke="white"
            strokeWidth="0.5"
          />
        ))}
        <line
          x1="0"
          y1="0"
          x2="320"
          y2="320"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="320"
          y1="0"
          x2="0"
          y2="320"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-8">
        {/* Eyebrow */}
        <div className="animate-fade-up inline-flex items-center gap-2.5 bg-accent/8 border border-accent/20 px-3.5 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
          <span className="text-accent text-xs font-semibold tracking-[0.1em] uppercase font-display">
            {t("pricingPage.hero_eyebrow")}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-1 font-display font-black leading-none tracking-tight text-white mb-3"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          {t("pricingPage.hero_title_1")}
          <br />
          <span className="text-accent">{t("pricingPage.hero_title_2")}</span>
        </h1>

        <p className="animate-fade-up-2 mt-5 max-w-[520px] text-muted leading-relaxed text-base sm:text-lg mb-12">
          {t("pricingPage.hero_sub")}
        </p>

        {/* Market toggle */}
        <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3">
          {(["ng", "global"] as Market[]).map((m) => (
            <button
              key={m}
              onClick={() => onToggle(m)}
              className={`flex items-center gap-4 px-6 py-4 border transition-all duration-200 text-left cursor-pointer
                ${
                  market === m
                    ? "border-accent bg-accent/8 hover:bg-accent/10"
                    : "border-border bg-surface hover:border-muted"
                }`}
            >
              <span className="text-2xl select-none">
                {m === "ng" ? "🇳🇬" : "🌍"}
              </span>
              <div>
                <p
                  className={`font-display font-bold text-sm ${market === m ? "text-accent" : "text-text"}`}
                >
                  {t(
                    m === "ng"
                      ? "pricingPage.market_ng"
                      : "pricingPage.market_global",
                  )}
                </p>
                <p className="text-muted text-xs mt-0.5">
                  {t(
                    m === "ng"
                      ? "pricingPage.market_ng_sub"
                      : "pricingPage.market_global_sub",
                  )}
                </p>
              </div>
              {market === m && (
                <svg
                  className="w-4 h-4 text-accent ml-auto flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Pricing Cards ───────────────────────────────────────────────────

function PackageCard({
  pkg,
  market,
  cardIndex,
}: {
  pkg: (typeof PACKAGES)[number];
  market: Market;
  cardIndex: number;
}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const priceKey =
    `pricingPage.${pkg.key}_price_${market === "ng" ? "ng" : "usd"}` as Parameters<
      typeof t
    >[0];
  const features = Array.from({ length: pkg.featureCount }, (_, i) =>
    t(`pricingPage.${pkg.key}_f${i}` as Parameters<typeof t>[0]),
  );

  return (
    <div
      ref={ref}
      className={`relative flex flex-col bg-bg border overflow-hidden
        transition-all duration-700 hover:-translate-y-1
        ${pkg.featured ? "border-accent/60" : "border-border hover:border-accent/20"}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${cardIndex * 80}ms` }}
    >
      {pkg.featured && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent2 to-transparent" />
      )}

      <div
        className={`px-7 pt-8 pb-6 border-b border-border ${pkg.featured ? "bg-accent/[0.04]" : ""}`}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-display font-bold text-muted text-[0.7rem] tracking-[0.1em] uppercase">
            {pkg.index}
          </span>
          {pkg.featured && (
            <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/25 text-accent text-[0.65rem] font-display font-bold tracking-widest uppercase px-2.5 py-1">
              {t("pricingPage.pkg_popular")}
            </span>
          )}
        </div>

        <p className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase mb-1">
          {t(`pricingPage.${pkg.key}_tier` as Parameters<typeof t>[0])}
        </p>
        <h3 className="font-display font-black text-white text-[1.35rem] tracking-tight mb-1">
          {t(`pricingPage.${pkg.key}_name` as Parameters<typeof t>[0])}
        </h3>
        <p className="text-muted text-[0.8rem] leading-snug mb-5">
          {t(`pricingPage.${pkg.key}_target` as Parameters<typeof t>[0])}
        </p>

        <div
          className={`font-display font-black leading-none tracking-tight mb-2 transition-all duration-300
            ${pkg.featured ? "text-accent" : "text-white"}`}
          style={{ fontSize: "clamp(1.5rem, 2.8vw, 1.9rem)" }}
        >
          {t(priceKey)}
        </div>

        <div className="inline-flex items-center gap-1.5 text-muted text-[0.75rem] font-body">
          <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
          {t(`pricingPage.${pkg.key}_delivery` as Parameters<typeof t>[0])}
        </div>
      </div>

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

      <div className="px-7 pb-8">
        <a
          href={`mailto:okwuidegbeemmanuel@gmail.com?subject=${encodeURIComponent(t(`pricingPage.${pkg.key}_name` as Parameters<typeof t>[0]) + " Inquiry")}`}
          className={`inline-flex w-full justify-center items-center gap-2 font-display font-bold text-sm tracking-wide py-3.5
            transition-all duration-200 hover:-translate-y-0.5
            ${
              pkg.featured
                ? "bg-accent text-bg hover:opacity-85"
                : "border border-border text-text hover:border-muted hover:text-white"
            }`}
        >
          {t("pricingPage.pkg_cta")}
        </a>
      </div>
    </div>
  );
}

function PricingCards({ market }: { market: Market }) {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
              {t("pricingPage.pkg_section_label")}
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>
          <h2
            className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {t("pricingPage.pkg_title")}
          </h2>
          <p className="text-muted text-base max-w-[520px] leading-relaxed">
            {t("pricingPage.pkg_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {PACKAGES.map((pkg, i) => (
            <PackageCard
              key={pkg.key}
              pkg={pkg}
              market={market}
              cardIndex={i}
            />
          ))}
        </div>

        {/* Retainer strip */}
        <RetainerStrip market={market} />

        {/* Payment note */}
        <PaymentNote />
      </div>
    </section>
  );
}

// ─── Section: Retainer ───────────────────────────────────────────────────────

function RetainerStrip({ market }: { market: Market }) {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const tags = [
    "retainer_tag_1",
    "retainer_tag_2",
    "retainer_tag_3",
    "retainer_tag_4",
  ] as const;
  const priceKey = (
    market === "ng"
      ? "pricingPage.retainer_price_ng"
      : "pricingPage.retainer_price_usd"
  ) as Parameters<typeof t>[0];

  return (
    <div
      ref={ref}
      className={`mt-3 bg-bg border border-border p-7 sm:p-9 transition-all duration-700
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase mb-2">
            {t("pricingPage.retainer_label")}
          </p>
          <h3 className="font-display font-black text-white text-[1.15rem] tracking-tight mb-2">
            {t("pricingPage.retainer_title")}
          </h3>
          <p className="text-muted text-sm leading-[1.75] max-w-[480px] mb-4">
            {t("pricingPage.retainer_desc")}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.72rem] px-2.5 py-1 border border-border text-muted font-body"
              >
                {t(`pricingPage.${tag}` as Parameters<typeof t>[0])}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
          <div>
            <span className="font-display font-black text-accent leading-none tracking-tight text-[1.6rem] transition-all duration-300">
              {t(priceKey)}
            </span>
            <span className="text-muted text-sm font-body ml-1">
              {t("pricingPage.retainer_per")}
            </span>
          </div>
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com?subject=Retainer%20Inquiry"
            className="inline-flex items-center gap-2 border border-border text-text font-display font-bold text-sm tracking-wide px-6 py-3 hover:border-muted hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            {t("pricingPage.retainer_cta")}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Payment note ────────────────────────────────────────────────────────────

function PaymentNote() {
  const { t } = useTranslation();
  return (
    <div className="mt-5 flex items-start gap-4 bg-accent/[0.04] border border-accent/15 px-6 py-5">
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
          {t("pricingPage.payment_title")}:{" "}
        </span>
        {t("pricingPage.payment_body")}
      </p>
    </div>
  );
}

// ─── Section: Feature Comparison Table ───────────────────────────────────────

function FeatureTable() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  const cols = [
    { key: "starter", featured: false },
    { key: "growth", featured: true },
    { key: "premium", featured: false },
  ] as const;

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
              {t("pricingPage.table_label")}
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>
          <h2
            className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {t("pricingPage.table_title")}
          </h2>
          <p className="text-muted text-base max-w-[480px] leading-relaxed">
            {t("pricingPage.table_sub")}
          </p>
        </div>

        {/* Table wrapper with horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-6 sm:mx-0">
          <table className="w-full min-w-[640px] border-collapse sm:mx-0 px-6">
            {/* Header */}
            <thead>
              <tr>
                <th className="py-4 px-5 text-left text-muted text-xs font-display font-semibold tracking-[0.12em] uppercase w-[35%] border-b border-border">
                  {t("pricingPage.table_col_feature")}
                </th>
                {cols.map((col) => (
                  <th
                    key={col.key}
                    className={`py-4 px-5 text-center text-xs font-display font-semibold tracking-[0.12em] uppercase border-b
                      ${col.featured ? "text-accent border-accent/40 bg-accent/[0.03]" : "text-muted border-border"}`}
                  >
                    {t(
                      `pricingPage.${col.key}_name` as Parameters<typeof t>[0],
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, ri) => {
                const showGroup = !!row.groupKey;
                return (
                  <>
                    {showGroup && (
                      <tr key={`group-${row.groupKey}`}>
                        <td colSpan={4} className="pt-6 pb-2 px-5">
                          <span className="text-[0.68rem] font-display font-bold text-muted/60 tracking-[0.16em] uppercase">
                            {t(
                              `pricingPage.table_${row.groupKey}` as Parameters<
                                typeof t
                              >[0],
                            )}
                          </span>
                        </td>
                      </tr>
                    )}
                    <tr
                      key={row.key}
                      className={`border-b border-border/50 transition-colors hover:bg-white/[0.015] ${ri % 2 === 0 ? "" : "bg-white/[0.01]"}`}
                    >
                      <td className="py-3.5 px-5 text-text text-sm font-body">
                        {t(
                          `pricingPage.table_${row.key}` as Parameters<
                            typeof t
                          >[0],
                        )}
                      </td>
                      {cols.map((col) => (
                        <td
                          key={col.key}
                          className={`py-3.5 px-5 text-center ${col.featured ? "bg-accent/[0.02]" : ""}`}
                        >
                          <TableCell
                            value={row[col.key as keyof typeof row] as Cell}
                            featured={col.featured}
                          />
                        </td>
                      ))}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── Section: How It Works ────────────────────────────────────────────────────

function HowItWorks() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="py-20 bg-surface border-t border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
              {t("pricingPage.process_label")}
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>
          <h2
            className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {t("pricingPage.process_title")}
          </h2>
          <p className="text-muted text-base max-w-[480px] leading-relaxed">
            {t("pricingPage.process_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {Array.from({ length: PROCESS_COUNT }).map((_, i) => {
            const { ref: stepRef, inView: stepInView } = useInViewStep(i);
            return (
              <div
                key={i}
                ref={stepRef}
                className={`bg-surface p-7 transition-all duration-700
                  ${stepInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="font-display font-black text-[3.5rem] leading-none text-accent/10 select-none block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-white text-[0.95rem] tracking-tight mb-2">
                  {t(
                    `pricingPage.process_s${i}_title` as Parameters<
                      typeof t
                    >[0],
                  )}
                </h3>
                <p className="text-muted text-[0.82rem] leading-[1.65]">
                  {t(
                    `pricingPage.process_s${i}_desc` as Parameters<typeof t>[0],
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Lightweight per-step InView (creates its own observer without a shared hook instance per render)
function useInViewStep(index: number) {
  const { ref, inView } = useInView(0.1);
  void index;
  return { ref, inView };
}

// ─── Section: FAQ ─────────────────────────────────────────────────────────────

function FAQ() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
              {t("pricingPage.faq_label")}
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>
          <h2
            className="font-display font-black text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {t("pricingPage.faq_title")}
          </h2>
          <p className="text-muted text-base max-w-[480px] leading-relaxed">
            {t("pricingPage.faq_sub")}
          </p>
        </div>

        <div className="max-w-[760px]">
          {Array.from({ length: FAQ_COUNT }).map((_, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer bg-transparent"
              >
                <span
                  className={`font-display font-semibold text-[0.95rem] leading-snug transition-colors duration-200
                  ${openIdx === i ? "text-accent" : "text-text"}`}
                >
                  {t(`pricingPage.faq_q${i}` as Parameters<typeof t>[0])}
                </span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 text-muted transition-all duration-300 ${openIdx === i ? "rotate-45 text-accent" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? "max-h-96 pb-5" : "max-h-0"}`}
              >
                <p className="text-muted text-sm leading-[1.85]">
                  {t(`pricingPage.faq_a${i}` as Parameters<typeof t>[0])}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Testimonial ─────────────────────────────────────────────────────

function PricingTestimonial() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  return (
    <section className="py-20 bg-surface border-t border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`relative border border-border bg-bg p-10 sm:p-14 lg:p-16 max-w-[820px] mx-auto
            transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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

// ─── Section: Get Quote CTA ───────────────────────────────────────────────────

function GetQuote() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  const SOCIAL_LINKS = [
    {
      icon: "in",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/okwuidegbeemmanuel/",
    },
    { icon: "gh", label: "GitHub", href: "https://github.com/emma50" },
    { icon: "𝕏", label: "Twitter", href: "https://x.com/OkwuidegbeEmma1" },
  ];

  return (
    <section id="get-quote" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
                {t("pricingPage.quote_eyebrow")}
              </span>
              <span className="w-10 h-px bg-accent/40" />
            </div>
            <h2
              className="font-display font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              {t("pricingPage.quote_title")}
            </h2>
            <div className="inline-flex items-center gap-2.5 bg-accent/7 border border-accent/20 px-4 py-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
              <span className="text-accent text-xs font-display font-semibold tracking-wider uppercase">
                {t("pricingPage.quote_availability")}
              </span>
            </div>
            <p className="text-muted leading-[1.8] mb-8 text-sm sm:text-base">
              {t("pricingPage.quote_sub")}
            </p>
            <div className="flex flex-col">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 border-b border-border text-text font-display font-semibold text-base hover:text-accent hover:pl-2 transition-all duration-200"
                >
                  <span className="w-9 h-9 bg-bg border border-border flex items-center justify-center text-muted text-sm flex-shrink-0 group-hover:border-accent/30 group-hover:text-accent transition-all">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="self-start lg:pt-2">
            <div className="bg-surface border border-border p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-xs font-display font-semibold tracking-[0.14em] uppercase">
                  {t("pricingPage.quote_email_label")}
                </span>
                <span className="w-10 h-px bg-accent/40" />
              </div>
              <p className="text-muted text-sm leading-[1.75] mb-5">
                {t("pricingPage.quote_email_body")}
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
                {t("pricingPage.quote_cta")}
              </a>
              <p className="text-muted/60 text-xs mt-5 leading-relaxed">
                {t("pricingPage.quote_note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page: PricingPage ────────────────────────────────────────────────────────

export default function PricingPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [market, setMarket] = useState<Market>(
    searchParams.get("market") === "global" ? "global" : "ng",
  );
  useEffect(() => {
    const m = searchParams.get("market") === "global" ? "global" : "ng";
    setMarket(m);
  }, [searchParams]); // ← runs every time searchParams changes

  // Update URL when market changes
  const handleToggle = (m: Market) => {
    setMarket(m);
    setSearchParams({ market: m }, { replace: true });
  };

  // Handle hash scroll after mount (e.g. navigating from Nav "Get Quote")
  const hasScrolled = useRef(false);
  useEffect(() => {
    if (hasScrolled.current) return;
    const hash = window.location.hash;
    if (hash) {
      hasScrolled.current = true;
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  return (
    <>
      <Nav />
      <main>
        <PricingHero market={market} onToggle={handleToggle} />
        <PricingCards market={market} />
        <FeatureTable />
        <HowItWorks />
        <FAQ />
        <PricingTestimonial />
        <GetQuote />
      </main>
      <Footer />
    </>
  );
}

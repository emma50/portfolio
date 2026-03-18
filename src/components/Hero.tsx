import { HERO_STATS } from "../data";
import emmanuelImg from "../assets/emmanuel.jpg";

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  {
    /* ── Split: text left, photo right ── */
  }
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden md:px-10 md:pb-20 md:pt-28">
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* ── DESKTOP / TABLET (md+) ── */}
      <div className="hidden md:block">
        {/* Full-height photo panel pinned to the right */}
        <div className="absolute top-24 right-0 bottom-0 w-[42%] xl:w-[44%] z-0">
          <img
            src={emmanuelImg}
            alt="Okwuidegbe Emmanuel"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          {/* Left-edge fade — dissolves photo into dark background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #060606 0%, rgba(6,6,6,0.55) 30%, transparent 65%)",
            }}
          />
          {/* Top fade — softens under the nav */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #060606 0%, transparent 18%)",
            }}
          />
          {/* Bottom fade — merges into stats row */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #060606 0%, transparent 22%)",
            }}
          />
          {/* Thin lime accent line on left edge of photo */}
          <div className="absolute top-[15%] bottom-[15%] left-0 w-px bg-gradient-to-b from-transparent via-lime/50 to-transparent" />
        </div>

        {/* Left content column */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 xl:pb-20 pl-10 xl:pl-16 pr-8 w-[62%] xl:w-[60%]">
          <div className="flex items-center gap-2 font-mono text-[10px] text-lime tracking-[0.12em] uppercase mb-8 opacity-0 animate-fade-up">
            <span className="avail-dot" />
            Available for projects
          </div>

          <h1
            className="font-display font-extrabold leading-[0.9] tracking-[-0.03em] opacity-0 animate-fade-up-d2"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6.5rem)" }}
          >
            Senior
            <br />
            <em className="not-italic text-lime">Frontend</em> <br />
            <em className="not-italic text-lime">Engineer.</em>
          </h1>

          <p
            className="mt-6 max-w-[460px] text-[#888] leading-[1.8] opacity-0 animate-fade-up-d3"
            style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
          >
            I help founders and product teams ship clean, fast, production-grade
            web products — without the overhead of a full-time hire.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 items-center opacity-0 animate-fade-up-d4">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="btn-primary"
            >
              Start a project →
            </a>
            <a
              href="#work"
              onClick={(e) => scrollTo(e, "#work")}
              className="btn-ghost"
            >
              See my work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 xl:mt-16 grid grid-cols-4 gap-6 pt-7 border-t border-neutral-800 opacity-0 animate-fade-up-d5">
            {HERO_STATS.map((s) => {
              const suffix = s.num.match(/[+%]/)?.[0] ?? "";
              const number = s.num.replace(/[+%]/, "");
              return (
                <div key={s.num}>
                  <div
                    className="font-display font-extrabold leading-none"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                  >
                    {number}
                    <em className="not-italic text-lime">{suffix}</em>
                  </div>
                  <div className="text-[10px] text-[#666] mt-1.5 leading-[1.45] max-w-[100px]">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating name tag over photo, bottom-right */}
        <div className="absolute z-10 bottom-16 xl:bottom-20 right-6 xl:right-8 opacity-0 animate-fade-up-d4">
          <div
            className="bg-neutral-950/85 backdrop-blur-xl border border-white/[0.07] rounded-2xl px-5 py-4 flex items-center gap-4"
            style={{
              boxShadow:
                "0 0 0 1px rgba(185,255,75,0.08), 0 24px 48px rgba(0,0,0,0.6)",
            }}
          >
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-lime/30">
                <img
                  src={emmanuelImg}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-lime rounded-full border-2 border-neutral-950" />
            </div>
            <div>
              <div className="font-display font-bold text-[13px] leading-tight text-white">
                Emmanuel Okwuidegbe
              </div>
              <div className="font-mono text-[9px] text-[#777] tracking-[0.05em] mt-0.5">
                Senior Frontend Engineer
              </div>
            </div>
            <div className="flex-shrink-0 ml-1 flex items-center gap-1.5 border border-lime/20 bg-lime/[0.06] rounded-full px-3 py-1">
              <span
                className="avail-dot"
                style={{ width: "5px", height: "5px" }}
              />
              <span className="font-mono text-[9px] text-lime uppercase tracking-[0.06em]">
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className="md:hidden flex flex-col min-h-screen px-5 pb-12 pt-24">
        {/* Inline avatar + name row */}
        <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
          <div className="relative flex-shrink-0">
            <div
              className="w-14 h-14 rounded-full overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 2px rgba(185,255,75,0.4), 0 0 0 4px rgba(185,255,75,0.08)",
              }}
            >
              <img
                src={emmanuelImg}
                alt="Emmanuel Okwuidegbe"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-lime rounded-full border-2 border-neutral-950" />
          </div>
          <div>
            <div className="text-[13px] font-semibold leading-tight">
              Emmanuel Okwuidegbe
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className="avail-dot"
                style={{ width: "5px", height: "5px" }}
              />
              <span className="font-mono text-[9px] text-lime uppercase tracking-[0.08em]">
                Available for projects
              </span>
            </div>
          </div>
        </div>

        <h1
          className="font-display font-extrabold leading-[0.92] tracking-[-0.03em] opacity-0 animate-fade-up-d2"
          style={{ fontSize: "clamp(2.6rem, 11vw, 3.8rem)" }}
        >
          Senior <br />
          <em className="not-italic text-lime">Frontend</em> <br />
          <em className="not-italic text-lime">Engineer.</em>
        </h1>

        <p className="mt-5 text-[#888] leading-[1.75] text-[15px] opacity-0 animate-fade-up-d3">
          I help founders and product teams ship clean, fast, production-grade
          web products — without the overhead of a full-time hire.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-up-d4">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="btn-primary justify-center"
          >
            Start a project →
          </a>
          <a
            href="#work"
            onClick={(e) => scrollTo(e, "#work")}
            className="btn-ghost justify-center"
          >
            See my work
          </a>
        </div>

        {/* Cinematic wide crop of photo */}
        <div
          className="mt-8 rounded-2xl overflow-hidden relative opacity-0 animate-fade-up-d4"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={emmanuelImg}
            alt="Okwuidegbe Emmanuel"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 15%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 50%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent opacity-60" />
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-5 pt-7 border-t border-neutral-800 opacity-0 animate-fade-up-d5">
          {HERO_STATS.map((s) => {
            const suffix = s.num.match(/[+%]/)?.[0] ?? "";
            const number = s.num.replace(/[+%]/, "");
            return (
              <div key={s.num}>
                <div
                  className="font-display font-extrabold leading-none"
                  style={{ fontSize: "clamp(1.8rem, 6vw, 2.2rem)" }}
                >
                  {number}
                  <em className="not-italic text-lime">{suffix}</em>
                </div>
                <div className="text-[10px] text-[#666] mt-1.5 leading-[1.45]">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

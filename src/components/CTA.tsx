export default function CTA() {
  return (
    <section
      id="contact"
      className="relative text-center overflow-hidden border-t border-neutral-800
        py-28 md:py-36 px-5"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(185,255,75,0.055), transparent)",
      }}
    >
      {/* Ghost background text */}
      <div className="cta-bg-text" aria-hidden="true">
        LET'S BUILD
      </div>

      <div className="relative z-10">
        <div
          className="flex items-center justify-center gap-2 font-mono text-10 text-lime
          tracking-widest2 uppercase mb-6"
        >
          <span className="w-[18px] h-px bg-lime" />
          Get in touch
        </div>

        <h2
          className="font-display font-extrabold tracking-tight leading-none mb-5"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.8rem)" }}
        >
          Ready to build
          <br />
          something <em className="not-italic text-lime">that works?</em>
        </h2>

        <p
          className="text-[#777] max-w-[480px] mx-auto leading-[1.75] mb-9"
          style={{ fontSize: "clamp(15px, 2vw, 17px)" }}
        >
          Book a free 30-minute call. We'll talk through your project — and if
          it's a fit, we'll scope it out together. No pressure.
        </p>

        <a
          // href="mailto:hello@okwuidegbeemmanuel.com"
          href="mailto:okwuidegbeemmanuel@gmail.com"
          className="btn-primary text-[15px] px-9 py-4 mx-auto"
        >
          Book a free call →
        </a>

        <div
          className="mt-5 flex items-center justify-center gap-2 font-mono text-10
          text-neutral-700 tracking-[0.05em]"
        >
          <span className="avail-dot" />
          Available for new projects · Responds within 16 hrs
        </div>
      </div>
    </section>
  );
}

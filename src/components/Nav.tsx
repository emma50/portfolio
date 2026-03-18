import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] h-16 flex items-center justify-between
          px-5 md:px-10 transition-colors duration-300
          ${scrolled ? "bg-neutral-950/90 backdrop-blur-xl" : "bg-neutral-950/70 backdrop-blur-md"}
          border-b border-neutral-800`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-[13px] text-lime tracking-[0.04em] no-underline"
        >
          {/* OE<span className="text-[#777]">.dev</span> */}
          <img
            src="/icons/about-photo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-[13px] text-[#777] no-underline tracking-[0.02em] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="hidden md:block bg-lime text-neutral-950 text-[12px] font-bold tracking-[0.04em]
            px-4 py-2 rounded-[3px] no-underline transition-all duration-200
            hover:bg-lime-dim hover:-translate-y-px"
        >
          Start a project →
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-1"
        >
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-transform duration-300"
            style={{
              transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-transform duration-300"
            style={{
              transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 top-16 z-[490] flex flex-col items-center justify-center gap-10
          bg-neutral-950/97 backdrop-blur-2xl transition-all duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            className="font-display font-extrabold text-white no-underline transition-colors duration-200 hover:text-lime"
            style={{ fontSize: "clamp(1.8rem, 7vw, 3rem)" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="bg-lime text-neutral-950 text-[15px] font-bold px-8 py-3 rounded-[3px] no-underline mt-2"
        >
          Start a project →
        </a>
      </div>
    </>
  );
}

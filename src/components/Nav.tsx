import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="font-display font-black text-lg text-white tracking-tight"
        >
          <img
            src="/icons/about-photo.jpg"
            alt="Logo"
            className="w-10 h-10 mr-2 rounded-full"
          />
        </a>
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-muted hover:text-white text-sm font-body tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com"
            className="inline-flex items-center bg-accent text-bg font-display font-bold text-xs tracking-widest px-5 py-2.5 hover:opacity-85 transition-opacity"
          >
            {t("nav.hire")}
          </a>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-text transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-text transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-text transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-border ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="w-full text-left text-text font-body py-3 text-base border-b border-border last:border-0 bg-transparent cursor-pointer hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="mailto:okwuidegbeemmanuel@gmail.com"
              className="inline-flex w-full justify-center bg-accent text-bg font-display font-bold text-sm tracking-widest py-3 hover:opacity-85 transition-opacity"
            >
              {t("nav.hire")}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

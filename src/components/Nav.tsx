import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const onPricingPage = location.pathname === "/pricing";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPricingMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPricingOpen(true);
  };
  const closePricingMenu = () => {
    closeTimer.current = setTimeout(() => setPricingOpen(false), 140);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileSubOpen(false);
  }, [location.pathname]);

  const handleSectionNav = (href: string) => {
    setMenuOpen(false);
    if (onPricingPage) {
      navigate("/");
      setTimeout(
        () =>
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
        80,
      );
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetQuote = () => {
    setMenuOpen(false);
    if (onPricingPage) {
      document
        .querySelector("#get-quote")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/pricing?market=ng");
      setTimeout(
        () =>
          document
            .querySelector("#get-quote")
            ?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    }
  };

  const sectionLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const pricingItems = [
    {
      flag: "🇳🇬",
      label: t("nav.pricing_ng"),
      sub: t("pricingPage.market_ng_sub"),
      to: "/pricing?market=ng",
    },
    {
      flag: "🌍",
      label: t("nav.pricing_global"),
      sub: t("pricingPage.market_global_sub"),
      to: "/pricing?market=global",
    },
  ];

  // const links = [
  //   { label: t("nav.about"), href: "#about" },
  //   { label: t("nav.experience"), href: "#experience" },
  //   { label: t("nav.projects"), href: "#projects" },
  //   { label: t("nav.pricing"), href: "#pricing" },
  //   { label: t("nav.contact"), href: "#contact" },
  // ];

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 40);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // const handleNav = (href: string) => {
  //   setMenuOpen(false);
  //   document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/icons/about-photo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {sectionLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleSectionNav(l.href)}
                className="text-muted hover:text-white text-sm font-body tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}

          {/* Pricing dropdown */}
          <li
            className="relative"
            onMouseEnter={openPricingMenu}
            onMouseLeave={closePricingMenu}
          >
            <button
              aria-haspopup="true"
              aria-expanded={pricingOpen}
              className={`flex items-center gap-1.5 text-sm font-body tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer ${onPricingPage ? "text-accent" : "text-muted hover:text-white"}`}
            >
              {t("nav.pricing")}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${pricingOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {pricingOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[272px] bg-surface border border-border shadow-2xl z-50"
                onMouseEnter={openPricingMenu}
                onMouseLeave={closePricingMenu}
              >
                {/* Arrow notch */}
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-surface border-l border-t border-border rotate-45" />
                {pricingItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setPricingOpen(false)}
                    className="flex items-start gap-4 px-5 py-4 text-text hover:bg-white/[0.05] hover:text-accent transition-colors duration-150 border-b border-border last:border-0"
                  >
                    <span className="text-xl mt-0.5 select-none">
                      {item.flag}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-sm leading-snug">
                        {item.label}
                      </p>
                      <p className="text-muted text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={handleGetQuote}
            className="inline-flex items-center border border-border text-text font-display font-bold text-xs tracking-widest px-4 py-2.5 hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer bg-transparent"
          >
            {t("nav.get_quote")}
          </button>
          <a
            href="mailto:okwuidegbeemmanuel@gmail.com"
            className="inline-flex items-center bg-accent text-bg font-display font-bold text-xs tracking-widest px-5 py-2.5 hover:opacity-85 transition-opacity"
          >
            {t("nav.hire")}
          </a>
        </div>

        {/* Mobile toggle */}
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

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-border ${menuOpen ? "max-h-[540px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {sectionLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleSectionNav(l.href)}
                className="w-full text-left text-text font-body py-3 text-base border-b border-border bg-transparent cursor-pointer hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}

          {/* Mobile pricing sub-menu */}
          <li className="border-b border-border">
            <button
              onClick={() => setMobileSubOpen(!mobileSubOpen)}
              className="w-full flex items-center justify-between text-text font-body py-3 text-base bg-transparent cursor-pointer hover:text-accent transition-colors"
            >
              {t("nav.pricing")}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-250 ${mobileSubOpen ? "max-h-40 pb-2" : "max-h-0"}`}
            >
              {pricingItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 pl-3 py-2.5 text-muted text-sm hover:text-accent transition-colors"
                >
                  <span>{item.flag}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </li>

          <li className="pt-3 flex flex-col gap-2">
            <button
              onClick={handleGetQuote}
              className="inline-flex w-full justify-center border border-border text-text font-display font-bold text-sm tracking-widest py-3 hover:border-accent hover:text-accent transition-all cursor-pointer bg-transparent"
            >
              {t("nav.get_quote")}
            </button>
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

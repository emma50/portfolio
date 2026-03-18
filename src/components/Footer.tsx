const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "GitHub ↗", href: "https://github.com/emma50", external: true },
  {
    label: "LinkedIn ↗",
    href: "https://linkedin.com/in/okwuidegbeemmanuel",
    external: true,
  },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className="border-t border-neutral-800 px-5 md:px-10 py-7 md:py-9
      flex flex-wrap items-center justify-between gap-4"
    >
      {/* Logo */}
      <div className="font-mono text-[12px] text-[#777]">
        Okwuidegbe Emmanuel<em className="not-italic text-lime">.dev</em>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-5 md:gap-7">
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            onClick={(e) => scrollTo(e, l.href)}
            className="text-[12px] text-[#777] no-underline tracking-[0.02em]
              transition-colors duration-200 hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="w-full font-mono text-10 text-neutral-700 tracking-[0.04em] mt-1">
        Senior Frontend Engineer · React · Next.js · TypeScript · ©{" "}
        {new Date().getFullYear()} Okwuidegbe Emmanuel
      </div>
    </footer>
  );
}

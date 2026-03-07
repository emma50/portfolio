import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLocale } from '../i18n'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = SUPPORTED_LANGUAGES.find(
    (l) => l.code === i18n.resolvedLanguage
  ) ?? SUPPORTED_LANGUAGES[0]

  const handleChange = (code: SupportedLocale) => {
    i18n.changeLanguage(code)
    setOpen(false)
    // Update <html lang=""> for screen readers + SEO crawlers
    document.documentElement.lang = code
  }

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-2 border border-border bg-transparent text-muted hover:text-text hover:border-muted transition-all duration-200 px-3 py-2 text-sm font-display font-semibold cursor-pointer"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-1.5 bg-surface border border-border shadow-xl z-50 min-w-[140px]"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === current.code}>
              <button
                onClick={() => handleChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-body text-left cursor-pointer transition-colors duration-150 ${
                  lang.code === current.code
                    ? 'text-accent bg-accent/5'
                    : 'text-muted hover:text-text hover:bg-white/4'
                }`}
              >
                <span aria-hidden="true">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === current.code && (
                  <svg className="w-3.5 h-3.5 ml-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

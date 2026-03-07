import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const;

export type SupportedLocale = (typeof SUPPORTED_LANGUAGES)[number]["code"];

i18n
  // 1. Lazy-load locale JSON files from /public/locales/{lng}/{ns}.json
  //    Only the active language is fetched — never all three upfront.
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  // 2. Detect language from: localStorage → navigator → htmlTag → fallback
  .use(LanguageDetector)
  // 3. Bind to React
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    defaultNS: "translation",
    ns: ["translation"],

    detection: {
      // Priority order for language detection
      order: ["localStorage", "navigator", "htmlTag"],
      // Persist the user's choice in localStorage
      caches: ["localStorage"],
      lookupLocalStorage: "i18n_lang",
    },

    interpolation: {
      // React already escapes output — no double-escaping needed
      escapeValue: false,
    },
  });
// Sync <html lang=""> on every language change (covers initial load + user switches)
i18n.on("languageChanged", (lng: string) => {
  document.documentElement.lang = lng;
});

export default i18n;

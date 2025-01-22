import { translations, Language } from "@/lib/translations";

export function getTranslations(lang: Language | undefined) {
  return translations[lang || "en"];
}

export type TranslationResourceT = {
  es: string;
  en: string;
  pt: string;
};

const SUPPORTED_LANGUAGES = ["es", "en"] as const;
type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const returnTranslation = (
  resource: TranslationResourceT | string
): string => {
  if (typeof resource === "string") return resource;

  const lang = navigator.languages
    ?.find((l) => SUPPORTED_LANGUAGES.includes(l.slice(0, 2) as Language))
    ?.slice(0, 2) as Language | undefined;

  return resource[lang ?? "es"];
};

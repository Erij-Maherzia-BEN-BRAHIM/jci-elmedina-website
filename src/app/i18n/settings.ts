export const fallbackLng = "us";
export const languages = [fallbackLng, "fr", "tn"] as const;
export const defaultNS = "translation";
export const cookieName = "i18next";
export type Locale = (typeof languages)[number];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
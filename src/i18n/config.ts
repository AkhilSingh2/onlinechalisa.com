/**
 * Locale registry for site-wide i18n.
 *
 * The default locale (`en`) is served at the site root; every other
 * locale is served under a URL prefix (`/hi/`, `/bn/`, …). Keep this
 * list in sync with the `i18n.locales` array in `astro.config.mjs`.
 */

export const DEFAULT_LOCALE = 'en' as const;

export type Locale = 'en' | 'hi' | 'bn' | 'te' | 'ta' | 'kn';

export const LOCALES: Locale[] = ['en', 'hi', 'bn', 'te', 'ta', 'kn'];

export interface LocaleMeta {
  /** Short label used in the language switcher. */
  label: string;
  /** Endonym (name of the language in its own script). */
  native: string;
  /** BCP-47 tag emitted in <html lang> and hreflang. */
  htmlLang: string;
  /** OpenGraph locale (xx_YY). */
  ogLocale: string;
  /** Text direction — all supported scripts are LTR today. */
  dir: 'ltr' | 'rtl';
  /**
   * The reader `data-script` value this UI locale should default to
   * for the devotional verse text (the verses themselves are the same
   * Awadhi words rendered in different scripts). English UI still shows
   * Devanagari verses by default.
   */
  defaultScript: 'hi' | 'te' | 'ta' | 'kn' | 'bn';
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: {
    label: 'English',
    native: 'English',
    htmlLang: 'en',
    ogLocale: 'en_IN',
    dir: 'ltr',
    defaultScript: 'hi',
  },
  hi: {
    label: 'हिन्दी',
    native: 'हिन्दी',
    htmlLang: 'hi',
    ogLocale: 'hi_IN',
    dir: 'ltr',
    defaultScript: 'hi',
  },
  bn: {
    label: 'বাংলা',
    native: 'বাংলা',
    htmlLang: 'bn',
    ogLocale: 'bn_IN',
    dir: 'ltr',
    defaultScript: 'bn',
  },
  te: {
    label: 'తెలుగు',
    native: 'తెలుగు',
    htmlLang: 'te',
    ogLocale: 'te_IN',
    dir: 'ltr',
    defaultScript: 'te',
  },
  ta: {
    label: 'தமிழ்',
    native: 'தமிழ்',
    htmlLang: 'ta',
    ogLocale: 'ta_IN',
    dir: 'ltr',
    defaultScript: 'ta',
  },
  kn: {
    label: 'ಕನ್ನಡ',
    native: 'ಕನ್ನಡ',
    htmlLang: 'kn',
    ogLocale: 'kn_IN',
    dir: 'ltr',
    defaultScript: 'kn',
  },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as string[]).includes(value);
}

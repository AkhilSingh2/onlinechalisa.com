/**
 * i18n helpers: locale extraction, path localization, translation
 * lookup (with automatic per-string English fallback) and hreflang
 * alternate generation.
 */

import { DEFAULT_LOCALE, LOCALES, LOCALE_META, isLocale, type Locale } from './config';
import { ui } from './ui';

/** Read the active locale from a URL pathname (`/hi/about` → `hi`). */
export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1];
  return isLocale(seg) ? seg : DEFAULT_LOCALE;
}

/**
 * Locale of the page the visitor opened.
 *
 * With `fallbackType: 'rewrite'`, Astro serves `/hi/...` by rewriting it
 * onto the English page, and `Astro.url` then has no locale prefix. The
 * address the visitor typed is `originPathname`.
 */
export function getLang(astro: { url: URL; originPathname: string }): Locale {
  const path = astro.originPathname || astro.url.pathname;
  return getLangFromUrl(new URL(path, astro.url.origin));
}

/**
 * Strip a leading locale prefix from a pathname, returning the
 * canonical (default-locale) path. `/hi/about` → `/about`, `/` → `/`.
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/');
  if (isLocale(parts[1])) {
    const rest = '/' + parts.slice(2).join('/');
    return rest === '/' ? '/' : rest.replace(/\/$/, '');
  }
  return pathname === '/' ? '/' : pathname.replace(/\/$/, '');
}

/**
 * Localize a canonical (default-locale) path for a target locale.
 * The default locale has no prefix; others get `/<locale>` prepended.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

type Dict = Record<string, string>;

/**
 * Return a translator bound to `locale`. Missing keys fall back to the
 * English string, then to the raw key — so partial translations never
 * render blanks.
 */
export function useTranslations(locale: Locale) {
  const table = ui[locale] as Dict;
  const fallback = ui[DEFAULT_LOCALE] as Dict;
  return function t(key: string): string {
    return table[key] ?? fallback[key] ?? key;
  };
}

/** True when `locale` actually has its own string for `key`. */
export function hasTranslation(locale: Locale, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(ui[locale] ?? {}, key);
}

export interface AltLink {
  locale: Locale;
  hreflang: string;
  href: string;
}

/**
 * Build the hreflang alternate set (plus x-default) for a canonical
 * pathname. `origin` should be the absolute site origin without a
 * trailing slash (e.g. https://onlinechalisa.com).
 */
export function getAlternateLinks(pathname: string, origin: string): AltLink[] {
  const canonical = stripLocale(pathname);
  const links: AltLink[] = LOCALES.map((locale) => ({
    locale,
    hreflang: LOCALE_META[locale].htmlLang,
    href: origin + localizePath(canonical, locale),
  }));
  links.push({
    locale: DEFAULT_LOCALE,
    hreflang: 'x-default',
    href: origin + canonical,
  });
  return links;
}

export { DEFAULT_LOCALE, LOCALES, LOCALE_META, type Locale };

/**
 * Locale auto-detection middleware.
 *
 * First-time visitors whose browser prefers a supported non-default
 * language are redirected once from the un-prefixed (English) URL to
 * their language's URL (`/` → `/hi`, `/about` → `/bn/about`, …). The
 * choice is remembered in the `oc-lang` cookie, so:
 *   - we never redirect twice (no loops), and
 *   - a manual switch back to English is respected.
 *
 * Search-engine crawlers (which generally send no `Accept-Language`)
 * get `preferredLocale === undefined`, so they always see the English
 * root — the canonical, crawlable version — while hreflang tags in the
 * <head> advertise every localized alternate.
 */

import { defineMiddleware } from 'astro:middleware';
import { DEFAULT_LOCALE, isLocale } from './i18n/config';
import { localizePath, stripLocale } from './i18n/utils';

const COOKIE = 'oc-lang';
const ONE_YEAR = 60 * 60 * 24 * 365;

/** Only real page navigations — skip assets, sitemap.xml, robots.txt, etc. */
function isDocumentPath(pathname: string): boolean {
  const last = pathname.split('/').pop() ?? '';
  if (last.includes('.')) return false;
  if (pathname.startsWith('/_')) return false;
  return true;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request } = context;
  const pathname = url.pathname;
  const firstSeg = pathname.split('/')[1];
  const urlLocale = isLocale(firstSeg) ? firstSeg : DEFAULT_LOCALE;

  const consider = request.method === 'GET' && isDocumentPath(pathname);

  if (consider) {
    const cookieLang = context.cookies.get(COOKIE)?.value;
    const preferred = context.preferredLocale;

    if (
      urlLocale === DEFAULT_LOCALE &&
      !cookieLang &&
      preferred &&
      isLocale(preferred) &&
      preferred !== DEFAULT_LOCALE
    ) {
      const target = localizePath(stripLocale(pathname), preferred) + url.search;
      const res = context.redirect(target, 302);
      res.headers.append(
        'Set-Cookie',
        `${COOKIE}=${preferred}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax`,
      );
      res.headers.append('Vary', 'Accept-Language, Cookie');
      return res;
    }
  }

  const response = await next();

  if (consider) {
    const cookieLang = context.cookies.get(COOKIE)?.value;
    if (cookieLang !== urlLocale) {
      try {
        context.cookies.set(COOKIE, urlLocale, {
          path: '/',
          maxAge: ONE_YEAR,
          sameSite: 'lax',
        });
      } catch {
        /* Response may already be committed; ignore. */
      }
    }
    const vary = response.headers.get('Vary');
    if (!vary || !/accept-language/i.test(vary)) {
      response.headers.append('Vary', 'Accept-Language, Cookie');
    }
  }

  return response;
});

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LOCALES, DEFAULT_LOCALE } from '../i18n/config';
import { localizePath } from '../i18n/utils';

const SITE = 'https://onlinechalisa.com';

export const GET: APIRoute = async () => {
  const chalisas = await getCollection('chalisas');
  const paath = await getCollection('paath');

  const staticPaths: { loc: string; priority: string; changefreq: string }[] = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.5', changefreq: 'monthly' },
    { loc: '/sankalp', priority: '0.7', changefreq: 'monthly' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
  ];

  const dynamicPaths = [
    ...chalisas.map((entry) => ({
      loc: `/chalisa/${entry.data.slug}`,
      priority: entry.data.slug === 'hanuman' ? '0.95' : '0.8',
      changefreq: 'monthly',
    })),
    ...paath.map((entry) => ({
      loc: `/paath/${entry.data.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
  ];

  const today = new Date().toISOString().slice(0, 10);
  const allPaths = [...staticPaths, ...dynamicPaths];

  // For each canonical path, emit one <url> per locale. Every entry
  // advertises the full set of hreflang alternates (plus x-default →
  // the default-locale URL) so search engines serve the right language.
  const urls = allPaths
    .flatMap((p) => {
      const alternates = [
        ...LOCALES.map(
          (loc) =>
            `      <xhtml:link rel="alternate" hreflang="${loc}" href="${SITE}${localizePath(
              p.loc,
              loc,
            )}" />`,
        ),
        `      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${localizePath(
          p.loc,
          DEFAULT_LOCALE,
        )}" />`,
      ].join('\n');

      return LOCALES.map(
        (loc) => `  <url>
    <loc>${SITE}${localizePath(p.loc, loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${alternates}
  </url>`,
      );
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://onlinechalisa.com';

export const GET: APIRoute = async () => {
  const chalisas = await getCollection('chalisas');

  const staticPaths: { loc: string; priority: string; changefreq: string }[] = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.5', changefreq: 'monthly' },
    { loc: '/sankalp', priority: '0.7', changefreq: 'monthly' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
  ];

  const dynamicPaths = chalisas.map((entry) => ({
    loc: `/chalisa/${entry.data.slug}`,
    priority: entry.data.slug === 'hanuman' ? '0.95' : '0.8',
    changefreq: 'monthly',
  }));

  const today = new Date().toISOString().slice(0, 10);
  const urls = [...staticPaths, ...dynamicPaths]
    .map(
      (p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

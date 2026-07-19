// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  output: 'server',
  site: 'https://onlinechalisa.com',
  i18n: {
    locales: ['en', 'hi', 'bn', 'te', 'ta', 'kn'],
    defaultLocale: 'en',
    routing: {
      // English lives at the root ("/"); every other language is prefixed
      // ("/hi/", "/bn/", …). Untranslated pages are *rewritten* (not
      // redirected) to the English source file, so a single set of pages
      // in src/pages/ serves every locale with Astro.currentLocale set
      // from the URL prefix.
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite',
    },
    fallback: {
      hi: 'en',
      bn: 'en',
      te: 'en',
      ta: 'en',
      kn: 'en',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

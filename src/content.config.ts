import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const verseSchema = z.object({
  n: z.number().int().nonnegative(),
  type: z.enum(['doha', 'chaupai', 'sortha']).default('chaupai'),
  hi: z.string(),
  en: z.string(),
});

const chalisas = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/chalisas' }),
  schema: z.object({
    title: z.string(),
    deity: z.string(),
    slug: z.string(),
    order: z.number().int().default(99),
    tagline: z.string(),
    description: z.string(),
    color: z.string().default('#c96a1a'),
    audioUrl: z.string().optional(),
    audioAttribution: z.string().optional(),
    tradition: z.string().optional(),
    verses: z.array(verseSchema).min(1),
  }),
});

export const collections = { chalisas };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ministries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ministries' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    glyph: z.string().max(1),
    eyebrow: z.string(),
    summary: z.string(),
    description: z.string(),
    when: z.string(),
    forWhom: z.string(),
    verse: z.string(),
    verseRef: z.string(),
    order: z.number(),
    seoDescription: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
});

export const collections = { ministries };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()),
    abstract: z.string(),
    venue: z.string().optional(),
    pdf: z.string().optional(),
    arxiv: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, papers };

import { getCollection } from 'astro:content';

// Drafts show up in `npm run dev` but never in the published build.
const visible = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !data.draft;

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getPosts() {
  return (await getCollection('writing', visible)).sort(newestFirst);
}

export async function getPapers() {
  return (await getCollection('papers', visible)).sort(newestFirst);
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

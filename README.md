# Personal research site

Astro site deployed to GitHub Pages on every push to `master`.

- `npm run dev`: preview at http://localhost:4321 (drafts visible)
- `npm run build`: production build into `dist/` (drafts hidden)

## Publishing

- Essays: add `src/content/writing/<slug>.md` (or `.mdx` for interactive components).
  Frontmatter: `title`, `date`, optional `description`, `draft: true` to hide.
- Papers: add `src/content/papers/<slug>.md` with `title`, `date`, `authors`, `abstract`,
  and `pdf` (put the file in `public/papers/`) or `arxiv`.
- Math: `$inline$` and `$$display$$`, rendered with KaTeX at build time.
- Plots: put SVG/PNG next to the post and use `![Caption](./plot.svg)`.

Site name and links live in `src/config.ts`.

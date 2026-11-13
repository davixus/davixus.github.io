# Small Questions, Clear Answers

[Visit the published site](https://davixus.github.io/)

A small static website built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). It starts with three short explainers:

- [Why is the sky blue?](src/content/docs/why-is-the-sky-blue.md)
- [Understanding memory latency](src/content/docs/memory-latency.md)
- [Softball HLP vs. a traditional swing](src/content/docs/softball-hlp-vs-traditional-batter.md)

The site is configured for the GitHub Pages user site at <https://davixus.github.io>.

## Run locally

Install dependencies and start Astro’s development server:

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
```

The generated static site is written to `dist/`.

## Add a post

Add a Markdown file under `src/content/docs/` with a title and description in its frontmatter. The Starlight sidebar is configured in `astro.config.mjs`; add a sidebar item there to list the new post.

## Deploy

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages whenever code is pushed to `main`. It can also be started manually from the repository’s Actions tab. In the repository’s Pages settings, select **GitHub Actions** as the deployment source.

# Laguna Beach, Explained

Static website for lagunabeachexplained.com. Plain HTML, CSS and images; no build step.
Published with Cloudflare Pages from the `main` branch (framework preset: None, no build command, output directory: root).

## Pages

Each page is one `.html` file at the root and is served without the extension (`north-laguna.html` is `/north-laguna`), matching the addresses the site had on Squarespace. `_redirects` covers the old `/the-five-areas`, `/home` and `/cart` addresses.

- `index.html` home
- `north-laguna.html`, `laguna-canyon.html`, `downtown.html`, `the-village.html`, `south-laguna.html` the five areas
- `whats-working.html`, `projects.html`, `market-notes.html`, `about.html`

When adding a page, also add it to the header and footer menus on every page and to `sitemap.xml`.

## Images

All images live in `img/`. Each page's `og:image` tag sets the photo shown when the link is texted or shared.

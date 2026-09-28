# leuria.eu

The website that presents Leuria to the people who use it: what it is, how it works, privacy, the download, and a page for site owners. The developer portal is a separate site, leuria.dev (in the `leuria` repo, `apps/portal`).

Built with [Astro](https://astro.build): static pages, no framework in the browser. The one live part is the "Try it here" block on the home page, which uses Leuria's own `<leuria-connect-button>` and `@leuria/client`.

## Develop

You need Node 22+ and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:5190
pnpm build      # static site in dist/
pnpm check      # type-check the .astro files
```

Until the Leuria packages are on npm, `pnpm-workspace.yaml` links `@leuria/client` and `@leuria/connect` from the `leuria` repo next to this one (`../leuria`). Build them there first (`pnpm build`) after changing them.

## Where things are

| What | Where |
| --- | --- |
| Download links, per platform | `src/data/site.ts`: set `url` when a build is published; until then the site says "Not available yet" |
| Pages | `src/pages/`: `index.astro`, `download.astro`, `websites.astro` |
| Design tokens | `src/styles/tokens.css`, a copy of `design_system/tokens.css` (Leuria Pearl) |
| Hero illustration | `src/components/HeroScene.astro`, drawn in HTML |
| Live demo | `src/components/TryIt.astro` |

Copy follows the Leuria Pearl rules (`design_system/README.md`): the visitor's words, no jargon, sentence case, one ink action per view.

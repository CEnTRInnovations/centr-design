# @centrinnovations/design

Shared design tokens, typography, and icon conventions for the CEnTR* System tool suite
(CEnTR\*CANON, CEnTR\*SEEK, and future tools). This package is a Tailwind CSS preset plus a
small icon-convention module — not a runtime service. It's consumed at build time by each
tool's own frontend.

Source of truth: colors and typography originate from CEnTR\*CANON's `_brand.yml` (its R Shiny
predecessor) and were extended as the suite's Next.js app evolved. **This repo, not `_brand.yml`,
is now the canonical, live source** — `_brand.yml` is historical origin material only.

## What's in here

- `tailwind.config.ts` — a Tailwind preset exporting the `canon.*` color palette and the suite's
  actual font stack (Alegreya Sans / Alegreya / JetBrains Mono — **not** Inter, which never
  shipped anywhere despite an earlier config claiming it did).
- `icons.ts` — the Material Symbols (Outlined) stylesheet URL and class-name convention used
  for all iconography across the suite.

## Installing in a consuming app

This package is distributed as a **git dependency**, not published to npm — install directly
from this repo:

```bash
npm install github:CEnTRInnovations/centr-design#v0.1.0
```

Pin to a tag (`#v0.1.0`), not `#main` — `main` will move as tokens change, and an unpinned
consumer will pick up new tokens on every `npm install` with no warning. Bump the tag reference
deliberately when you want the update.

### Using the Tailwind preset

```ts
// tailwind.config.ts in the consuming app
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('@centrinnovations/design/tailwind.config').default],
  content: [/* ... */],
  theme: {
    extend: {
      // app-specific additions only — border radii, spacing, font sizes, etc.
      // do NOT redeclare `colors.canon` or `fontFamily` here; that's what the preset is for.
    },
  },
}

export default config
```

### Using the icon convention

```ts
import { MATERIAL_SYMBOLS_STYLESHEET_URL } from '@centrinnovations/design/icons'
```

Load the stylesheet once (e.g. a `<link>` in the root layout), then use
`<span className="material-symbols-outlined">icon_name</span>` anywhere.

## Versioning

No CI/release automation yet — tag manually (`git tag v0.1.1 && git push --tags`) when tokens
change, and treat the tag as the unit of change consuming apps pin to. If this grows beyond two
or three consuming tools, revisit whether a real registry (GitHub Packages or similar) is worth
the setup cost — see the discussion in `centr-seek`'s
`docs/handoff/HANDOFF-dockerize-design-do-auth0.md`.

## Consuming tools

- **CEnTR\*CANON** (`centrcanonapp-next`) — `apps/web`, the original source these tokens were
  extracted from.
- **CEnTR\*SEEK** (`centr-seek`) — adopting this preset as part of its design-system handoff
  item; see that repo's `docs/handoff/HANDOFF-dockerize-design-do-auth0.md` §2.
# centr-design

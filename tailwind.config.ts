import type { Config } from 'tailwindcss'

export const canonColors = {
  // Neutral surface tokens (from _brand.yml defaults)
  foreground:  '#1F1A14',
  paper:       '#F1EAD9',
  'paper-bright': '#FAF6EE',  // brighter card/surface tone — from Apiary Hive, absorbed 2026-07-12
  'paper-canvas': '#EAE0CA',  // canvas/inset surface tone — from Apiary Hive, absorbed 2026-07-12
  sand:        '#E8DFC9',
  border:      '#D8CDB2',
  muted:       '#8A7F6B',
  'muted-ink': '#6B6152',   // darker muted text for labels/values that must be read — AA-passing; #8A7F6B stays for decorative-only muted marks
  ink:         '#4D453A',

  // Semantic color tokens (from _brand.yml color_palette)
  brown:       '#4E342E',
  denim:       '#3F5E78',
  navy:        '#1E325C',
  forest:      '#3B6B35',
  signal:      '#8E2A2A',
  clay:        '#B8754A',
  gold:        '#C49A3A',

  // Earthtone palette (cluster coloring in visualizations)
  crimson:     '#990000',
  walnut:      '#6B4226',
  caramel:     '#A47551',
  sage:        '#8A9A5B',
  olive:       '#556B2F',
  slate:       '#3B4D61',
  amber:       '#B86B2A',
  plum:        '#66435A',

  // Layer palette (pipeline coloring)
  anchoring:   '#4A4A4A',
  integration: '#3A6F6A',
  leverage:    '#C6A15B',

  // Surface tint
  parchment:   '#F5F0E8',   // map background, legend panel, label halo base

  // Button fill tints — alpha overlays of canon-denim and canon-brown
  'ci-primary-bg':   'rgba(63,94,120,0.13)',
  'ci-strong-bg':    'rgba(63,94,120,0.22)',
  'ci-secondary-bg': 'rgba(78,52,46,0.08)',
}

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: { canon: canonColors },
      // Actual typefaces rendered by the suite's apps — NOT Inter, which never shipped
      // anywhere. Consuming apps must load these families themselves (next/font, @import,
      // or <link>); this config only sets the Tailwind utility mapping.
      fontFamily: {
        sans:  ['Alegreya Sans', 'sans-serif'],
        serif: ['Alegreya', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      // Heading/body type scale — promoted from Apiary Hive's local package 2026-07-12
      // (the first consumer to actually build one out). Distinct key names from CANON's
      // own local label-*/title-*/display-* scale (kept app-local in apps/web/tailwind.config.ts),
      // so this is purely additive — it does not collide with or replace CANON's scale.
      fontSize: {
        display: ['3rem',   { lineHeight: '0.98' }],
        h2:      ['1.8rem', { lineHeight: '1.2' }],
        h3:      ['1.32rem',{ lineHeight: '1.2' }],
        lede:    ['1.2rem', { lineHeight: '1.4' }],
        body:    ['1rem',   { lineHeight: '1.5' }],
        meta:    ['0.8rem', { lineHeight: '1.4' }],
        eyebrow: ['0.7rem', { lineHeight: '1' }],
      },
      // Promoted from Apiary Hive's local package 2026-07-12. `card` differs in intent from
      // CANON's own local `rounded-card` (12px, in apps/web/tailwind.config.ts) — CANON's local
      // override wins for CANON's own build, so this doesn't change CANON's rendering; it just
      // gives Apiary Hive (which had no local override) the same value it already had.
      borderRadius: {
        control: '3px',
        card:    '6px',
        panel:   '10px',
      },
      // Promoted from Apiary Hive's local package 2026-07-12.
      boxShadow: {
        field: '0 2px 12px rgba(62,59,53,0.10), 0 1px 3px rgba(62,59,53,0.07)',
      },
    },
  },
}

export default config

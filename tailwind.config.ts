import type { Config } from 'tailwindcss'

export const canonColors = {
  // Neutral surface tokens (from _brand.yml defaults)
  foreground:  '#1F1A14',
  paper:       '#F1EAD9',
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
    },
  },
}

export default config

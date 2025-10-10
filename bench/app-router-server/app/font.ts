import { clsx } from 'clsx'

import { Geist, Geist_Mono } from 'next/font/google'

export const geistSansFont = Geist({
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
  fallback: ['Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
})

export const geistMonoFont = Geist_Mono({
  display: 'block',
  variable: '--font-mono',
  subsets: ['latin'],
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Roboto Mono',
    'Menlo',
    'Monaco',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Courier New',
    'monospace',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
})

export const geistFontClasses = clsx(
  geistMonoFont.variable,
  geistSansFont.variable
)

export const geistCharacterWidths = {
  '0': 680,
  '1': 406,
  '2': 630,
  '3': 626,
  '4': 651,
  '5': 641,
  '6': 636,
  '7': 589,
  '8': 625,
  '9': 638,
  A: 695,
  B: 688,
  C: 711,
  D: 708,
  E: 610,
  F: 596,
  G: 718,
  H: 709,
  I: 282,
  J: 608,
  K: 670,
  L: 584,
  M: 890,
  N: 742,
  O: 756,
  P: 658,
  Q: 750,
  R: 681,
  S: 659,
  T: 596,
  U: 695,
  V: 694,
  W: 938,
  X: 659,
  Y: 652,
  Z: 561,
  a: 590,
  b: 611,
  c: 569,
  d: 611,
  e: 582,
  f: 416,
  g: 611,
  h: 592,
  i: 258,
  j: 284,
  k: 610,
  l: 299,
  m: 885,
  n: 592,
  o: 594,
  p: 611,
  q: 611,
  r: 398,
  s: 546,
  t: 414,
  u: 587,
  v: 562,
  w: 830,
  x: 608,
  y: 555,
  z: 565,
  '!': 230,
  '@': 930,
  '#': 515,
  $: 659,
  '%': 794,
  '^': 408,
  '&': 651,
  '*': 433,
  '(': 325,
  ')': 325,
  _: 564,
  '+': 565,
  '-': 425,
  '=': 648,
  '[': 352,
  ']': 352,
  '{': 426,
  '}': 426,
  ';': 298,
  "'": 192,
  ':': 298,
  '"': 369,
  ',': 215,
  '.': 215,
  '/': 496,
  '<': 545,
  '>': 549,
  '?': 577,
  '~': 532,
  '\\': 492,
  '|': 275,
}

// The above was created with the following

// const ALL_CHARS = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':\",./<>?~\\|`;
// const chars = {};
// for (const character of ALL_CHARS) {
//   const glyph = geistFontReference.charToGlyph(character);
//   const width = glyph.advanceWidth ?? 0;
//   chars[character] = width;
// }
// console.log(JSON.stringify(chars));

// 1

export const Soft = {
  Honorific: 'honorific',
  Tickle: 'Tickle',
  Hug: 'Hug',
  Stroke: 'Stroke',
  Kiss: 'Kiss',
  DeepKiss: 'Deep Kiss',
};

export type Soft = typeof Soft[keyof typeof Soft];
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

export const softArray: Soft[] = [
  Soft.Honorific,
  Soft.Tickle,
  Soft.Hug,
  Soft.Stroke,
  Soft.Kiss,
  Soft.DeepKiss,
];
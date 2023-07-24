// 3

export const Tool = {
  Eyepatch: 'Eyepatch',
  Gag: 'Gag',
  NippleClamp: 'Nipple Clamp',
  Mask: 'Mask',
  ChastityBelt: 'Chastity Belt',
  NoseHook: 'Nose Hook',
  Fairy: 'Fairy',
  EggVibrator: 'Egg Vibrator',
  ClitInhaler: 'Clitoris Inhaler',
  ArtificialVagina: 'Artifical Vagina',
  Dildo: 'Dildo',
  StrapOnDildo: 'Strap on Dildo',
};

export type Tool = typeof Tool[keyof typeof Tool];
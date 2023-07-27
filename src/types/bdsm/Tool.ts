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

export const toolArray: Tool[] = [
  Tool.Eyepatch,
  Tool.Gag,
  Tool.NippleClamp,
  Tool.Mask,
  Tool.ChastityBelt,
  Tool.NoseHook,
  Tool.Fairy,
  Tool.EggVibrator,
  Tool.ClitInhaler,
  Tool.ArtificialVagina,
  Tool.Dildo,
  Tool.StrapOnDildo,
];
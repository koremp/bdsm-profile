// 3

export const Physical = {
  PullHair: 'Pull Hair',
  Press: 'Press',
  Claw: 'Claw',
  Bite: 'Bite',
  BreathControl: 'Breath Control',
  OrgasmControl: 'Orgasm Control',
  MultiOrgasm: 'Multi Orgasm',
  BallBusting: 'Ball Busting',
  Needle: 'Needle',
  Blood: 'Blood',
  Torture: 'Torture',
  Lynch: 'Lynch',
};

export type Physical = typeof Physical[keyof typeof Physical];

export const physicalArray: Physical[] = [
  Physical.PullHair,
  Physical.Press,
  Physical.Claw,
  Physical.Bite,
  Physical.BreathControl,
  Physical.OrgasmControl,
  Physical.MultiOrgasm,
  Physical.BallBusting,
  Physical.Needle,
  Physical.Blood,
  Physical.Torture,
  Physical.Lynch,
];

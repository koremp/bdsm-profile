// 3

export const Bondage = {
  Necktie: 'Necktie',
  Belt: 'Belt',
  Harness: 'Harness',
  Leader: 'Leader',
  BondageTape: 'Bondage Tape',
  Cuff: 'Cuff',
  SpreaderBar: 'Spreader Bar',
  Straitjacket: 'Straitjacket',
  Rope: 'Rope',
  Hanging: 'Hanging',
  Water: 'Water',
};

export type Bondage = typeof Bondage[keyof typeof Bondage];
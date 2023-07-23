// 1

export const Erogenous = {
  Lip: 'Lip',
  Tongue: 'Tongue',
  Ear: 'Ear',
  Neck: 'Neck',
  Armpit: 'Armpit',
  Chest: 'Chest',
  Hand: 'Hand',
  Wrist: 'Wrist',
  Hip: 'Hip',
  Thigh: 'Thigh',
  Calf: 'Calf',
  Foot: 'Foot',
  SexualOrgan: 'Sexual Organ',
  Anal: 'Anal',
};

export type Erogenous = typeof Erogenous[keyof typeof Erogenous];
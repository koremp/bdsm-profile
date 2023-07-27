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
  Genitals: 'Genitals',
  Anal: 'Anal',
};

export type Erogenous = typeof Erogenous[keyof typeof Erogenous];

export const erogenousArray: Erogenous[] = [
  Erogenous.Lip,
  Erogenous.Tongue,
  Erogenous.Ear,
  Erogenous.Neck,
  Erogenous.Armpit,
  Erogenous.Chest,
  Erogenous.Hand,
  Erogenous.Wrist,
  Erogenous.Hip,
  Erogenous.Thigh,
  Erogenous.Calf,
  Erogenous.Foot,
  Erogenous.Genitals,
  Erogenous.Anal,
];
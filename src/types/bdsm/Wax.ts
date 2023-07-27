// 4

export const Wax = {
  Hand: 'Hand',
  Arm: 'Arm',
  Shoulder: 'Shoulder',
  Chest: 'Chest',
  Back: 'Back',
  Foot: 'Foot',
  Calf: 'Calf',
  FrontThigh: 'Front Thigh',
  BackThigh: 'Back Thigh',
  Genitals: 'Genitals',
  Anal: 'Anal',
};

export type Wax = typeof Wax[keyof typeof Wax];

export const waxArray: Wax[] = [
  Wax.Hand,
  Wax.Arm,
  Wax.Shoulder,
  Wax.Chest,
  Wax.Back,
  Wax.Foot,
  Wax.Calf,
  Wax.FrontThigh,
  Wax.BackThigh,
  Wax.Genitals,
  Wax.Anal,
];
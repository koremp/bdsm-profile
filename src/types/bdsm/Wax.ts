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
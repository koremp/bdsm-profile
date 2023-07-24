// 5

export const Spanking = {
  Hand: 'Hand',
  Belt: 'Belt',
  Kane: 'Kane',
  Paddle: 'Paddle',
  CropWhip: 'Crop Whip',
  Whip: 'Whip',
  Palm: 'Palm',
  Arm: 'Arm',
  Cheek: 'Cheek',
  Chest: 'Chest',
  Back: 'Back',
  Sole: 'Sole',
  Calf: 'Calf',
  Hip: 'Hip',
  FrontThigh: 'Front Thigh',
  BackThigh: 'Back Thigh',
  Genitals: 'Genitals',
  Anal: 'Anal',
};

export type Spanking = typeof Spanking[keyof typeof Spanking];
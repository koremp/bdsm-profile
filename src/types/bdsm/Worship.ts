// 2

export const Worship = {
  Hand: 'Hand',
  Foot: 'Foot',
  Shoe: 'Shoe',
  Chest: 'Chest',
  SexualOrgan: 'Sexual Organ',
  Organ: 'Organ',
};

export type Worship = typeof Worship[keyof typeof Worship];
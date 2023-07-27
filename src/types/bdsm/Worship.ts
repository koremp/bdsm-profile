// 2

export const Worship = {
  Hand: 'Hand',
  Foot: 'Foot',
  Shoe: 'Shoe',
  Chest: 'Chest',
  Genitals: 'Genitals',
  Anal: 'Anal',
};

export type Worship = typeof Worship[keyof typeof Worship];

export const worshipArray: Worship[] = [
  Worship.Hand,
  Worship.Foot,
  Worship.Shoe,
  Worship.Chest,
  Worship.Genitals,
  Worship.Anal,
];
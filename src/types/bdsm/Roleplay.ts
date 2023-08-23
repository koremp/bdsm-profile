// 6

export const Roleplay = {
  Cat: 'Cat',
  Dog: 'Dog',
  Baby: 'Baby',
  Roleplay: 'Roleplay',
  SituationPlay: 'Situation Play',
  AgePlay: 'Age Play',
  Doll: 'Doll',
  Furniture: 'Furniture',
  HorseRiding: 'Horse Riding',
  Livestock: 'Livestock',
  Slave: 'Slave',
  Forced: 'Forced',
};

export type Roleplay = typeof Roleplay[keyof typeof Roleplay];

export const roleplayArray: Roleplay[] = [
  Roleplay.Cat,
  Roleplay.Dog,
  Roleplay.Baby,
  Roleplay.SituationPlay,
  Roleplay.AgePlay,
  Roleplay.AgePlay,
  Roleplay.Doll,
  Roleplay.Furniture,
  Roleplay.HorseRiding,
  Roleplay.Livestock,
  Roleplay.Slave,
  Roleplay.Forced,
];

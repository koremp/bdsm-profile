// 8

export const Outdoor = {
  Exhibition: 'Exhibition',
  Play: 'Play',
  Sex: 'Sex',
};

export type Outdoor = typeof Outdoor[keyof typeof Outdoor];

export const outdoorArray: Outdoor[] = [
  Outdoor.Exhibition,
  Outdoor.Play,
  Outdoor.Sex,
];

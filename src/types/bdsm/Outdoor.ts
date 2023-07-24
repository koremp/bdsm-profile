// 8

export const Outdoor = {
  Exhibition: 'Exhibition',
  Play: 'Play',
  Sex: 'Sex',
};

export type Outdoor = typeof Outdoor[keyof typeof Outdoor];
// 11

export const SexualPosition = {
  Missionary: 'Missionary',
  Doggy: 'Doggy',
  Lateral: 'Lateral',
  Riding: 'Riding',
  Sitting: 'Sitting',
  Standing: 'Standing',
};

export type SexualPosition = typeof SexualPosition[keyof typeof SexualPosition];

export const sexualPositionArray: SexualPosition[] = [
  SexualPosition.Missionary,
  SexualPosition.Doggy,
  SexualPosition.Lateral,
  SexualPosition.Riding,
  SexualPosition.Sitting,
  SexualPosition.Standing,
];
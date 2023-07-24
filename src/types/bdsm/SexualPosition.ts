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
// 4

export const Dirty = {
  Spit: 'Spit',
  BodyFluid: 'Body Fluid',
  Vomit: 'Vomit',
  Golden: 'Golden',
  Scat: 'Scat',
};

export type Dirty = typeof Dirty[keyof typeof Dirty];
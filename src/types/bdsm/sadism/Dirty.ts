// 4

export const Dirty = {
  Spit: 'Spit',
  BodyFluid: 'Body Fluid',
  Vomit: 'Vomit',
  Golden: 'Golden',
  Scatology: 'Scatology',
};

export type Dirty = typeof Dirty[keyof typeof Dirty];

export const dirtyArray: Dirty[] = [
  Dirty.Spit,
  Dirty.BodyFluid,
  Dirty.Vomit,
  Dirty.Golden,
  Dirty.Scatology,
];
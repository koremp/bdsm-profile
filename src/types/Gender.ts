import { SingleProps } from './Props';

export const Gender = {
  Female: "Female",
  Male: "Male",
  FTM: "FTM Transgender",
  MTF: "MTF Transgender",
  TransFemenine: "Trans Femenine",
  TransMasculine: "Trans Masculine",
  GenderQueer: "Gender Queer",
  NonBinary: "Non-Binary",
  Other: "Other",
};

export type Gender = typeof Gender[keyof typeof Gender];

export interface GenderProperty extends SingleProps<Gender> { };
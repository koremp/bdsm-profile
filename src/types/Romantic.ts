import { SingleProps } from './Props';

export const Romantic = {
  Aromantic: "Aromantic",
  Grayromantic: "Grayromantic",
  Demiromantic: "Demiromantic",
  Heteroromantic: "HeteroroRomantic",
  Homoromantic: "Homoromantic",
  Biromantic: "Biromantic",
  Panromantic: "Panromantic",
  Polyromantic: "Polyromantic",
  Other: "Other",
};

export type Romantic = typeof Romantic[keyof typeof Romantic];

export interface RomanticProperty extends SingleProps<Romantic> { };
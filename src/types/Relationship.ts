import { SingleProps } from './Props';

export const Relationship = {
  Mono: "Mono",
  Nonmono: "Non Mono",
  Poly: "Poly",
  Other: "Other",
};

export type Relationship = typeof Relationship[keyof typeof Relationship] | undefined;

export interface RelationshipProperty extends SingleProps<Relationship> { };
import { SingleProperty } from './Property';

export const Relationship = {
  Mono: "Mono",
  Nonmono: "Non Mono",
  Poly: "Poly",
  Other: "Other",
};

export type Relationship = typeof Relationship[keyof typeof Relationship] | undefined;

export interface RelationshipProperty extends SingleProperty {
  relationship: Relationship | undefined;
}
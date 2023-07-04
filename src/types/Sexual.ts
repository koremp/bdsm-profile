import { SingleProperty } from './Property';

export const Sexual = {
  Asexual: "Asexual",
  Graysexual: "Graysexual",
  Demisexual: "Demisexual",
  Heterosexual: "Heterosexual",
  Homosexual: "Homosexual",
  Bisexual: "Bisexual",
  Androphilia: "Androphilia",
  Gynephilia: "Gynephilia",
  Pansexual: "Pansexual",
  Polysexual: "Polysexual",
  Other: "Other",
};

export type Sexual = typeof Sexual[keyof typeof Sexual];

export interface SexualProperty extends SingleProperty {
  sexual: Sexual | undefined;
};
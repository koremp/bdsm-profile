import { MultipleProps } from './Props';

export const BDSM = {
  Bondage: "Bondage",
  Discipline: "Discipline",
  Dominance: "Dominance",
  Submissive: "Submission",
  Sadism: "Sadism",
  Masochism: "Masochism",
  Top: "Top",
  Bottom: "Bottom",
  Switch: "Switch",
  Master: "Master",
  Mistress: "Mistress",
  Slave: "Slave",
  BratTamer: "Brat Tamer",
  Brat: "Brat",
  Pet: "Pet",
  Little: "Little",
  Daddy: "Daddy",
  Mommy: "Mommy",
  Owner: "Owner",
  Hunter: "Hunter",
  Spanker: "Spanker",
  Spankee: "Spankee",
  Degrader: "Degrader",
  Degradee: "Degradee",
  Ropebunny: "Rope Bunny",
  Prey: "Prey",
  Rigger: "Rigger",
  Vanilla: "Vanilla",
  Other: "Other",
}

export type BDSM = typeof BDSM[keyof typeof BDSM];

export interface BDSMProperty extends MultipleProps<BDSM> { };
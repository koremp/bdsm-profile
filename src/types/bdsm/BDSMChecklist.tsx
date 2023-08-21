import { Anal } from './Anal';
import { Bondage } from './Bondage';
import { Erogenous } from './Erogenous';
import { Film } from './Film';
import { Multiplay } from './Multiplay';
import { NonPenetration } from './NonPenetration';
import { Oral } from './Oral';
import { Outdoor } from './Outdoor';
import { Roleplay } from './Roleplay';
import { SexualPosition } from './SexualPosition';
import { Spanking } from './Spanking';
import { Tool } from './Tool';
import { Wax } from './Wax';
import { Worship } from './Worship';
import { Dirty } from './sadism/Dirty';
import { Mental } from './sadism/Mental';
import { Physical } from './sadism/Physical';
import { Soft } from './sadism/Soft';

export const BDSMChecklist = {
  Erogenous: 'Erogenous',
  Worship: 'Worship',
  Soft: 'Soft',
  Mental: 'Mental',
  Physical: 'Physical',
  Dirty: 'Dirty',
  Tool: 'Tool',
  Bondage: 'Bondage',
  Wax: 'Wax',
  Spanking: 'Spanking',
  Roleplay: 'Roleplay',
  Film: 'Film',
  Outdoor: 'Outdoor',
  Multiplay: 'Multiplay',
  NonPenetration: 'NonPenetration',
  SexualPosition: 'SexualPosition',
  Oral: 'Oral',
  Anal: 'Anal',
} as const;

export type BDSMChecklist = typeof BDSMChecklist[keyof typeof BDSMChecklist];

export const bdsmChecklistArray: BDSMChecklist[] = [
  BDSMChecklist.Erogenous,
  BDSMChecklist.Worship,
  BDSMChecklist.Soft,
  BDSMChecklist.Mental,
  BDSMChecklist.Physical,
  BDSMChecklist.Dirty,
  BDSMChecklist.Tool,
  BDSMChecklist.Bondage,
  BDSMChecklist.Wax,
  BDSMChecklist.Spanking,
  BDSMChecklist.Roleplay,
  BDSMChecklist.Film,
  BDSMChecklist.Outdoor,
  BDSMChecklist.Multiplay,
  BDSMChecklist.SexualPosition,
  BDSMChecklist.Oral,
  BDSMChecklist.Anal,
];

export {
  Erogenous,
  Worship,
  Soft,
  Mental,
  Physical,
  Dirty,
  Tool,
  Bondage,
  Wax,
  Spanking,
  Roleplay,
  Film,
  Outdoor,
  Multiplay,
  NonPenetration,
  SexualPosition,
  Oral,
  Anal,
};

export type BDSMType = Erogenous
  | Worship
  | Soft
  | Mental
  | Physical
  | Dirty
  | Tool
  | Bondage
  | Wax
  | Spanking
  | Roleplay
  | Film
  | Outdoor
  | Multiplay
  | NonPenetration
  | SexualPosition
  | Oral
  | Anal;
import { SingleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const monopolyRelationshipArray: readonly Information[] = [
  {
    text: 'Monogamy',
    description: '',
  },
  {
    text: 'Non Monogamy',
    description: '',
  },
  {
    text: 'Open Relationship',
    description: '',
  },
  {
    text: 'Date Around',
    description: '',
  },
  {
    text: 'Poly Relationship',
    description: '',
  },
  {
    text: 'Polyamory',
    description: '',
  },
  {
    text: "Don't ask Don't tell",
    description: '',
  },
  {
    text: '100 mile rule',
    description: '',
  },
  {
    text: 'Swiping',
    description: '',
  },
  {
    text: 'Casual',
    description: '',
  },
  {
    text: 'For BDSM',
    description: '',
  },
  {
    text: 'Other',
    description: '',
  },
];

export type MonopolyRelationship = typeof monopolyRelationshipArray[number]['text'];

export const MonopolyRelationship = convertInformation2Obj(monopolyRelationshipArray);

export interface MonopolyRelationshipProperty extends SingleProps<MonopolyRelationship> { };
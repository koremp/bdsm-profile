import { SingleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const relationshipPreferenceArray: readonly Information[] = [
  {
    text: 'Talk',
    description: '',
  },
  {
    text: 'One Night Stand',
    description: '',
  },
  {
    text: 'For BDSM(Play Partner)',
    description: '',
  },
  {
    text: 'Sex Partner',
    description: '',
  },
  {
    text: 'Friend with Benefit',
    description: '',
  },
  {
    text: 'Relationship',
    description: '',
  },
  {
    text: 'Other',
    description: '',
  },
] as const;

export type RelationshipPreference = typeof relationshipPreferenceArray[number]['text'];

export const RelationshipPreference = convertInformation2Obj(relationshipPreferenceArray);

export interface RelationshipPrefenceProperty extends SingleProps<RelationshipPreference> { };
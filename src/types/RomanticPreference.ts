import { SingleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const romanticPreferenceArray: readonly Information[] = [
  {
    text: 'Heteroromantic',
    description: '',
  },
  {
    text: 'Heteroflexibleromantic',
    description: '',
  },
  {
    text: 'Homoromantic',
    description: '',
  },
  {
    text: 'Homoflexibleromantic',
    description: '',
  },
  {
    text: 'Biromantic',
    description: '',
  },
  {
    text: 'Panromantic',
    description: '',
  },
  {
    text: 'Aromantic',
    description: '',
  },
  {
    text: 'Grayromantic',
    description: '',
  },
  {
    text: 'Demiromantic',
    description: '',
  },
  {
    text: 'Other',
    description: '',
  },
] as const;

export type RomanticPreference = typeof romanticPreferenceArray[number]['text'];

export const RomanticPreference = convertInformation2Obj(romanticPreferenceArray);

export interface RomanticPrefenceProperty extends SingleProps<RomanticPreference> { };
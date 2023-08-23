import { SingleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const sexualPreferenceArray: readonly Information[] = [
  {
    text: 'Heterosexual',
    description: '',
  },
  {
    text: 'Heteroflexible',
    description: '',
  },
  {
    text: 'Homosexual',
    description: '',
  },
  {
    text: 'Homoflexible',
    description: '',
  },
  {
    text: 'Bisexual',
    description: '',
  },
  {
    text: 'Pansexual',
    description: '',
  },
  {
    text: 'Demisexual',
    description: '',
  },
  {
    text: 'Graysexual',
    description: '',
  },
  {
    text: 'Asexual',
    description: '',
  },
  {
    text: 'Androsexual',
    description: '',
  },
  {
    text: 'Gynesexual',
    description: '',
  },
  {
    text: 'Other',
    description: '',
  },
] as const;

export type SexualPreference = typeof sexualPreferenceArray[number]['text'];

export const SexualPreference = convertInformation2Obj(sexualPreferenceArray);

export interface SexualPreferenceProperty extends SingleProps<SexualPreference> { }

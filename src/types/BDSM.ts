import { MultipleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const bdsmArray: readonly Information[] = [
  {
    text: "Bondage",
    description: "Bondage, in the BDSM subculture, is the practice of consensually tying, binding, or restraining a partner for erotic, aesthetic, or somatosensory stimulation. A partner may be physically restrained in a variety of ways, including the use of rope, cuffs, bondage tape, or self-adhering bandage.",
  },
  {
    text: "Discipline",
    description: 'Discipline in BDSM is the practice in which the dominant sets rules which the submissive is expected to obey. When rules of expected behaviour are broken, punishment is often used as a means of disciplining.',
  },
  {
    text: 'Dominance',
    description: '',
  },
  {
    text: 'Submissive',
    description: '',
  },
  {
    text: 'Sadist',
    description: '',
  },
  {
    text: 'Masochist',
    description: '',
  },
  {
    text: 'Top',
    description: '',
  },
  {
    text: 'Bottom',
    description: '',
  },
  {
    text: 'Switch',
    description: '',
  },
  {
    text: 'Master',
    description: '',
  },
  {
    text: 'Mistress',
    description: '',
  },
  {
    text: 'Slave',
    description: '',
  },
  {
    text: 'BratTamer',
    description: '',
  },
  {
    text: 'Brat',
    description: '',
  },
  {
    text: 'Pet',
    description: '',
  },
  {
    text: 'Little',
    description: '',
  },
  {
    text: 'Daddy',
    description: '',
  },
  {
    text: 'Mommy',
    description: '',
  },
  {
    text: 'Owner',
    description: '',
  },
  {
    text: 'Hunter',
    description: '',
  },
  {
    text: 'Spanker',
    description: '',
  },
  {
    text: 'Spankee',
    description: '',
  },
  {
    text: 'Degrader',
    description: '',
  },
  {
    text: 'Degradee',
    description: '',
  },
  {
    text: 'Ropebunny',
    description: '',
  },
  {
    text: 'Prey',
    description: '',
  },
  {
    text: 'Rigger',
    description: '',
  },
  {
    text: 'Vanilla',
    description: '',
  },
  {
    text: 'Other',
    description: '',
  },
];

export type BDSM = typeof bdsmArray[number]['text'];

export const BDSM = convertInformation2Obj(bdsmArray);

export interface BDSMProperty extends MultipleProps<BDSM> { };
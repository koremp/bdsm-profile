import { SingleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const genderArray: readonly Information[] = [
  {
    text: "Female",
    description: "A person who identifies as female, typically assigned female at birth."
  },
  {
    text: 'Male',
    description: "A person who identifies as male, typically assigned male at birth."
  },
  {
    text: 'Non-binary',
    description: "Non-binary individuals do not exclusively identify as male or female.They may identify outside of or beyond the traditional binary gender system.",
  },
  {
    text: 'Genderqueer',
    description: 'Genderqueer individuals may have a gender identity that is fluid, encompasses multiple genders, or falls outside of the traditional gender categories.',
  },
  {
    text: 'Genderfluid',
    description: 'Genderfluid individuals experience their gender identity as fluid, where it may shift and change over time.They may identify with different genders at different times.',
  },
  {
    text: 'Agender',
    description: 'Agender individuals do not identify with any gender or have a gender identity that is neutral or without gender.',
  },
  {
    text: 'Bigender',
    description: 'Bigender individuals have a gender identity that encompasses two distinct genders.They may identify as both male and female or as a combination of other genders.',
  },
  {
    text: 'Androgynous',
    description: 'Androgynous individuals have a gender expression or presentation that is a mix of masculine and feminine traits, or that is neutral and lacks distinct gender markers.',
  },
  {
    text: 'Two-Spirit',
    description: 'Two-Spirit is an Indigenous concept that encompasses diverse gender identities and expressions among Indigenous communities in North America. It is specific to Indigenous cultures and should not be generalized beyond those contexts.',
  },
  {
    text: 'Gender Nonconforming',
    description: "Gender nonconforming individuals express themselves in ways that defy societal expectations or norms associated with their assigned gender at birth.",
  },
  {
    text: "Other",
    description: '',
  },
  {
    text: "Transgender",
    description: 'Transgender individuals have a gender identity that does not align with the sex they were assigned at birth. They may transition socially, medically, or legally to live in alignment with their true gender identity.',
  },
  {
    text: "Demigender",
    description: 'Demigender individuals have a partial connection or identification with a particular gender. For example, someone may identify as demigirl, meaning they partially identify as a girl while also having another gender identity.',
  },
  {
    text: "Neutrois",
    description: "Neutrois individuals have a gender identity that is neutral or null, experiencing little or no connection to gender.",
  },
  {
    text: 'Pangender',
    description: 'Pangender individuals have a wide and inclusive sense of gender identity, encompassing many or all genders.',
  },
  {
    text: 'Third Gender',
    description: 'Some cultures recognize and embrace the existence of more than two genders, often referred to as third gender identities. These identities can vary across cultures and may have specific local names or terms.',
  },
  {
    text: 'Other',
    description: '',
  },
] as const;

export type Gender = typeof genderArray[number]['text'];

export const Gender = convertInformation2Obj(genderArray);

export interface GenderProperty extends SingleProps<Gender> { };
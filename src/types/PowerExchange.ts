import { SingleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const powerExchangeArray: readonly Information[] = [
  {
    text: 'Power Exchange Level 1',
    description: 'Conditional Compliance',
  },
  {
    text: 'Power Exchange Level 2',
    description: 'Restricted ongoing acquiescence',
  },
  {
    text: 'Power Exchange Level 3',
    description: 'Provisional submission',
  },
  {
    text: 'Power Exchange Level 4(Total Power Exchange)',
    description: 'Covenant of Dominant and submission',
  },
  {
    text: 'Power Exchange Level 5(Absolute Power Exchange)',
    description: 'Absolute Ownership',
  },
  {
    text: 'Other',
    description: '',
  },
] as const;

export type PowerExchange = typeof powerExchangeArray[number]['text'];

export const PowerExchange = convertInformation2Obj(powerExchangeArray);

export interface PowerExchangeProperty extends SingleProps<PowerExchange> { }
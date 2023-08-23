import reducer, {
  initialState,
  toggleExistPowerExchange,
  PowerExchangeState,
  setPowerExchange,
  setOtherPowerExchange,
  setDescription,
} from 'src/features/powerExchangeSlice';
import { PowerExchange } from 'src/types/PowerExchange';

describe('powerExchangeSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      expect(reducer(undefined, { type: 'action' })).toEqual({ ...initialState });
    });
  });

  describe('toggleExistPowerExchange', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...initialState }, toggleExistPowerExchange()).exist).toEqual(!{ ...initialState }.exist);
    });
  });

  describe('setPowerExchange', () => {
    it('sets value.', () => {
      const value: PowerExchange = PowerExchange.Other;
      expect(reducer({ ...initialState }, setPowerExchange(value)).value).toEqual(value);
    });
  });

  describe('setOtherPowerExchange', () => {
    it('sets other.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...initialState }, setOtherPowerExchange(other)).other).toEqual(other);
    });
  });

  describe('setDescription', () => {
    it('sets description.', () => {
      const desc: string = 'asdf';
      expect(reducer({ ...initialState }, setDescription(desc)).desc).toEqual(desc);
    });
  });
});

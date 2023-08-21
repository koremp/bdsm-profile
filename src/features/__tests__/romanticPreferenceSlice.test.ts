import reducer, {
  initialState,
  RomanticPreferenceState,
  toggleExistRomanticPreference,
  setRomanticPreference,
  setOtherRomanticPreference,
  setDescription,
} from 'src/features/romanticPreferenceSlice';
import { RomanticPreference } from 'src/types/RomanticPreference';

describe('romanticPreferenceSlice', () => {
  describe('when previous state is undefined, ', () => {
    it('returns initialState.', () => {
      expect(reducer(undefined, { type: 'action' })).toEqual({ ...initialState });
    });
  });

  describe('toggleExistRomanticPreference', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...initialState }, toggleExistRomanticPreference()).exist).toEqual(!{ ...initialState }.exist);
    });
  });

  describe('setRomanticPreference', () => {
    it('sets value.', () => {
      const value: RomanticPreference = RomanticPreference.Heteroromantic;
      expect(reducer({ ...initialState }, setRomanticPreference(value)).value).toEqual(value);
    });
  });

  describe('setOtherMonopolyRelationship', () => {
    it('sets other.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...initialState }, setOtherRomanticPreference(other)).other).toEqual(other);
    });
  });

  describe('setDescription', () => {
    it('sets description.', () => {
      const desc: string = 'asdf';
      expect(reducer({ ...initialState }, setDescription(desc)).desc).toEqual(desc);
    });
  });
});
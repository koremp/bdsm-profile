import reducer, {
  initialState,
  toggleExistSexualPreference,
  SexualPreferenceState,
  setSexualPreference,
  setOtherSexualPreference,
  setDescription,
} from 'src/features/sexualPreferenceSlice';
import { SexualPreference } from '../../types/SexualPreference';

describe('sexualPreferenceSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      expect(reducer(undefined, { type: 'action' })).toEqual({ ...initialState });
    });
  });

  describe('toggleExistSexualPreference', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...initialState }, toggleExistSexualPreference()).exist).toEqual(!{ ...initialState }.exist);
    });
  });

  describe('setMonopolyRelationship', () => {
    it('sets value.', () => {
      const value: SexualPreference = SexualPreference.Monogamy;
      expect(reducer({ ...initialState }, setSexualPreference(value)).value).toEqual(value);
    });
  });

  describe('setOtherSexualPreference', () => {
    it('sets other.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...initialState }, setOtherSexualPreference(other)).other).toEqual(other);
    });
  });

  describe('setDescription', () => {
    it('sets description.', () => {
      const desc: string = 'asdf';
      expect(reducer({ ...initialState }, setDescription(desc)).desc).toEqual(desc);
    });
  });
});

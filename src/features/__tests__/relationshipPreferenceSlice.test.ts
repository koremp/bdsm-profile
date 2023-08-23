import reducer, {
  initialState,
  toggleExistRelationshipPreference,
  setRelationshipPreference,
  setOtherRelationshipPreference,
  setDescription,
} from 'src/features/relationshipPreferenceSlice';
import { RelationshipPreference } from 'src/types/RelationshipPreference';

describe('relationshipPreferenceSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      expect(reducer(undefined, { type: 'action' })).toEqual({ ...initialState });
    });
  });

  describe('toggleExistRelationshipPreference', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...initialState }, toggleExistRelationshipPreference()).exist)
        .toEqual(!{ ...initialState }.exist);
    });
  });

  describe('setRelationshipPreference', () => {
    it('sets value.', () => {
      const value: RelationshipPreference = RelationshipPreference.Talk;
      expect(reducer({ ...initialState }, setRelationshipPreference(value)).value).toEqual(value);
    });
  });

  describe('setOtherRelationshipPreference', () => {
    it('sets other.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...initialState }, setOtherRelationshipPreference(other)).other)
        .toEqual(other);
    });
  });

  describe('setDescription', () => {
    it('sets description.', () => {
      const desc: string = 'asdf';
      expect(reducer({ ...initialState }, setDescription(desc)).desc).toEqual(desc);
    });
  });
});

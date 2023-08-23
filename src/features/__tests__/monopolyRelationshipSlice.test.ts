import reducer, {
  initialState,
  toggleExistMonopolyRelationship,
  setMonopolyRelationship,
  setOtherMonopolyRelationship,
  setDescription,
} from 'src/features/monopolyRelationshipSlice';
import { MonopolyRelationship } from 'src/types/MonopolyRelationship';

describe('monopolyRelationshipSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      expect(reducer(undefined, { type: 'action' })).toEqual({ ...initialState });
    });
  });

  describe('toggleExistGender', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...initialState }, toggleExistMonopolyRelationship()).exist)
        .toEqual(!{ ...initialState }.exist);
    });
  });

  describe('setMonopolyRelationship', () => {
    it('sets value.', () => {
      const value: MonopolyRelationship = MonopolyRelationship.Monogamy;
      expect(reducer({ ...initialState }, setMonopolyRelationship(value)).value).toEqual(value);
    });
  });

  describe('setOtherMonopolyRelationship', () => {
    it('sets other.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...initialState }, setOtherMonopolyRelationship(other)).other)
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

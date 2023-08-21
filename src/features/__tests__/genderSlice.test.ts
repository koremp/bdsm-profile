import reducer, {
  GenderState,
  initialState,
  toggleExistGender,
  setGender,
  setOtherGender,
  setDescription,
} from 'src/features/genderSlice';

import { Gender } from 'src/types/Gender';

describe('genderSlice', () => {
  describe('when previous state is undefined, ', () => {
    it('returns initialState.', () => {
      expect(reducer({ ...initialState }, { type: 'action' })).toEqual(initialState);
    });
  });

  describe('toggleExistGender', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...initialState }, toggleExistGender()).exist).toEqual(!initialState.exist);
    });
  });

  describe('setGender', () => {
    it('sets value.', () => {
      const value: Gender = Gender.Female;
      expect(reducer({ ...initialState }, setGender(Gender.Female)).value).toEqual(value);
    });
  });

  describe('setOtherGender', () => {
    it('sets other.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...initialState }, setOtherGender(other)).other).toEqual(other);
    });
  });

  describe('setDescription', () => {
    it('sets description.', () => {
      const desc: string = 'asdf';
      expect(reducer({ ...initialState }, setDescription(desc)).desc).toEqual(desc);
    });
  });
});
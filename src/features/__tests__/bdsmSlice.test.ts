import reducer, {
  BDSMState,
  toggleExistBDSM,
  setBDSMs,
  setOtherBDSMs,
  setDescription,
} from 'src/features/bdsmSlice';

import { BDSM } from 'src/types/BDSM';

const defaultState: BDSMState = {
  exist: false,
  values: [],
  others: [],
  desc: '',
};

describe('bdsmSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      expect(reducer(undefined, { type: 'action' })).toEqual({ ...defaultState });
    });
  });

  describe('toggleExistBDSM', () => {
    it('toggles exist.', () => {
      expect(reducer({ ...defaultState }, toggleExistBDSM()).exist).toEqual(!defaultState.exist);
    });
  });

  describe('setBDSMs', () => {
    it('sets values.', () => {
      expect(reducer({ ...defaultState }, setBDSMs(BDSM[0])).values[0]).toEqual(BDSM[0]);
    });
  });

  describe('setOtherBDSMs', () => {
    it('set OtherBDSMs.', () => {
      const other: string = 'asdf';
      expect(reducer({ ...defaultState }, setOtherBDSMs(other)).others[0]).toEqual(other);
    });
  });

  describe('setDescription', () => {
    it('set description.', () => {
      const desc: string = 'asdf';
      expect(reducer({ ...defaultState }, setDescription(desc)).desc).toEqual(desc);
    });
  });
});

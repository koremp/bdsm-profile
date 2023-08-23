import reducer, {
  BDSMChecklistState,
  initialState as bdsmChecklistState,
  setChecklist,
  ChecklistActionT,
} from 'src/features/bdsmChecklistSlice';

import {
  BDSMChecklist,
  Erogenous,
} from 'src/types/bdsm/BDSMChecklist';

const defaultState: BDSMChecklistState = { ...bdsmChecklistState };

describe('bdsmChecklistSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(defaultState);
    });
  });

  describe('setChecklist', () => {
    it('sets checklist state.', () => {
      const initialState = { ...defaultState };
      const checklistAction: ChecklistActionT = {
        isMe: false,
        value: 1,
        type: Erogenous.Lip,
        checklist: BDSMChecklist.Erogenous,
      };

      const state = reducer({ ...initialState }, setChecklist(checklistAction));

      expect(state.erogenous[0].you).toEqual(checklistAction.value);
    });
  });
});

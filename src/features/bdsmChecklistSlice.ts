import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { erogenousArray } from 'src/types/bdsm/Erogenous';
import { worshipArray } from 'src/types/bdsm/Worship';
import { softArray } from 'src/types/bdsm/sadism/Soft';
import { mentalArray } from 'src/types/bdsm/sadism/Mental';
import { physicalArray } from 'src/types/bdsm/sadism/Physical';
import { dirtyArray } from 'src/types/bdsm/sadism/Dirty';
import { toolArray } from 'src/types/bdsm/Tool';
import { bondageArray } from 'src/types/bdsm/Bondage';
import { waxArray } from 'src/types/bdsm/Wax';
import { spankingArray } from 'src/types/bdsm/Spanking';
import { roleplayArray } from 'src/types/bdsm/Roleplay';
import { filmArray } from 'src/types/bdsm/Film';
import { outdoorArray } from 'src/types/bdsm/Outdoor';
import { multiplayArray } from 'src/types/bdsm/Multiplay';
import { nonPenetrationArray } from 'src/types/bdsm/NonPenetration';
import { sexualPositionArray } from 'src/types/bdsm/SexualPosition';
import { oralArray } from 'src/types/bdsm/Oral';
import { analArray } from 'src/types/bdsm/Anal';
import { BDSMChecklist, BDSMType } from 'src/types/bdsm/BDSMChecklist';

import type { RootState } from './store';

export interface ChecklistValue {
  me: number
  you: number
}

export interface ChecklistAction {
  isMe: boolean
  value: number
  type: BDSMType
}

export interface ChecklistActionT {
  isMe: boolean
  value: number
  type: BDSMType
  checklist: BDSMChecklist
}

export interface BDSMChecklistState {
  erogenous: ChecklistValue[]
  worship: ChecklistValue[]
  soft: ChecklistValue[]
  mental: ChecklistValue[]
  physical: ChecklistValue[]
  dirty: ChecklistValue[]
  tool: ChecklistValue[]
  bondage: ChecklistValue[]
  wax: ChecklistValue[]
  spanking: ChecklistValue[]
  roleplay: ChecklistValue[]
  film: ChecklistValue[]
  outdoor: ChecklistValue[]
  multiplay: ChecklistValue[]
  nonPenetration: ChecklistValue[]
  sexualPosition: ChecklistValue[]
  oral: ChecklistValue[]
  anal: ChecklistValue[]
}

const defaultChecklistValue: ChecklistValue = {
  me: 0,
  you: 0,
};

export const initialState: BDSMChecklistState = {
  erogenous: erogenousArray.map(() => defaultChecklistValue),
  worship: worshipArray.map(() => defaultChecklistValue),
  soft: softArray.map(() => defaultChecklistValue),
  mental: mentalArray.map(() => defaultChecklistValue),
  physical: physicalArray.map(() => defaultChecklistValue),
  dirty: dirtyArray.map(() => defaultChecklistValue),
  tool: toolArray.map(() => defaultChecklistValue),
  bondage: bondageArray.map(() => defaultChecklistValue),
  wax: waxArray.map(() => defaultChecklistValue),
  spanking: spankingArray.map(() => defaultChecklistValue),
  roleplay: roleplayArray.map(() => defaultChecklistValue),
  film: filmArray.map(() => defaultChecklistValue),
  outdoor: outdoorArray.map(() => defaultChecklistValue),
  multiplay: multiplayArray.map(() => defaultChecklistValue),
  nonPenetration: nonPenetrationArray.map(() => defaultChecklistValue),
  sexualPosition: sexualPositionArray.map(() => defaultChecklistValue),
  oral: oralArray.map(() => defaultChecklistValue),
  anal: analArray.map(() => defaultChecklistValue),
};

export const spliceChecklist = (
  array: ChecklistValue[],
  isMe: boolean,
  value: number,
  index: number,
) => {
  const { me, you } = array[index];

  if (isMe) {
    array.splice(index, 1, { me: value, you });
  } else {
    array.splice(index, 1, { me, you: value });
  }
};

export const bdsmChecklistSlice = createSlice({
  name: 'bdsmChecklist',
  initialState,
  reducers: {
    setChecklist: (state, action: PayloadAction<ChecklistActionT>) => {
      const {
        isMe, value, type, checklist,
      } = action.payload;

      let index: number = -1;

      if (checklist === BDSMChecklist.Erogenous) {
        index = erogenousArray.indexOf(type);
        spliceChecklist(state.erogenous, isMe, value, index);
      } else if (checklist === BDSMChecklist.Worship) {
        index = worshipArray.indexOf(type);
        spliceChecklist(state.worship, isMe, value, index);
      } else if (checklist === BDSMChecklist.Soft) {
        index = softArray.indexOf(type);
        spliceChecklist(state.soft, isMe, value, index);
      } else if (checklist === BDSMChecklist.Mental) {
        index = mentalArray.indexOf(type);
        spliceChecklist(state.mental, isMe, value, index);
      } else if (checklist === BDSMChecklist.Physical) {
        index = physicalArray.indexOf(type);
        spliceChecklist(state.physical, isMe, value, index);
      } else if (checklist === BDSMChecklist.Dirty) {
        index = dirtyArray.indexOf(type);
        spliceChecklist(state.dirty, isMe, value, index);
      } else if (checklist === BDSMChecklist.Tool) {
        index = toolArray.indexOf(type);
        spliceChecklist(state.tool, isMe, value, index);
      } else if (checklist === BDSMChecklist.Bondage) {
        index = bondageArray.indexOf(type);
        spliceChecklist(state.bondage, isMe, value, index);
      } else if (checklist === BDSMChecklist.Wax) {
        index = waxArray.indexOf(type);
        spliceChecklist(state.wax, isMe, value, index);
      } else if (checklist === BDSMChecklist.Spanking) {
        index = spankingArray.indexOf(type);
        spliceChecklist(state.spanking, isMe, value, index);
      } else if (checklist === BDSMChecklist.Roleplay) {
        index = roleplayArray.indexOf(type);
        spliceChecklist(state.roleplay, isMe, value, index);
      } else if (checklist === BDSMChecklist.Film) {
        index = filmArray.indexOf(type);
        spliceChecklist(state.film, isMe, value, index);
      } else if (checklist === BDSMChecklist.Outdoor) {
        index = outdoorArray.indexOf(type);
        spliceChecklist(state.outdoor, isMe, value, index);
      } else if (checklist === BDSMChecklist.Multiplay) {
        index = multiplayArray.indexOf(type);
        spliceChecklist(state.multiplay, isMe, value, index);
      } else if (checklist === BDSMChecklist.NonPenetration) {
        index = nonPenetrationArray.indexOf(type);
        spliceChecklist(state.nonPenetration, isMe, value, index);
      } else if (checklist === BDSMChecklist.SexualPosition) {
        index = sexualPositionArray.indexOf(type);
        spliceChecklist(state.sexualPosition, isMe, value, index);
      } else if (checklist === BDSMChecklist.Oral) {
        index = oralArray.indexOf(type);
        spliceChecklist(state.oral, isMe, value, index);
      } else if (checklist === BDSMChecklist.Anal) {
        index = analArray.indexOf(type);
        spliceChecklist(state.anal, isMe, value, index);
      }
    },
  },
});

export const {
  setChecklist,
} = bdsmChecklistSlice.actions;

export const getChecklistErogenous = (state: RootState) => state.bdsmChecklist.erogenous;
export const getChecklistWorship = (state: RootState) => state.bdsmChecklist.worship;
export const getChecklistSoft = (state: RootState) => state.bdsmChecklist.soft;
export const getChecklistMental = (state: RootState) => state.bdsmChecklist.mental;
export const getChecklistPhysical = (state: RootState) => state.bdsmChecklist.physical;
export const getChecklistDirty = (state: RootState) => state.bdsmChecklist.dirty;
export const getChecklistTool = (state: RootState) => state.bdsmChecklist.tool;
export const getChecklistBondage = (state: RootState) => state.bdsmChecklist.bondage;
export const getChecklistWax = (state: RootState) => state.bdsmChecklist.wax;
export const getChecklistSpanking = (state: RootState) => state.bdsmChecklist.spanking;
export const getChecklistRoleplay = (state: RootState) => state.bdsmChecklist.roleplay;
export const getChecklistFilm = (state: RootState) => state.bdsmChecklist.film;
export const getChecklistOutdoor = (state: RootState) => state.bdsmChecklist.outdoor;
export const getChecklistMultiplay = (state: RootState) => state.bdsmChecklist.multiplay;
export const getChecklistNonPenetration = (state: RootState) => state.bdsmChecklist.nonPenetration;
export const getChecklistSexualPosition = (state: RootState) => state.bdsmChecklist.sexualPosition;
export const getChecklistOral = (state: RootState) => state.bdsmChecklist.oral;
export const getChecklistAnal = (state: RootState) => state.bdsmChecklist.anal;

export default bdsmChecklistSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { Erogenous, erogenousArray } from 'src/types/bdsm/Erogenous';
import { Worship, worshipArray } from 'src/types/bdsm/Worship';
import { Soft, softArray } from 'src/types/bdsm/sadism/Soft';
import { Mental, mentalArray } from 'src/types/bdsm/sadism/Mental';
import { Physical, physicalArray } from 'src/types/bdsm/sadism/Physical';
import { Dirty, dirtyArray } from 'src/types/bdsm/sadism/Dirty';
import { Tool, toolArray } from 'src/types/bdsm/Tool';
import { Bondage, bondageArray } from 'src/types/bdsm/Bondage';
import { Wax, waxArray } from 'src/types/bdsm/Wax';
import { Spanking, spankingArray } from 'src/types/bdsm/Spanking';
import { Roleplay, roleplayArray } from 'src/types/bdsm/Roleplay';
import { Film, filmArray } from 'src/types/bdsm/Film';
import { Outdoor, outdoorArray } from 'src/types/bdsm/Outdoor';
import { Multiplay, multiplayArray } from 'src/types/bdsm/Multiplay';
import { NonPenetration, nonPenetrationArray } from 'src/types/bdsm/NonPenetration';
import { SexualPosition, sexualPositionArray } from 'src/types/bdsm/SexualPosition';
import { Oral, oralArray } from 'src/types/bdsm/Oral';
import { Anal, analArray } from 'src/types/bdsm/Anal';
import { BDSMChecklist, BDSMType } from 'src/types/bdsm/BDSMChecklist';

export interface ChecklistValue {
  me: number
  you: number
};


export interface ChecklistAction {
  isMe: boolean
  value: number
  type: BDSMType
};

export interface ChecklistActionT {
  isMe: boolean
  value: number
  type: BDSMType
  checklist: BDSMChecklist
};

interface InitialState {
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
};

const defaultChecklistValue: ChecklistValue = {
  me: 0,
  you: 0,
};

const initialState: InitialState = {
  erogenous: erogenousArray.map(_ => defaultChecklistValue),
  worship: worshipArray.map(_ => defaultChecklistValue),
  soft: softArray.map(_ => defaultChecklistValue),
  mental: mentalArray.map(_ => defaultChecklistValue),
  physical: physicalArray.map(_ => defaultChecklistValue),
  dirty: dirtyArray.map(_ => defaultChecklistValue),
  tool: toolArray.map(_ => defaultChecklistValue),
  bondage: bondageArray.map(_ => defaultChecklistValue),
  wax: waxArray.map(_ => defaultChecklistValue),
  spanking: spankingArray.map(_ => defaultChecklistValue),
  roleplay: roleplayArray.map(_ => defaultChecklistValue),
  film: filmArray.map(_ => defaultChecklistValue),
  outdoor: outdoorArray.map(_ => defaultChecklistValue),
  multiplay: multiplayArray.map(_ => defaultChecklistValue),
  nonPenetration: nonPenetrationArray.map(_ => defaultChecklistValue),
  sexualPosition: sexualPositionArray.map(_ => defaultChecklistValue),
  oral: oralArray.map(_ => defaultChecklistValue),
  anal: analArray.map(_ => defaultChecklistValue),
};

const spliceChecklist = (array: ChecklistValue[], isMe: boolean, value: number, type: BDSMType, index: number) => {
  const { me, you } = array[index];

  if (isMe) {
    array.splice(index, 1, { me: value, you });
  } else {
    array.splice(index, 1, { me, you: value });
  };
};

export const bdsmChecklistSlice = createSlice({
  name: 'bdsmChecklist',
  initialState,
  reducers: {
    setChecklist: (state, action: PayloadAction<ChecklistActionT>) => {
      const { isMe, value, type, checklist } = action.payload;

      let index: number = -1;
      let array: ChecklistValue[] = [];

      if (checklist === BDSMChecklist.Erogenous) {
        index = erogenousArray.indexOf(type);
        array = state.erogenous;
      } else if (checklist === BDSMChecklist.Worship) {
        index = worshipArray.indexOf(type);
        array = state.worship;
      } else if (checklist === BDSMChecklist.Soft) {
        index = softArray.indexOf(type);
        array = state.soft;
      } else if (checklist === BDSMChecklist.Mental) {
        index = mentalArray.indexOf(type);
        array = state.mental;
      } else if (checklist === BDSMChecklist.Physical) {
        index = physicalArray.indexOf(type);
        array = state.physical;
      } else if (checklist === BDSMChecklist.Dirty) {
        index = dirtyArray.indexOf(type);
        array = state.dirty;
      } else if (checklist === BDSMChecklist.Tool) {
        index = toolArray.indexOf(type);
        array = state.tool;
      } else if (checklist === BDSMChecklist.Bondage) {
        index = bondageArray.indexOf(type);
        array = state.bondage;
      } else if (checklist === BDSMChecklist.Wax) {
        index = waxArray.indexOf(type);
        array = state.wax;
      } else if (checklist === BDSMChecklist.Spanking) {
        index = spankingArray.indexOf(type);
        array = state.spanking;
      } else if (checklist === BDSMChecklist.Roleplay) {
        index = roleplayArray.indexOf(type);
        array = state.roleplay;
      } else if (checklist === BDSMChecklist.Film) {
        index = filmArray.indexOf(type);
        array = state.film;
      } else if (checklist === BDSMChecklist.Outdoor) {
        index = outdoorArray.indexOf(type);
        array = state.outdoor;
      } else if (checklist === BDSMChecklist.Multiplay) {
        index = multiplayArray.indexOf(type);
        array = state.multiplay;
      } else if (checklist === BDSMChecklist.NonPenetration) {
        index = nonPenetrationArray.indexOf(type);
        array = state.nonPenetration;
      } else if (checklist === BDSMChecklist.SexualPosition) {
        index = sexualPositionArray.indexOf(type);
        array = state.sexualPosition;
      } else if (checklist === BDSMChecklist.Oral) {
        index = oralArray.indexOf(type);
        array = state.oral;
      } else if (checklist === BDSMChecklist.Anal) {
        index = analArray.indexOf(type);
        array = state.oral;
      }

      spliceChecklist(array, isMe, value, type, index);
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
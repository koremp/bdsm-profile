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

interface Checklist {
  me: number
  you: number
};

interface ChecklistAction {
  isMe: boolean
  value: number
  type: Erogenous
  | Worship
  | Soft
  | Mental
  | Physical
  | Dirty
  | Tool
  | Bondage
  | Wax
  | Spanking
  | Roleplay
  | Film
  | Outdoor
  | Multiplay
  | NonPenetration
  | SexualPosition
  | Oral
  | Anal
};

interface InitialState {
  erogenous: Checklist[]
  worship: Checklist[]
  soft: Checklist[]
  mental: Checklist[]
  physical: Checklist[]
  dirty: Checklist[]
  tool: Checklist[]
  bondage: Checklist[]
  wax: Checklist[]
  spanking: Checklist[]
  roleplay: Checklist[]
  film: Checklist[]
  outdoor: Checklist[]
  multiplay: Checklist[]
  nonPenetration: Checklist[]
  sexualPosition: Checklist[]
  oral: Checklist[]
  anal: Checklist[]
};

const defaultChecklist: Checklist = {
  me: 0,
  you: 0,
};

const initialState: InitialState = {
  erogenous: erogenousArray.map(_ => defaultChecklist),
  worship: worshipArray.map(_ => defaultChecklist),
  soft: softArray.map(_ => defaultChecklist),
  mental: mentalArray.map(_ => defaultChecklist),
  physical: physicalArray.map(_ => defaultChecklist),
  dirty: dirtyArray.map(_ => defaultChecklist),
  tool: toolArray.map(_ => defaultChecklist),
  bondage: bondageArray.map(_ => defaultChecklist),
  wax: waxArray.map(_ => defaultChecklist),
  spanking: spankingArray.map(_ => defaultChecklist),
  roleplay: roleplayArray.map(_ => defaultChecklist),
  film: filmArray.map(_ => defaultChecklist),
  outdoor: outdoorArray.map(_ => defaultChecklist),
  multiplay: multiplayArray.map(_ => defaultChecklist),
  nonPenetration: nonPenetrationArray.map(_ => defaultChecklist),
  sexualPosition: sexualPositionArray.map(_ => defaultChecklist),
  oral: oralArray.map(_ => defaultChecklist),
  anal: analArray.map(_ => defaultChecklist),
};

export const bdsmChecklistSlice = createSlice({
  name: 'bdsmChecklist',
  initialState,
  reducers: {
    setChecklistErogenous: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = erogenousArray.indexOf(type);
      const { me, you } = [...state.erogenous][index];

      if (isMe) {
        state.erogenous.splice(index, 1, { me: value, you });
      } else {
        state.erogenous.splice(index, 1, { me, you: value });
      }
    },
    setChecklistWorship: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = worshipArray.indexOf(type);
      const { me, you } = [...state.worship][index];

      if (isMe) {
        state.worship.splice(index, 1, { me: value, you });
      } else {
        state.worship.splice(index, 1, { me, you: value });
      }
    },
    setChecklistSoft: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = softArray.indexOf(type);
      const { me, you } = [...state.soft][index];

      if (isMe) {
        state.soft.splice(index, 1, { me: value, you });
      } else {
        state.soft.splice(index, 1, { me, you: value });
      }
    }
    ,
    setChecklistMental: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = mentalArray.indexOf(type);
      const { me, you } = [...state.mental][index];

      if (isMe) {
        state.mental.splice(index, 1, { me: value, you });
      } else {
        state.mental.splice(index, 1, { me, you: value });
      }
    },
    setChecklistPhysical: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = physicalArray.indexOf(type);
      const { me, you } = [...state.physical][index];

      if (isMe) {
        state.physical.splice(index, 1, { me: value, you });
      } else {
        state.physical.splice(index, 1, { me, you: value });
      }
    },
    setChecklistDirty: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = dirtyArray.indexOf(type);
      const { me, you } = [...state.dirty][index];

      if (isMe) {
        state.dirty.splice(index, 1, { me: value, you });
      } else {
        state.dirty.splice(index, 1, { me, you: value });
      }

    },
    setChecklistTool: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = toolArray.indexOf(type);
      const { me, you } = [...state.tool][index];

      if (isMe) {
        state.tool.splice(index, 1, { me: value, you });
      } else {
        state.tool.splice(index, 1, { me, you: value });
      }
    },
    setChecklistBondage: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = bondageArray.indexOf(type);
      const { me, you } = [...state.bondage][index];

      if (isMe) {
        state.bondage.splice(index, 1, { me: value, you });
      } else {
        state.bondage.splice(index, 1, { me, you: value });
      }
    },
    setChecklistWax: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = waxArray.indexOf(type);
      const { me, you } = [...state.wax][index];

      if (isMe) {
        state.wax.splice(index, 1, { me: value, you });
      } else {
        state.wax.splice(index, 1, { me, you: value });
      }
    },
    setChecklistSpanking: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = spankingArray.indexOf(type);
      const { me, you } = [...state.spanking][index];

      if (isMe) {
        state.spanking.splice(index, 1, { me: value, you });
      } else {
        state.spanking.splice(index, 1, { me, you: value });
      }
    },
    setChecklistRoleplay: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = roleplayArray.indexOf(type);
      const { me, you } = [...state.roleplay][index];

      if (isMe) {
        state.roleplay.splice(index, 1, { me: value, you });
      } else {
        state.roleplay.splice(index, 1, { me, you: value });
      }
    },
    setChecklistFilm: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = filmArray.indexOf(type);
      const { me, you } = [...state.film][index];

      if (isMe) {
        state.film.splice(index, 1, { me: value, you });
      } else {
        state.film.splice(index, 1, { me, you: value });
      }
    },
    setChecklistOutdoor: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = outdoorArray.indexOf(type);
      const { me, you } = [...state.outdoor][index];

      if (isMe) {
        state.outdoor.splice(index, 1, { me: value, you });
      } else {
        state.outdoor.splice(index, 1, { me, you: value });
      }
    },
    setChecklistMultiplay: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = multiplayArray.indexOf(type);
      const { me, you } = [...state.multiplay][index];

      if (isMe) {
        state.multiplay.splice(index, 1, { me: value, you });
      } else {
        state.multiplay.splice(index, 1, { me, you: value });
      }
    },
    setChecklistNonPenetration: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = nonPenetrationArray.indexOf(type);
      const { me, you } = [...state.nonPenetration][index];

      if (isMe) {
        state.nonPenetration.splice(index, 1, { me: value, you });
      } else {
        state.nonPenetration.splice(index, 1, { me, you: value });
      }
    },
    setChecklistSexualPosition: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = sexualPositionArray.indexOf(type);
      const { me, you } = [...state.sexualPosition][index];

      if (isMe) {
        state.sexualPosition.splice(index, 1, { me: value, you });
      } else {
        state.sexualPosition.splice(index, 1, { me, you: value });
      }
    },
    setChecklistOral: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = oralArray.indexOf(type);
      const { me, you } = [...state.oral][index];

      if (isMe) {
        state.oral.splice(index, 1, { me: value, you });
      } else {
        state.oral.splice(index, 1, { me, you: value });
      }
    },
    setChecklistAnal: (state, action: PayloadAction<ChecklistAction>) => {
      const { isMe, value, type } = action.payload;

      const index = analArray.indexOf(type);
      const { me, you } = [...state.anal][index];

      if (isMe) {
        state.anal.splice(index, 1, { me: value, you });
      } else {
        state.anal.splice(index, 1, { me, you: value });
      }
    },
  },
});

export const {
  setChecklistErogenous,
  setChecklistWorship,
  setChecklistSoft,
  setChecklistMental,
  setChecklistPhysical,
  setChecklistDirty,
  setChecklistTool,
  setChecklistBondage,
  setChecklistWax,
  setChecklistSpanking,
  setChecklistRoleplay,
  setChecklistFilm,
  setChecklistOutdoor,
  setChecklistMultiplay,
  setChecklistNonPenetration,
  setChecklistSexualPosition,
  setChecklistOral,
  setChecklistAnal,
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
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { BDSM, BDSMProperty } from 'src/types/BDSM';

export interface BDSMState extends BDSMProperty { };

export const initialState: BDSMState = {
  exist: false,
  values: [],
  others: [],
  desc: '',
}

export const bdsmSlice = createSlice({
  name: 'bdsm',
  initialState,
  reducers: {
    toggleExistBDSM: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.values = [];
        state.others = [];
        state.desc = '';
      }
    },
    setBDSMs: (state, action: PayloadAction<BDSM>) => {
      const selected: BDSM = action.payload;

      if (state.values.includes(selected)) {
        const idx = state.values.indexOf(selected);
        state.values.splice(idx);
      } else {
        state.values.push(selected);
      }
    },
    setOtherBDSMs: (state, action: PayloadAction<string>) => {
      const other: string = action.payload;

      if (state.others.includes(other)) {
        const idx = state.others.indexOf(other);
        state.others.splice(idx);
      } else {
        state.others.push(other);
      }
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistBDSM,
  setBDSMs,
  setOtherBDSMs,
  setDescription,
} = bdsmSlice.actions;

export const getExistBDSM = (state: RootState) => state.bdsm.exist;
export const getBDSMs = (state: RootState) => state.bdsm.values
export const getOtherBDSMs = (state: RootState) => state.bdsm.others;
export const getDescription = (state: RootState) => state.bdsm.desc;

export default bdsmSlice.reducer;
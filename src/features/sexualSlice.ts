import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { Sexual, SexualProperty } from 'src/types/Sexual';

const initialState: SexualProperty = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const sexualSlice = createSlice({
  name: 'sexual',
  initialState,
  reducers: {
    toggleExistSexual: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setSexual: (state, action: PayloadAction<Sexual>) => {
      state.value = action.payload;
    },
    setOtherSexual: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistSexual,
  setSexual,
  setOtherSexual,
  setDescription,
} = sexualSlice.actions;

export const getExistSexual = (state: RootState) => state.sexual.exist;
export const getSexual = (state: RootState) => state.sexual.value;
export const getOtherSexual = (state: RootState) => state.sexual.other;
export const getDescription = (state: RootState) => state.sexual.desc;

export default sexualSlice.reducer;
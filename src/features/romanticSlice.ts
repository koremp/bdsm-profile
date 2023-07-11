import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { Romantic, RomanticProperty } from 'src/types/Romantic';

// Define the initial state using that type
const initialState: RomanticProperty = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const romanticSlice = createSlice({
  name: 'romantic',
  initialState,
  reducers: {
    toggleExistRomantic: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setRomantic: (state, action: PayloadAction<Romantic>) => {
      state.value = action.payload;
    },
    setOtherRomantic: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistRomantic,
  setRomantic,
  setOtherRomantic,
  setDescription,
} = romanticSlice.actions;

export const getExistRomantic = (state: RootState) => state.romantic.exist;
export const getRomantic = (state: RootState) => state.romantic.value;
export const getOtherRomantic = (state: RootState) => state.romantic.other;
export const getDescription = (state: RootState) => state.romantic.desc;

export default romanticSlice.reducer;
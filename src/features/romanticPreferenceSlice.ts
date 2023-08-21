import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { RomanticPreference, RomanticPrefenceProperty } from 'src/types/RomanticPreference';

export interface RomanticPreferenceState extends RomanticPrefenceProperty { };

const initialState: RomanticPreferenceState = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const romanticPreferenceSlice = createSlice({
  name: 'romanticPreference',
  initialState,
  reducers: {
    toggleExistRomanticPreference: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setRomanticPreference: (state, action: PayloadAction<RomanticPreference>) => {
      state.value = action.payload;
    },
    setOtherRomanticPreference: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistRomanticPreference,
  setRomanticPreference,
  setOtherRomanticPreference,
  setDescription,
} = romanticPreferenceSlice.actions;

export const getExistRomanticPreference = (state: RootState) => state.romanticPreference.exist;
export const getRomanticPreference = (state: RootState) => state.romanticPreference.value;
export const getOtherRomanticPreference = (state: RootState) => state.romanticPreference.other;
export const getDescription = (state: RootState) => state.romanticPreference.desc;

export default romanticPreferenceSlice.reducer;
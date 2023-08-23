import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { SexualPreference, SexualPreferenceProperty } from 'src/types/SexualPreference';

export interface SexualPreferenceState extends SexualPreferenceProperty { }

export const initialState: SexualPreferenceState = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const sexualPreferenceSlice = createSlice({
  name: 'sexualPreference',
  initialState,
  reducers: {
    toggleExistSexualPreference: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setSexualPreference: (state, action: PayloadAction<SexualPreference>) => {
      state.value = action.payload;
    },
    setOtherSexualPreference: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistSexualPreference,
  setSexualPreference,
  setOtherSexualPreference,
  setDescription,
} = sexualPreferenceSlice.actions;

export const getExistSexualPreference = (state: RootState) => state.sexualPreference.exist;
export const getSexualPreference = (state: RootState) => state.sexualPreference.value;
export const getOtherSexualPreference = (state: RootState) => state.sexualPreference.other;
export const getDescription = (state: RootState) => state.sexualPreference.desc;

export default sexualPreferenceSlice.reducer;
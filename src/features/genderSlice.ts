import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import {
  Gender,
  GenderProperty,
} from 'src/types/Gender';

const initialState: GenderProperty = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    toggleExistGender: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.value = action.payload;
    },
    setOtherGender: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistGender,
  setGender,
  setOtherGender,
  setDescription,
} = genderSlice.actions;

export const getExistGender = (state: RootState) => state.gender.exist;
export const getGender = (state: RootState) => state.gender.value;
export const getOtherGender = (state: RootState) => state.gender.other;
export const getDescription = (state: RootState) => state.gender.desc;


export default genderSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { SingleProps } from 'src/types/Props';

export interface AgeState extends SingleProps<string> { }

const initialState: AgeState = {
  exist: false,
  value: undefined,
  other: '',
  desc: ''
};

export const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    toggleExistAge: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc == '';
      }
    },
    setAge: (state, action: PayloadAction<string>) => {
      const selected: string = action.payload;

      state.value = selected;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      const desc: string = action.payload;

      state.desc = desc;
    },
  },
});

export const {
  toggleExistAge,
  setAge,
  setDescription,
} = ageSlice.actions;

export const getExistAge = (state: RootState) => state.age.exist;
export const getAge = (state: RootState) => state.age.value;
export const getDescription = (state: RootState) => state.age.desc;

export default ageSlice.reducer;
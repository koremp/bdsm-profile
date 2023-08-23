import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { RelationshipPreference, RelationshipPrefenceProperty } from 'src/types/RelationshipPreference';

export interface RelationshipState extends RelationshipPrefenceProperty { }

export const initialState: RelationshipState = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const relationshipPreferenceSlice = createSlice({
  name: 'relationshipPreference',
  initialState,
  reducers: {
    toggleExistRelationshipPreference: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setRelationshipPreference: (state, action: PayloadAction<RelationshipPreference>) => {
      state.value = action.payload;
    },
    setOtherRelationshipPreference: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistRelationshipPreference,
  setRelationshipPreference,
  setOtherRelationshipPreference,
  setDescription,
} = relationshipPreferenceSlice.actions;

export const getExistRelationshipPreference = (state: RootState) => state.sexualPreference.exist;
export const getRelationshipPreference = (state: RootState) => state.sexualPreference.value;
export const getOtherRelationshipPreference = (state: RootState) => state.sexualPreference.other;
export const getDescription = (state: RootState) => state.sexualPreference.desc;

export default relationshipPreferenceSlice.reducer;
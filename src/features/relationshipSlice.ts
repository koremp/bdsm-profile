import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { Relationship, RelationshipProperty } from 'src/types/Relationship';

// Define a type for the slice state
// Define the initial state using that type
const initialState: RelationshipProperty = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const relationshipSlice = createSlice({
  name: 'relatinship',
  initialState,
  reducers: {
    toggleExistRelationship: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setRelationship: (state, action: PayloadAction<Relationship>) => {
      state.value = action.payload;
    },
    setOtherRelationship: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  }
});

export const {
  toggleExistRelationship,
  setRelationship,
  setOtherRelationship,
  setDescription,
} = relationshipSlice.actions;

export const getExistRelationship = (state: RootState) => state.relationship.exist;
export const getRelationship = (state: RootState) => state.relationship.value;
export const getOtherRelationship = (state: RootState) => state.relationship.other;
export const getDescription = (state: RootState) => state.relationship.desc;

export default relationshipSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { MonopolyRelationship, MonopolyRelationshipProperty } from 'src/types/MonopolyRelationship';

// Define a type for the slice state
// Define the initial state using that type

export interface MonopolyRelationshipState extends MonopolyRelationshipProperty { }

export const initialState: MonopolyRelationshipState = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const monopolyRelationshipSlice = createSlice({
  name: 'monopolyRelatinship',
  initialState,
  reducers: {
    toggleExistMonopolyRelationship: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setMonopolyRelationship: (state, action: PayloadAction<MonopolyRelationship>) => {
      state.value = action.payload;
    },
    setOtherMonopolyRelationship: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  }
});

export const {
  toggleExistMonopolyRelationship,
  setMonopolyRelationship,
  setOtherMonopolyRelationship,
  setDescription,
} = monopolyRelationshipSlice.actions;

export const getExistMonopolyRelationship = (state: RootState) => state.monopolyRelationship.exist;
export const getMonopolyRelationship = (state: RootState) => state.monopolyRelationship.value;
export const getOtherMonopolyRelationship = (state: RootState) => state.monopolyRelationship.other;
export const getDescription = (state: RootState) => state.monopolyRelationship.desc;

export default monopolyRelationshipSlice.reducer;
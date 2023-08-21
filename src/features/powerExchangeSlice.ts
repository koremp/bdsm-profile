import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { PowerExchange, PowerExchangeProperty } from 'src/types/PowerExchange';

export interface PowerExchangeState extends PowerExchangeProperty { };

const initialState: PowerExchangeState = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
}

export const powerExchangeSlice = createSlice({
  name: 'PowerExchange',
  initialState,
  reducers: {
    toggleExistPowerExchange: state => {
      state.exist = !state.exist
      if (!state.exist) {
        state.value = undefined;
        state.other = '';
        state.desc = '';
      }
    },
    setPowerExchange: (state, action: PayloadAction<PowerExchange>) => {
      state.value = action.payload;
    },
    setOtherPowerExchange: (state, action: PayloadAction<string>) => {
      state.other = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
  },
});

export const {
  toggleExistPowerExchange,
  setPowerExchange,
  setOtherPowerExchange,
  setDescription,
} = powerExchangeSlice.actions;

export const getExistPowerExchange = (state: RootState) => state.powerExchange.exist;
export const getPowerExchange = (state: RootState) => state.powerExchange.value;
export const getOtherPowerExchange = (state: RootState) => state.powerExchange.other;
export const getDescription = (state: RootState) => state.powerExchange.desc;

export default powerExchangeSlice.reducer;
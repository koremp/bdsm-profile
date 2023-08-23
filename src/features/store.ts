import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import ageReducer from './ageSlice';
import bdsmReducer from './bdsmSlice';
import bdsmChecklistReducer, { initialState as bdsmInitialState } from './bdsmChecklistSlice';
import genderReducer from './genderSlice';
import monopolyRelationshipReducer from './monopolyRelationshipSlice';
import powerExchangeReducer from './powerExchangeSlice';
import relationshipPreferenceReducer from './relationshipPreferenceSlice';
import romanticPreferenceReducer from './romanticPreferenceSlice';
import sexualPreferenceReducer from './sexualPreferenceSlice';

const rootReducer = combineReducers({
  age: ageReducer,
  bdsm: bdsmReducer,
  bdsmChecklist: bdsmChecklistReducer,
  gender: genderReducer,
  monopolyRelationship: monopolyRelationshipReducer,
  powerExchange: powerExchangeReducer,
  relationshipPreference: relationshipPreferenceReducer,
  romanticPreference: romanticPreferenceReducer,
  sexualPreference: sexualPreferenceReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

const store = setupStore();
export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const rootState: RootState = {
  age: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
  bdsm: {
    exist: false,
    values: [],
    others: [],
    desc: '',
  },
  bdsmChecklist: bdsmInitialState,
  gender: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
  monopolyRelationship: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
  powerExchange: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
  relationshipPreference: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
  romanticPreference: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
  sexualPreference: {
    exist: false,
    value: undefined,
    other: '',
    desc: '',
  },
};
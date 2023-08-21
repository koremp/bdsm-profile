import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import ageReducer from './ageSlice';
import bdsmReducer from './bdsmSlice';
import bdsmChecklistReducer from './bdsmChecklistSlice';
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
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
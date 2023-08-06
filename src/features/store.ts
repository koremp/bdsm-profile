import { configureStore } from '@reduxjs/toolkit';

import ageReducer from './ageSlice';
import bdsmReducer from './bdsmSlice';
import bdsmChecklistReducer from './bdsmChecklistSlice';
import genderReducer from './genderSlice';
import monopolyRelationshipReducer from './monopolyRelationshipSlice';
import powerExchangeReducer from './powerExchangeSlice';
import relationshipPreferenceReducer from './relationshipPreferenceSlice';
import romanticPreferenceReducer from './romanticPreferenceSlice';
import sexualPreferenceReducer from './sexualPreferenceSlice';

const store = configureStore({
  reducer: {
    age: ageReducer,
    bdsm: bdsmReducer,
    bdsmChecklist: bdsmChecklistReducer,
    gender: genderReducer,
    monopolyRelationship: monopolyRelationshipReducer,
    powerExchange: powerExchangeReducer,
    relationshipPreference: relationshipPreferenceReducer,
    romanticPreference: romanticPreferenceReducer,
    sexualPreference: sexualPreferenceReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
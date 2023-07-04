import { configureStore } from '@reduxjs/toolkit';

import genderReducer from './genderSlice';
import romanticReducer from './romanticSlice';
import sexualReducer from './sexualSlice';
import relationshipReducer from './relationshipSlice';
import bdsmReducer from './bdsmSlice';

const store = configureStore({
  reducer: {
    gender: genderReducer,
    romantic: romanticReducer,
    sexual: sexualReducer,
    relationship: relationshipReducer,
    bdsm: bdsmReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
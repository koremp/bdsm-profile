import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from 'src/features/store';

import ageReducer from 'src/features/ageSlice';
import bdsmChecklistReducer from 'src/features/bdsmChecklistSlice';
import bdsmReducer from 'src/features/bdsmSlice';
import genderReducer from 'src/features/genderSlice';
import monopolyRelationshipReducer from 'src/features/monopolyRelationshipSlice';
import powerExchangeReducer from 'src/features/powerExchangeSlice';
import relationshipPreferenceReducer from 'src/features/relationshipPreferenceSlice';
import romanticPreferenceReducer from 'src/features/romanticPreferenceSlice';
import sexualPreferenceReducer from 'src/features/sexualPreferenceSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export default function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
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
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        {' '}
        {children}
        {' '}
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

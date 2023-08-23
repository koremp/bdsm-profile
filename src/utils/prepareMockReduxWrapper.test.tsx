import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { RootState } from 'src/features/store';

function prepareMockReduxWrapper(initialState?: RootState) {
  const store = configureMockStore()(initialState);
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store as any}>
      {children}
    </Provider>
  );
  return [wrapper, store] as const;
}

export default prepareMockReduxWrapper;

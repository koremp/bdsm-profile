'use client';

import { Provider } from 'react-redux';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import store from 'src/features/store';

import supabase from '../../lib/initSupabase';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionContextProvider>
  );
}

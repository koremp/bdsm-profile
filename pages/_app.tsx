import { Provider } from 'react-redux';

import { SessionContextProvider } from '@supabase/auth-helpers-react';

import type { AppProps } from 'next/app';

import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'styles/global.css';

import { deepPurple } from '@mui/material/colors';

import { supabase } from 'lib/initSupaase';

import store from 'src/features/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Provider store={store}>
        <Container
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: `${deepPurple[50]}`,
          }}
        >
          <Component>
            {...pageProps}
          </Component>
        </Container>
      </Provider>
    </SessionContextProvider>
  );
}

import { Provider } from 'react-redux';

import { supabase } from 'lib/initSupabase'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import type { AppProps } from 'next/app'

import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'styles/global.css';

import store from 'src/features/store';

import { deepPurple } from '@mui/material/colors';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Provider store={store}>
        <Container maxWidth="xs" sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: "100vh",
          backgroundColor: `${deepPurple[50]}`,
        }}>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </SessionContextProvider>
  )
}
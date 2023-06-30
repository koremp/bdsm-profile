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


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Container maxWidth="xs" sx={{
        backgroundColor: "#eeeeee",
        height: "100vh",
      }}>
        <Component {...pageProps} />
      </Container>
    </SessionContextProvider>
  )
}
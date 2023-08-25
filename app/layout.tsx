import { Provider } from 'react-redux';

import { SessionContextProvider } from '@supabase/auth-helpers-react';

import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'styles/global.css';

import { deepPurple } from '@mui/material/colors';

import store from 'src/features/store';

import supabase from '../lib/initSupabase';

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
              {children}
            </Container>
          </Provider>
        </SessionContextProvider>
      </body>
    </html>
  );
}

import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'styles/global.css';

import { deepPurple } from '@mui/material/colors';

import Providers from 'src/components/Providers';

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>BDSM Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}

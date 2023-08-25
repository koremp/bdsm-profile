import Head from 'next/head';

import { ButtonGroup } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import LinkButton from 'src/components/LinkButton';
import Page from 'src/components/Page';

export default function Home() {
  return (
    <>
      <Head>
        <title>BDSM Profile</title>
        <meta name="description" content="Index Page of BDSM Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page
        titleText="BDSM Profile"
      >
        {/* todo: add signin button */}
        <ButtonGroup
          sx={{ backgroundColor: `${deepPurple[100]}` }}
          fullWidth
          orientation="vertical"
          aria-label="bdsm profile button group"
        >
          <LinkButton href="/profile/select" name="Select Profile" />
          <LinkButton href="/guide" name="Guide" />
        </ButtonGroup>
      </Page>
    </>
  );
}
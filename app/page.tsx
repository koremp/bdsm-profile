import { ButtonGroup } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import LinkButton from 'src/components/LinkButton';
import Page from 'src/components/Page';

export default function Home() {
  return (
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
  );
}

import { ButtonGroup } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import LinkButton from 'src/components/LinkButton';
import Page from 'src/components/Page';

export default function GuidePage() {
  return (
    <Page
      titleText="BDSM Guide Page"
    >
      <ButtonGroup
        fullWidth
        orientation="vertical"
        sx={{ backgroundColor: `${deepPurple[100]}` }}
        aria-label="bdsm guide page link button group"
      >
        <LinkButton href="/guide/ssc" name="SSC" />
        <LinkButton href="/guide/rack" name="RACK" />
        <LinkButton href="/guide/prick" name="PRICK" />
        <LinkButton href="/guide/cnc" name="CNC" />
        <LinkButton href="/guide/cccc" name="CCCC" />
      </ButtonGroup>
    </Page>
  );
}

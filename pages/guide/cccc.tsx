import { ButtonGroup, Typography } from '@mui/material';
import Page from 'src/components/Page';
import LinkButton from 'src/components/LinkButton';
import { cccc } from 'src/constants/guides';

export default function CCCCGuidePage() {
  return (
    <Page titleText="CCCC">
      <ButtonGroup
        sx={{ mt: 'auto' }}
        fullWidth
        orientation="vertical"
        aria-label="bottom button group"
      >
        <Typography>{cccc}</Typography>
        <LinkButton href="/guide" name="Back" />
      </ButtonGroup>
    </Page>
  );
}

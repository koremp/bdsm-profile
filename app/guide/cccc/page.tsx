import { ButtonGroup, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
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
        <ButtonGroup
          variant="outlined"
          aria-label="bottom button group"
          fullWidth
          sx={{
            mt: 'auto',
            backgroundColor: deepPurple[100],
          }}
        >
          <LinkButton href="/guide" name="Back" />
        </ButtonGroup>
      </ButtonGroup>
    </Page>
  );
}

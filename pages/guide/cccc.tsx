import { ButtonGroup } from '@mui/material';

import Page from 'src/components/Page';
import LinkButton from 'src/components/LinkButton';

export default function CCCCGuidePage() {
  return (
    <Page titleText='CCCC'>
      <ButtonGroup
        sx={{ mt: 'auto' }}
        fullWidth
        orientation='vertical'
        aria-label='bottom button group'
      >
        <LinkButton href='/guide' name='Back' />
      </ButtonGroup>
    </Page>
  );
};
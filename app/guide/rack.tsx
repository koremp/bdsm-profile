import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { rack } from 'src/constants/guides';

export default function RACKGuidePage() {
  return (
    <Page
      titleText="RACK"
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/prick',
        nextName: 'PRICK',
      }}
    >
      <Typography>{rack}</Typography>
    </Page>
  );
}

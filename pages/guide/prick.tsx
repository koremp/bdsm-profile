import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { prick } from 'src/constants/guides';

export default function PRICKGuidePage() {
  return (
    <Page
      titleText='PRICK'
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/cnc',
        nextName: 'CNC',
      }}
    >
      <Typography>{prick}</Typography>

    </Page>
  );
};;
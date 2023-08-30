import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { prick } from 'src/constants/guides';

export default function PRICKGuidePage() {
  return (
    <Page
      titleText="PRICK"
      bottom={{
        back: {
          href: '/guide/rack',
          name: 'RACK',
        },
        middle: {
          href: '/guide',
          name: 'Back',
        },
        next: {
          href: '/guide/cnc',
          name: 'CNC',
        },
      }}
    >
      <Typography>{prick}</Typography>

    </Page>
  );
}

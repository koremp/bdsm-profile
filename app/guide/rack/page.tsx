import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { rack } from 'src/constants/guides';

export default function RACKGuidePage() {
  return (
    <Page
      titleText="RACK"
      bottom={{
        back: {
          href: '/guide/ssc',
          name: 'SSC',
        },
        middle: {
          href: '/guide',
          name: 'Back',
        },
        next: {
          href: '/guide/prick',
          name: 'PRICK',
        },
      }}
    >
      <Typography>{rack}</Typography>
    </Page>
  );
}

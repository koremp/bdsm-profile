import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { cnc } from 'src/constants/guides';

export default function CNCGuidePage() {
  return (
    <Page
      titleText="CNC"
      bottom={{
        back: {
          href: '/guide/prick',
          name: 'PRICK',
        },
        middle: {
          href: '/guide',
          name: 'Back',
        },
        next: {
          href: '/guide/cccc',
          name: 'CCCC',
        },
      }}
    >
      <Typography>{cnc}</Typography>
    </Page>
  );
}

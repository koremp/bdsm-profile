import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { cnc } from 'src/constants/guides';

export default function CNCGuidePage() {
  return (
    <Page
      titleText="CNC"
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/cccc',
        nextName: 'CCCC',
      }}
    >
      <Typography>{cnc}</Typography>
    </Page>
  );
}

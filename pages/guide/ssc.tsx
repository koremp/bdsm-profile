import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { ssc } from 'src/constants/guides';

export default function SSCGuidePage() {
  return (
    <Page
      titleText='SSC'
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/rack',
        nextName: 'RACK',
      }}
    >
      <Typography>{ssc}</Typography>
    </Page>
  );
}
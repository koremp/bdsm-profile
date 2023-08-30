import { Typography } from '@mui/material';
import Page from 'src/components/Page';
import { ssc } from 'src/constants/guides';

export default function SSCGuidePage() {
  return (
    <Page
      titleText="SSC"
      bottom={{
        back: {
          href: '/guide',
          name: 'Back',
        },
        middle: undefined,
        next: {
          href: '/guide/rack',
          name: 'RACK',
        },
      }}
    >
      <Typography>{ssc}</Typography>
    </Page>
  );
}

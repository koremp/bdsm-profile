import PowerExchangeComponent from 'src/components/select/PowerExchange';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function PowerExchangeSelectProfilePage() {
  return (
    <>
      <PowerExchangeComponent />
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/bdsm-checklist'>BDSM Checklist</Link>
      </Box>
    </>
  );
};
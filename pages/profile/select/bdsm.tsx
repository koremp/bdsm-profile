import { Box } from '@mui/material';
import Link from 'next/link';
import BDSMComponent from 'src/components/select/BDSM';

export default function BDSMSelectProfilePage() {
  return (
    <>
      <BDSMComponent />
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/powerExchange'>Power Exchange</Link>
      </Box>
    </>

  );
};
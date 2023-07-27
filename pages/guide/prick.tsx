import { Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function PRICKGuidePage() {
  return (
    <>
      <Typography>PRICK</Typography>
      <Box>
        <Link href='/guide'>Back</Link>
      </Box>
    </>
  );
};
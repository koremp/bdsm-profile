import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function SSCGuidePage() {
  return (
    <>
      <Typography>SSC</Typography>
      <Box>
        <Link href='/guide'>Back</Link>
      </Box>
    </>
  );
};
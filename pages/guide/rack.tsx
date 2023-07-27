import { Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function RACKGuidePage() {
  return (
    <>
      <Typography>RACK</Typography>
      <Box>
        <Link href='/guide'>Back</Link>
      </Box>
    </>
  );
};
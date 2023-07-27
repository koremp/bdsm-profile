import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function GuidePage() {
  return (
    <>
      <Typography>BDSM Guide Page</Typography>
      <Box>
        <Link href='/guide/cccc'>SSC</Link>
        <Link href='/guide/rack'>RACK</Link>
        <Link href='/guide/prick'>PRICK</Link>
        <Link href='/guide/cnc'>CNC</Link>
        <Link href='/guide/cccc'>CCCC</Link>
      </Box>
    </>
  );
};
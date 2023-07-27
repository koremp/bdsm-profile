import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function CNCGuidePage() {
  return (
    <>
      <Typography>CNC</Typography>
      <Box>
        <Link href='/guide'>Back</Link>
      </Box>
    </>
  );
};
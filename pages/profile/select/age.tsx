import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function AgeSelectProfilePage() {
  return (
    <>
      <Typography>Age</Typography>
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/gender'>Gender</Link>
      </Box>
    </>
  );
};
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function IndexSelectProfilePage() {
  return (
    <>
      <Typography variant='h3'>Select Profile</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Link
          href='/profile/select/age'
        >
          Age
        </Link>
        <Link
          href='/profile/select/gender'
        >
          Gender
        </Link>
        <Link href='/profile/select/romanticPreference'>
          Romantic Preference
        </Link>
        <Link
          href='/profile/select/sexualPreference'
        >
          Sexual Preference
        </Link>
        <Link
          href='/profile/select/monopolyRelationship'
        >
          Monopoly Relationship
        </Link>
        <Link
          href='/profile/select/relationshipPreference'
        >
          Relationship Preference
        </Link>
        <Link
          href='/profile/select/bdsm'
        >
          BDSM
        </Link>
        <Link
          href='/profile/select/powerExchange'
        >
          Power Exchange
        </Link>
        <Link
          href='/profile/result'
        >
          Result
        </Link>
      </Box>
    </>
  );
};
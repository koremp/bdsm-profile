import { Box, Button, Link, Typography } from '@mui/material';

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
          component='button'
          href='/profile/select/age'
          underline='none'
        >
          Age
        </Link>
        <Link
          component='button'
          href='/profile/select/gender'
          underline='none'
        >
          Gender
        </Link>
        <Link
          component='button'
          href='/profile/select/sexualPreference'
          underline='none'
        >
          Sexual Preference
        </Link>
        <Link
          component='button'
          href='/profile/select/monopolyRelationship'
          underline='none'
        >
          Monopoly Relationship
        </Link>
        <Link
          component='button'
          href='/profile/select/relationshipPreference'
          underline='none'
        >
          Relationship Preference
        </Link>
        <Link
          component='button'
          href='/profile/select/bdsm'
          underline='none'
        >
          BDSM
        </Link>
        <Link
          component='button'
          href='/profile/select/powerExchange'
          underline='none'
        >
          Power Exchange
        </Link>
        <Link
          component='button'
          href='/profile/result'
          underline='none'
        >
          Result
        </Link>
      </Box>
    </>
  );
};
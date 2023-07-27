import RomanticPreferenceComponent from 'src/components/select/RomanticPreference';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function RomanticPreferenceSelectProfilePage() {
  return (
    <>
      <RomanticPreferenceComponent />
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/sexualPreference'>Sexual Preference</Link>
      </Box>
    </>
  );
};
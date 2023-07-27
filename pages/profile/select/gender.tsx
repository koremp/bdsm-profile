import { Box } from '@mui/material';
import Link from 'next/link';
import GenderComponent from 'src/components/select/Gender';

export default function GenderSelectProfilePage() {
  return (
    <>
      <GenderComponent />
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/romanticPreference'>Romantic Preference</Link>
      </Box>
    </>
  );
};
import SexualPreferenceComponent from 'src/components/select/SexualPreference';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function SexualPreferenceSelectProfilePage() {
  return (
    <>
      <SexualPreferenceComponent />
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/monopolyRelationship'>Monopoly Relationship</Link>
      </Box>
    </>
  );
};
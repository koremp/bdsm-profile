import MonopolyRelationshipComponent from 'src/components/select/MonopolyRelationship';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function MonopolyRelationshipSelectProfilePage() {
  return (
    <>
      <MonopolyRelationshipComponent />
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/select/bdsm'>BDSM</Link>
      </Box>
    </>
  );
};
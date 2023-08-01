import { Box, Typography } from '@mui/material';
import Bottom from 'src/components/Bottom';

export default function AgeSelectProfilePage() {
  return (
    <>
      <Typography>Age</Typography>
      {/* todo: make age component */}
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/gender'
        nextName='Gender'
      />
    </>
  );
};
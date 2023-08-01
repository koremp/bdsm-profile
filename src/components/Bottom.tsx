import { ButtonGroup } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import LinkButton from './LinkButton';

export interface BottomProps {
  backHref: string
  backName: string
  nextHref: string
  nextName: string
};

export default function Bottom({
  backHref,
  backName,
  nextHref,
  nextName,
}: BottomProps) {
  return (
    <ButtonGroup
      variant='outlined'
      aria-label='bottom button group'
      fullWidth
      sx={{
        mt: 'auto',
        backgroundColor: `${deepPurple[100]}`
      }}
    >
      <LinkButton href={backHref} name={backName} />
      <LinkButton href={nextHref} name={nextName} />
    </ButtonGroup>
  );
};
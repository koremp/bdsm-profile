import { ButtonGroup } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import LinkButton from './LinkButton';

export interface ButtonProps {
  href: string
  name: string
}
export interface BottomProps {
  back: ButtonProps
  middle?: ButtonProps
  next: ButtonProps
}

export default function Bottom({
  back,
  middle,
  next,
}: BottomProps) {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="bottom button group"
      fullWidth
      sx={{
        mt: 'auto',
        backgroundColor: `${deepPurple[100]}`,
      }}
    >
      <LinkButton href={back.href} name={back.name} />
      {
        middle && (
          <LinkButton href={middle.href} name={middle.name} />
        )
      }
      <LinkButton href={next.href} name={next.name} />
    </ButtonGroup>
  );
}

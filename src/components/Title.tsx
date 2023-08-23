import { Typography } from '@mui/material';

export interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <Typography
      variant='h3'
      sx={{
        textAlign: 'center',
      }}>
      {text}
    </Typography>
  );
}
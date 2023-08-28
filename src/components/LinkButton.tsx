import { Button, Link } from '@mui/material';

export interface LinkButtonProps {
  href: string
  name: string
}

export default function LinkButton({ href, name }: LinkButtonProps) {
  return (
    <Link
      component={Button}
      href={href}
    >
      {name}
    </Link>
  );
}

import { Button } from '@mui/material';
import Link from 'next/link';

export interface LinkButtonProps {
  href: string
  name: string
}

export default function LinkButton({ href, name }: LinkButtonProps) {
  return (
    <Button>
      <Link href={href}>
        {name}
      </Link>
    </Button>
  );
}

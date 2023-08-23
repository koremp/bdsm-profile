import { TextField } from '@mui/material';
import { KeyboardEventHandler } from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}

export default function Input({
  value,
  onChange,
  onKeyDown,
}: InputProps) {
  return (
    <TextField
      required
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

Input.defaultProps = {
  onKeyDown: undefined,
};

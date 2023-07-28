import React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export interface ChecklistProps {
  label: string
  me: number
  you: number
  handleChange: ({ isMe, value }: { isMe: boolean, value: number }) => void
};

export default function Checklist({
  label,
  me,
  you,
  handleChange,
}: ChecklistProps) {
  return (
    <FormControl>
      <FormLabel>{label} - Me</FormLabel>
      <RadioGroup
        row
        aria-labelledby={label + '-me-group'}
        onChange={(event, value) => handleChange({ isMe: true, value: parseInt(value) })}
      >
        {
          Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
            <FormControlLabel value={n} control={<Radio />} label={n} />
          ))
        }
      </RadioGroup>
      <FormLabel>{label} - You</FormLabel>
      <RadioGroup
        row
        aria-labelledby={label + '-you-group'}
        onChange={(event, value) => handleChange({ isMe: false, value: parseInt(value) })}
      >
        {
          Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
            <FormControlLabel value={n} control={<Radio />} label={n} />
          ))
        }
      </RadioGroup >
    </FormControl >
  );
};
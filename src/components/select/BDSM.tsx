'use client';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Chip,
  Typography,
} from '@mui/material';

import {
  toggleExistBDSM,
  getExistBDSM,
  setBDSMs,
  getBDSMs,
  setOtherBDSMs,
  getOtherBDSMs,
  setDescription,
  getDescription,
} from 'src/features/bdsmSlice';

import { BDSM, bdsmArray } from 'src/types/BDSM';

import Input from 'src/components/Input';

export default function BDSMComponent() {
  const dispatch = useDispatch();

  const isExist = useSelector(getExistBDSM);
  const bdsms = useSelector(getBDSMs);
  const otherBDSMs = useSelector(getOtherBDSMs);
  const desc = useSelector(getDescription);

  const [input, setInput] = useState<string>('');

  const handleToggleBDSM = () => {
    dispatch(toggleExistBDSM());
  };

  const handleChangeBDSM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: BDSM = e.target.value;

    dispatch(setBDSMs(text));
  };

  return (
    <FormControl>
      <FormControlLabel
        control={(
          <Checkbox
            checked={isExist}
            onClick={() => handleToggleBDSM()}
          />
        )}
        label="BDSM"
      />
      {
        isExist && (
          <Box>
            <FormGroup
              onChange={handleChangeBDSM}
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {
                bdsmArray.map(({ text }) => (
                  <FormControlLabel
                    key={text}
                    value={text}
                    control={<Checkbox />}
                    label={text}
                  />
                ))
              }
              {
                bdsms.includes(BDSM.Other) && (
                  <Box>
                    <Input
                      value={input}
                      onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
                      }
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          dispatch(setOtherBDSMs(input));
                          setInput('');
                        }
                      }}
                    />
                  </Box>
                )
              }
              {
                otherBDSMs.map((otherBDSM) => (
                  <Chip label={otherBDSM} onDelete={() => dispatch(setOtherBDSMs(otherBDSM))} />
                ))
              }
              {
                isExist && (
                  <Box>
                    <Typography>Description</Typography>
                    <Input
                      value={desc}
                      onChange={(e) => { dispatch(setDescription(e.target.value)); }}
                    />
                  </Box>
                )
              }
            </FormGroup>
          </Box>
        )
      }
    </FormControl>
  );
}

import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';


import {
  getExistRomanticPreference,
  toggleExistRomanticPreference,
  getRomanticPreference,
  setRomanticPreference,
  getOtherRomanticPreference,
  setOtherRomanticPreference,
  getDescription,
  setDescription,
} from 'src/features/romanticPreferenceSlice';

import { RomanticPreference, romanticPreferenceArray } from 'src/types/RomanticPreference';

import Input from '../Input';

export default function RomanticComponent() {
  const dispatch = useDispatch();

  const isExist = useSelector(getExistRomanticPreference);
  const romanticPreference = useSelector(getRomanticPreference);
  const otherRomanticPreference = useSelector(getOtherRomanticPreference);
  const desc = useSelector(getDescription);

  const handleClickRomanticPreference = () => {
    dispatch(toggleExistRomanticPreference());
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRomanticPreference((e.target as HTMLInputElement).value));
  }

  const handleChangeOtherRomanticPreference = (e: React.ChangeEvent<HTMLInputElement>) => {
    const romanticPreference: RomanticPreference = (e.target as HTMLInputElement).value;
    dispatch(setOtherRomanticPreference(romanticPreference));
  }

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isExist}
            onClick={() => handleClickRomanticPreference()}
          />
        }
        label={"Romantic Preference"}
      />
      <>
        {
          isExist && (
            <>
              <RadioGroup
                value={romanticPreference}
                onChange={handleChange}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {
                  romanticPreferenceArray.map(({ text, description }) => (
                    <FormControlLabel
                      key={text}
                      value={text}
                      control={<Radio />}
                      label={text}
                    />
                  ))
                }
              </RadioGroup>
              {
                romanticPreference === RomanticPreference.Other && (
                  <Input
                    value={otherRomanticPreference}
                    onChange={handleChangeOtherRomanticPreference}
                  />
                )
              }
              <Box>
                <Typography>Description</Typography>
                <Input value={desc} onChange={(e) => { dispatch(setDescription(e.target.value)) }} />
              </Box>
            </>
          )
        }
      </>
    </FormControl>
  );
}
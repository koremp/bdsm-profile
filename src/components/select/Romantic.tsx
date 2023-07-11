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

import { Romantic } from 'src/types/Romantic';

import {
  getExistRomantic,
  toggleExistRomantic,
  getRomantic,
  setRomantic,
  getOtherRomantic,
  setOtherRomantic,
  getDescription,
  setDescription,
} from 'src/features/romanticSlice';

import romanticArray from 'src/constants/romanticArray';

import Input from '../Input';

export default function RomanticComponent() {
  const dispatch = useDispatch();

  const isExist = useSelector(getExistRomantic);
  const romantic = useSelector(getRomantic);
  const otherRomantic = useSelector(getOtherRomantic);
  const desc = useSelector(getDescription);

  const handleClickRomantic = () => {
    dispatch(toggleExistRomantic());
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRomantic((e.target as HTMLInputElement).value));
  }

  const handleChangeOtherRomantic = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLInputElement).value;
    dispatch(setOtherRomantic(text));
  }

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isExist}
            onClick={() => handleClickRomantic()}
          />
        }
        label={"Romantic"}
      />
      <>
        {
          isExist && (
            <>
              <RadioGroup
                value={romantic}
                onChange={handleChange}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {
                  romanticArray.map((s) => (
                    <FormControlLabel
                      key={s}
                      value={s}
                      control={<Radio />}
                      label={s}
                    />
                  ))
                }
              </RadioGroup>
              {
                romantic === Romantic.Other && (
                  <Input
                    value={otherRomantic}
                    onChange={handleChangeOtherRomantic}
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
};
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

import Input from 'src/components/Input';

import { Sexual } from 'src/types/Sexual';

import {
  getExistSexual,
  getSexual,
  toggleExistSexual,
  setSexual,
  getOtherSexual,
  setOtherSexual,
  getDescription,
  setDescription,
} from 'src/features/sexualSlice';

import sexualArray from 'src/constants/sexualArray';

export default function SexualComponent() {
  const dispatch = useDispatch();

  const isExist = useSelector(getExistSexual);
  const sexual = useSelector(getSexual);
  const otherSexual = useSelector(getOtherSexual);
  const desc = useSelector(getDescription);

  const handleClickSexual = () => {
    dispatch(toggleExistSexual());
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSexual((e.target as HTMLInputElement).value));
  }

  const handleChangeOtherSexual = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLInputElement).value;
    dispatch(setOtherSexual(text));
  }

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isExist}
            onClick={() => handleClickSexual()}
          />
        }
        label={"Sexual"}
      />
      {
        isExist && (
          <>
            <RadioGroup
              value={sexual}
              onChange={handleChange}
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {
                sexualArray.map((s) => (
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
              sexual === Sexual.Other && (
                <Input
                  value={otherSexual}
                  onChange={handleChangeOtherSexual}
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
    </FormControl>
  );
};
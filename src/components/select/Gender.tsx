import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Typography,
} from '@mui/material';

import { Gender, genderArray } from 'src/types/Gender';

import {
  toggleExistGender,
  getExistGender,
  setGender,
  getGender,
  setOtherGender,
  getOtherGender,
  setDescription,
  getDescription,
} from 'src/features/genderSlice';

import Input from 'src/components/Input';

export default function GenderComponent() {
  const dispatch = useDispatch();

  const isExist = useSelector(getExistGender);
  const gender = useSelector(getGender);
  const otherGender = useSelector(getOtherGender);
  const desc = useSelector(getDescription);

  const handleClickGender = () => {
    dispatch(toggleExistGender());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = (e.target as HTMLInputElement);
    dispatch(setGender(value));
  };

  const handleChangeOtherGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLInputElement).value;
    dispatch(setOtherGender(text));
  };

  return (
    <FormControl>
      <FormControlLabel
        control={(
          <Checkbox
            checked={isExist}
            onClick={() => handleClickGender()}
          />
        )}
        label="Gender"
      />
      {
        isExist && (
          <RadioGroup
            value={gender}
            onChange={handleChange}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {
              genderArray.map(({ text }) => (
                <FormControlLabel
                  key={text}
                  value={text}
                  control={<Radio />}
                  label={text}
                />
              ))
            }
          </RadioGroup>
        )
      }
      {
        gender === Gender.Other && (
          <Input
            value={otherGender}
            onChange={handleChangeOtherGender}
          />
        )
      }
      {
        isExist && (
          <Box>
            <Typography>Description</Typography>
            <Input value={desc} onChange={(e) => { dispatch(setDescription(e.target.value)); }} />
          </Box>
        )
      }
    </FormControl>
  );
}

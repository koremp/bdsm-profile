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

import {
  getExistSexualPreference,
  getSexualPreference,
  toggleExistSexualPreference,
  setSexualPreference,
  getOtherSexualPreference,
  setOtherSexualPreference,
  getDescription,
  setDescription,
} from 'src/features/sexualPreferenceSlice';

import { SexualPreference, sexualPreferenceArray } from 'src/types/SexualPreference';

export default function SexualComponent() {
  const dispatch = useDispatch();

  const isExist = useSelector(getExistSexualPreference);
  const sexualPreference = useSelector(getSexualPreference);
  const otherSexualPreference = useSelector(getOtherSexualPreference);
  const desc = useSelector(getDescription);

  const handleClickSexualPreference = () => {
    dispatch(toggleExistSexualPreference());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSexualPreference((e.target as HTMLInputElement).value));
  };

  const handleChangeOtherSexualPreference = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sexualPreference: SexualPreference = (e.target as HTMLInputElement).value;
    dispatch(setOtherSexualPreference(sexualPreference));
  };

  return (
    <FormControl>
      <FormControlLabel
        control={(
          <Checkbox
            checked={isExist}
            onClick={() => handleClickSexualPreference()}
          />
        )}
        label="SexualPreference"
      />
      {
        isExist && (
          <>
            <RadioGroup
              value={sexualPreference}
              onChange={handleChange}
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {
                sexualPreferenceArray.map(({ text, description }) => (
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
              sexualPreference === SexualPreference.Other && (
                <Input
                  value={otherSexualPreference}
                  onChange={handleChangeOtherSexualPreference}
                />
              )
            }
            <Box>
              <Typography>Description</Typography>
              <Input value={desc} onChange={(e) => { dispatch(setDescription(e.target.value)); }} />
            </Box>
          </>
        )
      }
    </FormControl>
  );
}

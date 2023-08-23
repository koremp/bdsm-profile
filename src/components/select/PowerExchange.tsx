import { useDispatch, useSelector } from 'react-redux';

import {
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Box,
  Typography,
} from '@mui/material';

import {
  toggleExistPowerExchange,
  getExistPowerExchange,
  setPowerExchange,
  getPowerExchange,
  setOtherPowerExchange,
  getOtherPowerExchange,
  setDescription,
  getDescription,
} from 'src/features/powerExchangeSlice';

import { PowerExchange, powerExchangeArray } from 'src/types/PowerExchange';

import Input from '../Input';

export default function PowerExchangeComponent() {
  const dispatch = useDispatch();

  const exist = useSelector(getExistPowerExchange);
  const powerExchange = useSelector(getPowerExchange);
  const otherPowerExchange = useSelector(getOtherPowerExchange);
  const desc = useSelector(getDescription);

  const toggleExist = () => {
    dispatch(toggleExistPowerExchange());
  };

  const handleChangePowerExchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(setPowerExchange(value));
  };

  return (
    <FormControl>
      <FormControlLabel
        control={(
          <Checkbox
            checked={exist}
            onClick={() => toggleExist()}
          />
        )}
        label="PowerExchange"
      />
      {
        exist && (
          <RadioGroup
            aria-labelledby="power-exchange-radio-buttons-group"
            value={powerExchange}
            name="power-exchange-radio-buttons-group"
            onChange={handleChangePowerExchange}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {
              powerExchangeArray.map(({ text }) => (
                <FormControlLabel
                  key={text}
                  value={text}
                  control={<Radio />}
                  label={text}
                />
              ))
            }
            {
              powerExchange === PowerExchange.Other && (
                <Input
                  value={otherPowerExchange}
                  onChange={(e) => dispatch(setOtherPowerExchange(e.target.value))}
                />
              )
            }
            <Box>
              <Typography>Description</Typography>
              <Input value={desc} onChange={(e) => { dispatch(setDescription(e.target.value)); }} />
            </Box>
          </RadioGroup>
        )
      }
    </FormControl>
  );
}

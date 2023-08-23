import {
  Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
  getExistAge,
  getAge,
  getDescription,
  toggleExistAge,
  setAge,
  setDescription,
} from 'src/features/ageSlice';
import Input from '../Input';

const ageArray: string[] = [
  '10s',
  '20s',
  '30s',
  '40s',
  '50s',
  'over 60',
];

export default function Age() {
  const dispatch = useDispatch();

  const exist = useSelector(getExistAge);
  const age = useSelector(getAge);
  const desc = useSelector(getDescription);

  return (
    <FormControl>
      <FormControlLabel
        control={(
          <Checkbox
            checked={exist}
            onClick={() => dispatch(toggleExistAge())}
          />
        )}
        label="Age"
      />
      {
        exist && (
          <>
            <InputLabel id="age-select-label">Age</InputLabel>
            <Select
              labelId="age-select-label"
              id="age-select-id"
              value={age}
              label="Age"
              onChange={(e: SelectChangeEvent) => dispatch(setAge(e.target.value))}
            >
              {
                ageArray.map((age) => (
                  <MenuItem value={age}>{age}</MenuItem>
                ))
              }
            </Select>
            <Box>
              <Typography>Description</Typography>
              <Input value={desc} onChange={(e) => dispatch(setDescription(e.target.value))} />
            </Box>
          </>
        )
      }
    </FormControl>
  );
}

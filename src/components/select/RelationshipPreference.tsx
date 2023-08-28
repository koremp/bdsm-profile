'use client';

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
  toggleExistRelationshipPreference,
  getExistRelationshipPreference,
  setRelationshipPreference,
  getRelationshipPreference,
  setOtherRelationshipPreference,
  getOtherRelationshipPreference,
  setDescription,
  getDescription,
} from 'src/features/relationshipPreferenceSlice';

import { RelationshipPreference, relationshipPreferenceArray } from 'src/types/RelationshipPreference';

import Input from '../Input';

export default function RelationshipPreferenceComponent() {
  const dispatch = useDispatch();

  const exist = useSelector(getExistRelationshipPreference);
  const relationshipPreference = useSelector(getRelationshipPreference);
  const otherRelationshipPreference = useSelector(getOtherRelationshipPreference);
  const desc = useSelector(getDescription);

  const toggleExist = () => {
    dispatch(toggleExistRelationshipPreference());
  };

  const handleChangeRelationshipPreference = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(setRelationshipPreference(value));
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
        label="Relationship Preference"
      />
      {
        exist && (
          <RadioGroup
            aria-labelledby="relationship-preference-radio-buttons-group"
            value={relationshipPreference}
            name="relationship-preference-radio-buttons-group"
            onChange={handleChangeRelationshipPreference}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {
              relationshipPreferenceArray.map(({ text }) => (
                <FormControlLabel
                  key={text}
                  value={text}
                  control={<Radio />}
                  label={text}
                />
              ))
            }
            {
              relationshipPreference === RelationshipPreference.Other && (
                <Input
                  value={otherRelationshipPreference}
                  onChange={(e) => dispatch(setOtherRelationshipPreference(e.target.value))}
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

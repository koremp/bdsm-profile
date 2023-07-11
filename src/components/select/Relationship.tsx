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
  toggleExistRelationship,
  getExistRelationship,
  setRelationship,
  getRelationship,
  setOtherRelationship,
  getOtherRelationship,
  setDescription,
  getDescription,
} from 'src/features/relationshipSlice';

import relationshipArray from 'src/constants/relationshipArray';

import { Relationship } from 'src/types/Relationship';

import Input from '../Input';

export default function RelationshipComponent() {
  const dispatch = useDispatch();

  const exist = useSelector(getExistRelationship);
  const relationship = useSelector(getRelationship);
  const otherRelationship = useSelector(getOtherRelationship);
  const desc = useSelector(getDescription);

  const toggleExist = () => {
    dispatch(toggleExistRelationship());
  }

  const handleChangeRelationship = (e: React.ChangeEvent<HTMLInputElement>) => {
    const relationship: Relationship = e.target.value;

    dispatch(setRelationship(relationship));
  }

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={exist}
            onClick={() => toggleExist()}
          />
        }
        label='Relationship'
      />
      {
        exist && (
          <RadioGroup
            aria-labelledby='relationship-radio-buttons-group'
            value={relationship}
            name='relationship-radio-buttons-group'
            onChange={handleChangeRelationship}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {
              relationshipArray.map((r) => (
                <FormControlLabel
                  key={r}
                  value={r}
                  control={<Radio />}
                  label={r}
                />
              ))
            }
            {
              relationship === Relationship.Other && (
                <Input
                  value={otherRelationship}
                  onChange={(e) => dispatch(setOtherRelationship(e.target.value))}
                />
              )
            }
            <Box>
              <Typography>Description</Typography>
              <Input value={desc} onChange={(e) => { dispatch(setDescription(e.target.value)) }} />
            </Box>
          </RadioGroup>
        )
      }
    </FormControl>
  );
};
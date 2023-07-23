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
  toggleExistMonopolyRelationship,
  getExistMonopolyRelationship,
  setMonopolyRelationship,
  getMonopolyRelationship,
  setOtherMonopolyRelationship,
  getOtherMonopolyRelationship,
  setDescription,
  getDescription,
} from 'src/features/monopolyRelationshipSlice';

import { MonopolyRelationship, monopolyRelationshipArray } from 'src/types/MonopolyRelationship';

import Input from '../Input';

export default function MonopolyRelationshipComponent() {
  const dispatch = useDispatch();

  const exist = useSelector(getExistMonopolyRelationship);
  const monopolyRelationship = useSelector(getMonopolyRelationship);
  const otherMonopolyRelationship = useSelector(getOtherMonopolyRelationship);
  const desc = useSelector(getDescription);

  const toggleExist = () => {
    dispatch(toggleExistMonopolyRelationship());
  }

  const handleChangeMonopolyRelationship = (e: React.ChangeEvent<HTMLInputElement>) => {
    const monopolyRelationship: MonopolyRelationship = e.target.value;

    dispatch(setMonopolyRelationship(monopolyRelationship));
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
        label='Monopoly Relationship'
      />
      {
        exist && (
          <RadioGroup
            aria-labelledby='monopoly-relationship-radio-buttons-group'
            value={monopolyRelationship}
            name='monopoly-relationship-radio-buttons-group'
            onChange={handleChangeMonopolyRelationship}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {
              monopolyRelationshipArray.map(({ text, description }) => (
                <FormControlLabel
                  key={text}
                  value={text}
                  control={<Radio />}
                  label={text}
                />
              ))
            }
            {
              monopolyRelationship === MonopolyRelationship.Other && (
                <Input
                  value={otherMonopolyRelationship}
                  onChange={(e) => dispatch(setOtherMonopolyRelationship(e.target.value))}
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
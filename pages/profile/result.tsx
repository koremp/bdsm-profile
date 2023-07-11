import { useSelector } from 'react-redux';

import {
  Box,
  Chip,
  Typography,
} from '@mui/material';

import {
  getExistGender,
  getGender,
  getOtherGender,
  getDescription as getGenderDesc,
} from 'src/features/genderSlice';

import {
  getExistRomantic,
  getOtherRomantic,
  getRomantic,
  getDescription as getRomanticDesc,
} from 'src/features/romanticSlice';

import {
  getExistSexual,
  getOtherSexual,
  getSexual,
  getDescription as getSexualDesc,
} from 'src/features/sexualSlice';

import {
  getExistRelationship,
  getOtherRelationship,
  getRelationship,
  getDescription as getRelationshipDesc,
} from 'src/features/relationshipSlice';

import {
  getExistBDSM,
  getOtherBDSMs,
  getBDSMs,
  getDescription as getBDSMDesc,
} from 'src/features/bdsmSlice';

import { Gender } from 'src/types/Gender';
import { Romantic } from 'src/types/Romantic';
import { Sexual } from 'src/types/Sexual';
import { Relationship } from 'src/types/Relationship';
import { BDSM } from 'src/types/BDSM';

export default function ResultProfilePage() {
  const existGender = useSelector(getExistGender)
  const gender = useSelector(getGender);
  const otherGender = useSelector(getOtherGender);
  const genderDesc = useSelector(getGenderDesc);

  const existRomantic = useSelector(getExistRomantic);
  const romantic = useSelector(getRomantic);
  const otherRomantic = useSelector(getOtherRomantic);
  const romanticDesc = useSelector(getRomanticDesc);

  const existSexual = useSelector(getExistSexual)
  const sexual = useSelector(getSexual);
  const otherSexual = useSelector(getOtherSexual);
  const sexualDesc = useSelector(getSexualDesc);

  const existRelationship = useSelector(getExistRelationship);
  const relationship = useSelector(getRelationship);
  const otherRelationship = useSelector(getOtherRelationship);
  const relationshipDesc = useSelector(getRelationship);

  const existBDSM = useSelector(getExistBDSM);
  const BDSMs = useSelector(getBDSMs);
  const otherBDSMs = useSelector(getOtherBDSMs);
  const BDSMDesc = useSelector(getBDSMDesc);

  return (
    <>
      <Typography>Profile Result Page</Typography>
      <Box>
        <Typography>
          Gender
        </Typography>
        <Box>
          {
            existGender && (
              <>
                {
                  gender !== Gender.Other ? (
                    <Chip label={gender} variant='outlined' />
                  ) : (
                    <Chip label={otherGender} variant='outlined' />
                  )
                }
              </>
            )
          }
        </Box>
        <Typography>{genderDesc}</Typography>
      </Box>
      <Box>
        <Typography>
          Romantic
        </Typography>
        <Box>
          {
            existRomantic && (
              <>
                {
                  romantic !== Romantic.Other ? (
                    <Chip label={romantic} variant='outlined' />
                  ) : (
                    <Chip label={otherRomantic} variant='outlined' />
                  )
                }
              </>
            )
          }
        </Box>
        <Typography>{romanticDesc}</Typography>
      </Box>
      <Box>
        <Typography>
          Sexual
        </Typography>
        <Box>
          {
            existSexual && (
              <>
                {
                  sexual !== Sexual.Other ? (
                    <Chip label={sexual} variant='outlined' />
                  ) : (
                    <Chip label={otherSexual} variant='outlined' />
                  )
                }
              </>
            )
          }
        </Box>
        <Typography>{sexualDesc}</Typography>
      </Box>
      <Box>
        <Typography>
          Relationship
        </Typography>
        <Box>
          {
            existRelationship && (
              <>
                {
                  relationship !== Relationship.Other ? (
                    <Chip label={relationship} variant='outlined' />
                  ) : (
                    <Chip label={otherRelationship} variant='outlined' />
                  )
                }
              </>
            )
          }
        </Box>
        <Typography>{relationshipDesc}</Typography>
      </Box>
      <Box>
        <Typography>
          BDSM
        </Typography>
        <Box>
          {
            existBDSM && (
              <>
                {
                  BDSMs.map((bdsm) => (
                    <Chip label={bdsm} variant='outlined' />
                  ))
                }
                {
                  BDSMs.includes(BDSM.Other) && (
                    otherBDSMs.map((other) => (
                      <Chip label={other} variant='outlined' />
                    ))
                  )
                }
              </>
            )
          }
        </Box>
        <Typography>{BDSMDesc}</Typography>
      </Box>
    </>
  );
};
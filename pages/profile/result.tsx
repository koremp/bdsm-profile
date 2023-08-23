import { useSelector } from 'react-redux';
import {
  Box,
  Chip,
  Typography,
} from '@mui/material';
import Page from 'src/components/Page';

import {
  getExistBDSM,
  getOtherBDSMs,
  getBDSMs,
  getDescription as getBDSMDesc,
} from 'src/features/bdsmSlice';

import {
  getExistGender,
  getGender,
  getOtherGender,
  getDescription as getGenderDesc,
} from 'src/features/genderSlice';

import {
  getExistRomanticPreference,
  getRomanticPreference,
  getOtherRomanticPreference,
  getDescription as getRomanticPreferenceDesc,
} from 'src/features/romanticPreferenceSlice';

import {
  getExistSexualPreference,
  getOtherSexualPreference,
  getSexualPreference,
  getDescription as getSexualPreferenceDesc,
} from 'src/features/sexualPreferenceSlice';

import {
  getExistRelationshipPreference,
  getOtherRelationshipPreference,
  getRelationshipPreference,
  getDescription as getRelationshipPreferenceDesc,
} from 'src/features/relationshipPreferenceSlice';

import {
  getExistMonopolyRelationship,
  getOtherMonopolyRelationship,
  getMonopolyRelationship,
  getDescription as getMonopolyRelationshipDesc,
} from 'src/features/monopolyRelationshipSlice';

import {
  getExistPowerExchange,
  getOtherPowerExchange,
  getPowerExchange,
  getDescription as getPowerExchangeDesc,
} from 'src/features/powerExchangeSlice';

import { BDSM } from 'src/types/BDSM';
import { Gender } from 'src/types/Gender';
import { RomanticPreference } from 'src/types/RomanticPreference';
import { SexualPreference } from 'src/types/SexualPreference';
import { MonopolyRelationship } from 'src/types/MonopolyRelationship';
import { RelationshipPreference } from 'src/types/RelationshipPreference';
import { PowerExchange } from 'src/types/PowerExchange';

export default function ResultProfilePage() {
  const existGender = useSelector(getExistGender);
  const gender = useSelector(getGender);
  const otherGender = useSelector(getOtherGender);
  const genderDesc = useSelector(getGenderDesc);

  const existRomanticPreference = useSelector(getExistRomanticPreference);
  const romanticPreference = useSelector(getRomanticPreference);
  const otherRomanticPreference = useSelector(getOtherRomanticPreference);
  const romanticPreferenceDesc = useSelector(getRomanticPreferenceDesc);

  const existSexualPreference = useSelector(getExistSexualPreference);
  const sexualPreference = useSelector(getSexualPreference);
  const otherSexualPreference = useSelector(getOtherSexualPreference);
  const sexualPreferenceDesc = useSelector(getSexualPreferenceDesc);

  const existRelationshipPreference = useSelector(getExistRelationshipPreference);
  const relationshipPreference = useSelector(getRelationshipPreference);
  const otherRelationshipPreference = useSelector(getOtherRelationshipPreference);
  const relationshipPreferenceDesc = useSelector(getRelationshipPreferenceDesc);

  const existMonopolyRelationship = useSelector(getExistMonopolyRelationship);
  const monopolyRelationship = useSelector(getMonopolyRelationship);
  const otherMonopolyRelationship = useSelector(getOtherMonopolyRelationship);
  const monopolyRelationshipDesc = useSelector(getMonopolyRelationshipDesc);

  const existBDSM = useSelector(getExistBDSM);
  const BDSMs = useSelector(getBDSMs);
  const otherBDSMs = useSelector(getOtherBDSMs);
  const BDSMDesc = useSelector(getBDSMDesc);

  const existPowerExchange = useSelector(getExistPowerExchange);
  const powerExchange = useSelector(getPowerExchange);
  const otherPowerExchange = useSelector(getOtherPowerExchange);
  const powerExchangeDesc = useSelector(getPowerExchange);

  return (
    <Page titleText="Selected BDSM Profile Result Page">
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
                    <Chip label={gender} variant="outlined" />
                  ) : (
                    <Chip label={otherGender} variant="outlined" />
                  )
                }
                <Typography>{genderDesc}</Typography>
              </>
            )
          }
        </Box>
      </Box>
      <Box>
        <Typography>
          Romantic Preference
        </Typography>
        <Box>
          {
            existRomanticPreference && (
              <>
                {
                  romanticPreference !== RomanticPreference.Other ? (
                    <Chip label={romanticPreference} variant="outlined" />
                  ) : (
                    <Chip label={otherRomanticPreference} variant="outlined" />
                  )
                }
                <Typography>{romanticPreferenceDesc}</Typography>
              </>
            )
          }
        </Box>
      </Box>
      <Box>
        <Typography>
          Sexual Preference
        </Typography>
        <Box>
          {
            existSexualPreference && (
              <>
                {
                  sexualPreference !== SexualPreference.Other ? (
                    <Chip label={sexualPreference} variant="outlined" />
                  ) : (
                    <Chip label={otherSexualPreference} variant="outlined" />
                  )
                }
                <Typography>{sexualPreferenceDesc}</Typography>
              </>
            )
          }
        </Box>
      </Box>
      <Box>
        <Typography>
          Relationship Preference
        </Typography>
        <Box>
          {
            existRelationshipPreference && (
              <>
                {
                  relationshipPreference !== RelationshipPreference.Other ? (
                    <Chip label={relationshipPreference} variant="outlined" />
                  ) : (
                    <Chip label={otherRelationshipPreference} variant="outlined" />
                  )
                }
                <Typography>{relationshipPreferenceDesc}</Typography>
              </>
            )
          }
        </Box>
      </Box>
      <Box>
        <Typography>
          Monopoly Relationship
        </Typography>
        <Box>
          {
            existMonopolyRelationship && (
              <>
                {
                  monopolyRelationship !== MonopolyRelationship.Other ? (
                    <Chip label={monopolyRelationship} variant="outlined" />
                  ) : (
                    <Chip label={otherMonopolyRelationship} variant="outlined" />
                  )
                }
                <Typography>{relationshipPreferenceDesc}</Typography>
              </>
            )
          }
        </Box>
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
                    <Chip label={bdsm} variant="outlined" />
                  ))
                }
                {
                  BDSMs.includes(BDSM.Other) && (
                    otherBDSMs.map((other) => (
                      <Chip label={other} variant="outlined" />
                    ))
                  )
                }
                <Typography>{BDSMDesc}</Typography>
              </>
            )
          }
        </Box>
      </Box>
      <Box>
        <Typography>
          Power Exchange
        </Typography>
        <Box>
          {
            existPowerExchange && (
              <>
                {
                  powerExchange !== PowerExchange.Other ? (
                    <Chip label={powerExchange} variant="outlined" />
                  ) : (
                    <Chip label={otherPowerExchange} variant="outlined" />
                  )
                }
                <Typography>{powerExchangeDesc}</Typography>
              </>
            )
          }
        </Box>
      </Box>
    </Page>
  );
}

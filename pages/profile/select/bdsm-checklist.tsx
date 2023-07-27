import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography
} from '@mui/material';

import Link from 'next/link';

import { analArray } from 'src/types/bdsm/Anal';
import { bondageArray } from 'src/types/bdsm/Bondage';
import { erogenousArray } from 'src/types/bdsm/Erogenous';
import { filmArray } from 'src/types/bdsm/Film';
import { multiplayArray } from 'src/types/bdsm/Multyplay';
import { nonPenetrationArray } from 'src/types/bdsm/NonPenetration';
import { oralArray } from 'src/types/bdsm/Oral';
import { outdoorArray } from 'src/types/bdsm/Outdoor';
import { roleplayArray } from 'src/types/bdsm/Roleplay';
import { sexualPositionArray } from 'src/types/bdsm/SexualPosition';
import { spankingArray } from 'src/types/bdsm/Spanking';
import { toolArray } from 'src/types/bdsm/Tool';
import { waxArray } from 'src/types/bdsm/Wax';
import { worshipArray } from 'src/types/bdsm/Worship';
import { dirtyArray } from 'src/types/bdsm/sadism/Dirty';
import { mentalArray } from 'src/types/bdsm/sadism/Mental';
import { physicalArray } from 'src/types/bdsm/sadism/Physical';
import { softArray } from 'src/types/bdsm/sadism/Soft';

export default function bdsmChecklist() {
  return (
    <Box>
      <Typography>BDSM Checklist</Typography>
      <FormControl>
        <Typography>Erogenous</Typography>
        {
          erogenousArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Worship</Typography>
        {
          worshipArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Soft</Typography>
        {
          softArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Mental</Typography>
        {
          mentalArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Physical</Typography>
        {
          physicalArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Dirty Play</Typography>
        {
          dirtyArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Tool</Typography>
        {
          toolArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Bondage</Typography>
        {
          bondageArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Wax Play</Typography>
        {
          waxArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Spanking</Typography>
        {
          spankingArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Roleplay</Typography>
        {
          roleplayArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Flim</Typography>
        {
          filmArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Outdoor</Typography>
        {
          outdoorArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Multiplay</Typography>
        {
          multiplayArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Non Penetration Sexual Behavior</Typography>
        {
          nonPenetrationArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Sexual Position</Typography>
        {
          sexualPositionArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Oral</Typography>
        {
          oralArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <FormControl>
        <Typography>Anal</Typography>
        {
          analArray.map((item) => (
            <FormControlLabel control={<Checkbox />} label={item} />
          ))
        }
      </FormControl>
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/result'>Result</Link>
      </Box>
    </Box>
  );
};
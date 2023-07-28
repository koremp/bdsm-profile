import {
  Box,
  FormControl,
  FormLabel,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';

import { Erogenous, erogenousArray } from 'src/types/bdsm/Erogenous';
import { Worship, worshipArray } from 'src/types/bdsm/Worship';
import { Soft, softArray } from 'src/types/bdsm/sadism/Soft';
import { Mental, mentalArray } from 'src/types/bdsm/sadism/Mental';
import { Physical, physicalArray } from 'src/types/bdsm/sadism/Physical';
import { Dirty, dirtyArray } from 'src/types/bdsm/sadism/Dirty';
import { Tool, toolArray } from 'src/types/bdsm/Tool';
import { Bondage, bondageArray } from 'src/types/bdsm/Bondage';
import { Wax, waxArray } from 'src/types/bdsm/Wax';
import { Spanking, spankingArray } from 'src/types/bdsm/Spanking';
import { Roleplay, roleplayArray } from 'src/types/bdsm/Roleplay';
import { Film, filmArray } from 'src/types/bdsm/Film';
import { Outdoor, outdoorArray } from 'src/types/bdsm/Outdoor';
import { Multiplay, multiplayArray } from 'src/types/bdsm/Multiplay';
import { NonPenetration, nonPenetrationArray } from 'src/types/bdsm/NonPenetration';
import { SexualPosition, sexualPositionArray } from 'src/types/bdsm/SexualPosition';
import { Oral, oralArray } from 'src/types/bdsm/Oral';
import { Anal, analArray } from 'src/types/bdsm/Anal';

import {
  getChecklistErogenous,
  setChecklistErogenous,
  getChecklistWorship,
  setChecklistWorship,
  getChecklistSoft,
  setChecklistSoft,
  getChecklistMental,
  setChecklistMental,
  getChecklistPhysical,
  setChecklistPhysical,
  getChecklistDirty,
  setChecklistDirty,
  getChecklistTool,
  setChecklistTool,
  getChecklistBondage,
  setChecklistBondage,
  getChecklistWax,
  setChecklistWax,
  getChecklistSpanking,
  setChecklistSpanking,
  getChecklistRoleplay,
  setChecklistRoleplay,
  getChecklistFilm,
  setChecklistFilm,
  getChecklistOutdoor,
  setChecklistOutdoor,
  getChecklistMultiplay,
  setChecklistMultiplay,
  getChecklistNonPenetration,
  setChecklistNonPenetration,
  getChecklistSexualPosition,
  setChecklistSexualPosition,
  getChecklistOral,
  setChecklistOral,
  getChecklistAnal,
  setChecklistAnal,
} from 'src/features/bdsmChecklistSlice';

import Checklist from 'src/components/Checklist';

export default function bdsmChecklist() {
  const dispatch = useDispatch();

  const erogenous = useSelector(getChecklistErogenous);
  const worship = useSelector(getChecklistWorship);
  const soft = useSelector(getChecklistSoft);
  const mental = useSelector(getChecklistMental);
  const physical = useSelector(getChecklistPhysical);
  const dirty = useSelector(getChecklistDirty);
  const tool = useSelector(getChecklistTool);
  const bondage = useSelector(getChecklistBondage);
  const wax = useSelector(getChecklistWax);
  const spanking = useSelector(getChecklistSpanking);
  const roleplay = useSelector(getChecklistRoleplay);
  const film = useSelector(getChecklistFilm);
  const outdoor = useSelector(getChecklistOutdoor);
  const multiplay = useSelector(getChecklistMultiplay);
  const nonPenentration = useSelector(getChecklistNonPenetration);
  const sexualPosition = useSelector(getChecklistSexualPosition);
  const oral = useSelector(getChecklistOral);
  const anal = useSelector(getChecklistAnal);

  const handleChangeErogenous = (type: Erogenous, isMe: boolean, value: number) => {
    dispatch(setChecklistErogenous({ isMe, value, type }));
  };

  const handleChangeWorship = (type: Worship, isMe: boolean, value: number) => {
    dispatch(setChecklistWorship({ isMe, value, type }));
  };

  const handleChangeSoft = (type: Soft, isMe: boolean, value: number) => {
    dispatch(setChecklistSoft({ isMe, value, type }));
  };

  const handleChangeMental = (type: Mental, isMe: boolean, value: number) => {
    dispatch(setChecklistMental({ isMe, value, type }));
  };

  const handleChangePhysical = (type: Physical, isMe: boolean, value: number) => {
    dispatch(setChecklistPhysical({ isMe, value, type }));
  };

  const handleChangeDirty = (type: Dirty, isMe: boolean, value: number) => {
    dispatch(setChecklistDirty({ isMe, value, type }));
  };

  const handleChangeTool = (type: Tool, isMe: boolean, value: number) => {
    dispatch(setChecklistTool({ isMe, value, type }));
  };

  const handleChangeBondage = (type: Bondage, isMe: boolean, value: number) => {
    dispatch(setChecklistBondage({ isMe, value, type }));
  };

  const handleChangeWax = (type: Wax, isMe: boolean, value: number) => {
    dispatch(setChecklistWax({ isMe, value, type }));
  };

  const handleChangeSpanking = (type: Spanking, isMe: boolean, value: number) => {
    dispatch(setChecklistSpanking({ isMe, value, type }));
  };

  const handleChangeRoleplay = (type: Roleplay, isMe: boolean, value: number) => {
    dispatch(setChecklistRoleplay({ isMe, value, type }));
  };

  const handleChangeFilm = (type: Film, isMe: boolean, value: number) => {
    dispatch(setChecklistFilm({ isMe, value, type }));
  };

  const handleChangeOutdoor = (type: Outdoor, isMe: boolean, value: number) => {
    dispatch(setChecklistOutdoor({ isMe, value, type }));
  };

  const handleChangeMultiplay = (type: Multiplay, isMe: boolean, value: number) => {
    dispatch(setChecklistMultiplay({ isMe, value, type }));
  };

  const handleChangeNonPenetration = (type: NonPenetration, isMe: boolean, value: number) => {
    dispatch(setChecklistNonPenetration({ isMe, value, type }));
  };

  const handleChangeSexualPosition = (type: SexualPosition, isMe: boolean, value: number) => {
    dispatch(setChecklistSexualPosition({ isMe, value, type }));
  };

  const handleChangeOral = (type: Oral, isMe: boolean, value: number) => {
    dispatch(setChecklistOral({ isMe, value, type }));
  };

  const handleChangeAnal = (type: Anal, isMe: boolean, value: number) => {
    dispatch(setChecklistAnal({ isMe, value, type }));
  };

  return (
    <Box>
      <Typography>BDSM Checklist</Typography>
      <FormControl>
        <FormLabel>Erogenous</FormLabel>
        {
          erogenousArray.map((item, index) => {
            const type = item as Erogenous;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={erogenous[index].me}
                  you={erogenous[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeErogenous(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Worship</Typography>
        {
          worshipArray.map((item, index) => {
            const type = item as Worship;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={worship[index].me}
                  you={worship[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeWorship(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Soft</Typography>
        {
          softArray.map((item, index) => {
            const type = item as Soft;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={soft[index].me}
                  you={soft[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeSoft(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Mental</Typography>
        {
          mentalArray.map((item, index) => {
            const type = item as Mental;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={mental[index].me}
                  you={mental[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeMental(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Physical</Typography>
        {
          physicalArray.map((item, index) => {
            const type = item as Physical;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={physical[index].me}
                  you={physical[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangePhysical(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Dirty Play</Typography>
        {
          dirtyArray.map((item, index) => {
            const type = item as Dirty;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={dirty[index].me}
                  you={dirty[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeDirty(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Tool</Typography>
        {
          toolArray.map((item, index) => {
            const type = item as Tool;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={tool[index].me}
                  you={tool[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeTool(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Bondage</Typography>
        {
          bondageArray.map((item, index) => {
            const type = item as Bondage;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={bondage[index].me}
                  you={bondage[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeBondage(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Wax Play</Typography>
        {
          waxArray.map((item, index) => {
            const type = item as Wax;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={wax[index].me}
                  you={wax[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeWax(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Spanking</Typography>
        {
          spankingArray.map((item, index) => {
            const type = item as Spanking;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={spanking[index].me}
                  you={spanking[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeSpanking(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Roleplay</Typography>
        {
          roleplayArray.map((item, index) => {
            const type = item as Roleplay;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={roleplay[index].me}
                  you={roleplay[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeRoleplay(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Flim</Typography>
        {
          filmArray.map((item, index) => {
            const type = item as Film;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={film[index].me}
                  you={film[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeFilm(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Outdoor</Typography>
        {
          outdoorArray.map((item, index) => {
            const type = item as Outdoor;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={outdoor[index].me}
                  you={outdoor[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeOutdoor(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Multiplay</Typography>
        {
          multiplayArray.map((item, index) => {
            const type = item as Multiplay;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={multiplay[index].me}
                  you={multiplay[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeMultiplay(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Non Penetration Sexual Behavior</Typography>
        {
          nonPenetrationArray.map((item, index) => {
            const type = item as NonPenetration;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={nonPenentration[index].me}
                  you={nonPenentration[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeNonPenetration(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Sexual Position</Typography>
        {
          sexualPositionArray.map((item, index) => {
            const type = item as SexualPosition;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={sexualPosition[index].me}
                  you={sexualPosition[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeSexualPosition(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Oral</Typography>
        {
          oralArray.map((item, index) => {
            const type = item as Oral;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={oral[index].me}
                  you={oral[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeOral(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <FormControl>
        <Typography>Anal</Typography>
        {
          analArray.map((item, index) => {
            const type = item as Anal;
            return (
              <>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={anal[index].me}
                  you={anal[index].you}
                  handleChange={
                    ({ isMe, value }) =>
                      handleChangeAnal(type, isMe, value)
                  }
                />
              </>
            );
          })
        }
      </FormControl>
      <Box>
        <Link href='/profile/select'>Back</Link>
        <Link href='/profile/result'>Result</Link>
      </Box>
    </Box>
  );
};
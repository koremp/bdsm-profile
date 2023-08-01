import {
  Box,
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
  getChecklistWorship,
  getChecklistSoft,
  getChecklistMental,
  getChecklistPhysical,
  getChecklistDirty,
  getChecklistTool,
  getChecklistBondage,
  getChecklistWax,
  getChecklistSpanking,
  getChecklistRoleplay,
  getChecklistFilm,
  getChecklistOutdoor,
  getChecklistMultiplay,
  getChecklistNonPenetration,
  getChecklistSexualPosition,
  getChecklistOral,
  getChecklistAnal,
  setChecklist,
} from 'src/features/bdsmChecklistSlice';

import ChecklistGroup from 'src/components/ChecklistGroup';
import { BDSMChecklist, BDSMType } from 'src/types/bdsm/BDSMChecklist';
import Bottom from 'src/components/Bottom';
import Page from 'src/components/Page';

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

  const handleChangeChecklist = ({ isMe, value, checklist, type }: { isMe: boolean, value: number, checklist: BDSMChecklist, type: BDSMType }) => {
    dispatch(setChecklist({ isMe, value, checklist, type }));
  };

  return (
    <Page
      titleText='Profile Select - BDSM Checklist'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/result',
        nextName: 'Result',
      }}
    >
      <ChecklistGroup
        groupName='Erogenous'
        typeArray={erogenousArray}
        checklistArray={erogenous}
        handleChange={
          ({ isMe, value, type }: { isMe: boolean, value: number, type: BDSMType }) =>
            // todo: fix this
            handleChangeChecklist({ isMe, value, checklist: BDSMChecklist.Erogenous, type })
        }
      />
    </Page>
  );
};
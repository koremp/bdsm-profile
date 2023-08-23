import { useDispatch, useSelector } from 'react-redux';

import { erogenousArray } from 'src/types/bdsm/Erogenous';
import { worshipArray } from 'src/types/bdsm/Worship';
import { softArray } from 'src/types/bdsm/sadism/Soft';
import { mentalArray } from 'src/types/bdsm/sadism/Mental';
import { physicalArray } from 'src/types/bdsm/sadism/Physical';
import { dirtyArray } from 'src/types/bdsm/sadism/Dirty';
import { toolArray } from 'src/types/bdsm/Tool';
import { bondageArray } from 'src/types/bdsm/Bondage';
import { waxArray } from 'src/types/bdsm/Wax';
import { spankingArray } from 'src/types/bdsm/Spanking';
import { roleplayArray } from 'src/types/bdsm/Roleplay';
import { filmArray } from 'src/types/bdsm/Film';
import { outdoorArray } from 'src/types/bdsm/Outdoor';
import { multiplayArray } from 'src/types/bdsm/Multiplay';
import { nonPenetrationArray } from 'src/types/bdsm/NonPenetration';
import { sexualPositionArray } from 'src/types/bdsm/SexualPosition';
import { oralArray } from 'src/types/bdsm/Oral';
import { analArray } from 'src/types/bdsm/Anal';

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
  ChecklistValue,
} from 'src/features/bdsmChecklistSlice';

import ChecklistGroup from 'src/components/ChecklistGroup';
import Page from 'src/components/Page';

import { BDSMChecklist, BDSMType } from 'src/types/bdsm/BDSMChecklist';

export interface Item {
  groupName: string
  typeArray: string[]
  checklistArray: ChecklistValue[]
  checklist: BDSMChecklist
}

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
  const nonPenetration = useSelector(getChecklistNonPenetration);
  const sexualPosition = useSelector(getChecklistSexualPosition);
  const oral = useSelector(getChecklistOral);
  const anal = useSelector(getChecklistAnal);

  const handleChangeChecklist = ({
    isMe, value, checklist, type,
  }: { isMe: boolean, value: number, checklist: BDSMChecklist, type: BDSMType }) => {
    dispatch(setChecklist({
      isMe, value, checklist, type,
    }));
  };

  const bdsmChecklistArray: Item[] = [
    {
      groupName: 'Erogenous',
      typeArray: erogenousArray,
      checklistArray: erogenous,
      checklist: BDSMChecklist.Erogenous,
    },
    {
      groupName: 'Worship',
      typeArray: worshipArray,
      checklistArray: worship,
      checklist: BDSMChecklist.Worship,
    },
    {
      groupName: 'Soft',
      typeArray: softArray,
      checklistArray: soft,
      checklist: BDSMChecklist.Soft,
    },
    {
      groupName: 'Mental',
      typeArray: mentalArray,
      checklistArray: mental,
      checklist: BDSMChecklist.Mental,
    },
    {
      groupName: 'Physical',
      typeArray: physicalArray,
      checklistArray: physical,
      checklist: BDSMChecklist.Physical,
    },
    {
      groupName: 'Dirty',
      typeArray: dirtyArray,
      checklistArray: dirty,
      checklist: BDSMChecklist.Dirty,
    },
    {
      groupName: 'Tool',
      typeArray: toolArray,
      checklistArray: tool,
      checklist: BDSMChecklist.Tool,
    },
    {
      groupName: 'Bondage',
      typeArray: bondageArray,
      checklistArray: bondage,
      checklist: BDSMChecklist.Bondage,
    },
    {
      groupName: 'Wax',
      typeArray: waxArray,
      checklistArray: wax,
      checklist: BDSMChecklist.Wax,
    },
    {
      groupName: 'Spanking',
      typeArray: spankingArray,
      checklistArray: spanking,
      checklist: BDSMChecklist.Spanking,
    },
    {
      groupName: 'Roleplay',
      typeArray: roleplayArray,
      checklistArray: roleplay,
      checklist: BDSMChecklist.Roleplay,
    },
    {
      groupName: 'Film',
      typeArray: filmArray,
      checklistArray: film,
      checklist: BDSMChecklist.Film,
    },
    {
      groupName: 'Outdoor',
      typeArray: outdoorArray,
      checklistArray: outdoor,
      checklist: BDSMChecklist.Outdoor,
    },
    {
      groupName: 'Multiplay',
      typeArray: multiplayArray,
      checklistArray: multiplay,
      checklist: BDSMChecklist.Multiplay,
    },
    {
      groupName: 'Non Penetration',
      typeArray: nonPenetrationArray,
      checklistArray: nonPenetration,
      checklist: BDSMChecklist.NonPenetration,
    },
    {
      groupName: 'Sexual Position',
      typeArray: sexualPositionArray,
      checklistArray: sexualPosition,
      checklist: BDSMChecklist.SexualPosition,
    },
    {
      groupName: 'Oral',
      typeArray: oralArray,
      checklistArray: oral,
      checklist: BDSMChecklist.Oral,
    },
    {
      groupName: 'Anal',
      typeArray: analArray,
      checklistArray: anal,
      checklist: BDSMChecklist.Anal,
    },
  ];

  return (
    <Page
      titleText="Profile Select - BDSM Checklist"
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/result',
        nextName: 'Result',
      }}
    >
      {
        bdsmChecklistArray.map(({
          groupName,
          typeArray,
          checklistArray,
          checklist,
        }) => (
          <ChecklistGroup
            groupName={groupName}
            typeArray={typeArray}
            checklistArray={checklistArray}
            handleChange={
              ({ isMe, value, type }: { isMe: boolean, value: number, type: BDSMType }) => handleChangeChecklist({
                isMe, value, checklist, type,
              })
            }
          />
        ))
      }
    </Page>
  );
}

import {
  Box, Button, ButtonGroup, Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import { useState } from 'react';
import { ChecklistValue } from 'src/features/bdsmChecklistSlice';
import { BDSMType } from 'src/types/bdsm/BDSMChecklist';

import Checklist from './Checklist';

export interface ChecklistGroupProps {
  key: string
  checklistIdx: number
  lastIdx: number
  handleChangeChecklistIdx: ({ isForward }: { isForward: boolean }) => void
  groupName: string
  typeArray: string[]
  checklistArray: ChecklistValue[]
  handleChange: ({ isMe, value, type }: { isMe: boolean, value: number, type: BDSMType }) => void
}

export default function ChecklistGroup({
  key,
  checklistIdx,
  lastIdx,
  handleChangeChecklistIdx,
  groupName,
  typeArray,
  checklistArray,
  handleChange,
}: ChecklistGroupProps) {
  return (
    <Box
      key={key}
      sx={{
        p: 2,
        borderRadius: '1rem',
      }}
    >
      <Typography>{groupName}</Typography>
      <Box sx={{
        mt: 2,
        backgroundColor: `${deepPurple[100]}`,
        borderRadius: '1rem',
      }}
      >
        {
          typeArray.map((item, index) => {
            const type = item;
            return (
              <Box
                key={item}
                sx={{
                  p: 1,
                }}
              >
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={checklistArray[index].me}
                  you={checklistArray[index].you}
                  handleChange={
                    ({ isMe, value }) => {
                      handleChange({ isMe, value, type });
                    }
                  }
                />

              </Box>
            );
          })
        }
        <ButtonGroup
          variant="outlined"
          aria-label="checklist-group-bottom-button-group"
          fullWidth
          sx={{
            mt: 'auto',
            backgroundColor: deepPurple[100],
          }}
        >

          {
            checklistIdx === 0 && (
              <Button
                onClick={() => handleChangeChecklistIdx({ isForward: true })}
              >
                Next
              </Button>
            )
          }
          {
            ((checklistIdx !== 0) && (checklistIdx !== lastIdx)) && (
              <>
                <Button
                  onClick={() => handleChangeChecklistIdx({ isForward: false })}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => handleChangeChecklistIdx({ isForward: true })}
                >
                  Next
                </Button>
              </>
            )
          }
          {
            checklistIdx === lastIdx && (
              <Button
                onClick={() => handleChangeChecklistIdx({ isForward: false })}
              >
                Previous
              </Button>
            )
          }
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export function TutorialChecklistGroup({
  handleChangeChecklistIdx,
}: {
  handleChangeChecklistIdx: ({ isForward }: { isForward: boolean }) => void,
}) {
  const [checklistArray, setChecklistArray] = useState<ChecklistValue[]>([
    {
      me: -1,
      you: -1,
    },
  ]);

  const typeArray: string[] = [
    'Me (when I feel good), You (when I want to touch other)',
  ];

  const handleChange = (
    { isMe, value, index }: { isMe: boolean, value: number, index: number },
  ) => {
    const newChecklistArray = [...checklistArray];
    const newChecklistValue = { ...checklistArray[index] };

    if (isMe) {
      newChecklistValue.me = value;
      newChecklistArray.splice(index, 1, newChecklistValue);
    } else {
      newChecklistValue.you = value;
      newChecklistArray.splice(index, 1, newChecklistValue);
    }

    setChecklistArray(newChecklistArray);
  };

  return (
    <ChecklistGroup
      key="tutorial-checklist-group"
      checklistIdx={0}
      lastIdx={1}
      handleChangeChecklistIdx={() => handleChangeChecklistIdx({ isForward: true })}
      groupName="Checklist Tutorial Group"
      typeArray={typeArray}
      checklistArray={checklistArray}
      handleChange={
        (
          { isMe, value }: { isMe: boolean, value: number },
        ) => handleChange({ isMe, value, index: 0 })
      }
    />
  );
}

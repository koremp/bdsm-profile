import { Box, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import { ChecklistValue } from 'src/features/bdsmChecklistSlice';
import { BDSMType } from 'src/types/bdsm/BDSMChecklist';
import Checklist from './Checklist';

export interface ChecklistGroupProps {
  groupName: string
  typeArray: string[]
  key: string
  checklistArray: ChecklistValue[]
  handleChange: ({ isMe, value, type }: { isMe: boolean, value: number, type: BDSMType }) => void
}

export default function ChecklistGroup({
  groupName,
  typeArray,
  key,
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
      </Box>
    </Box>
  );
}

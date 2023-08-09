import { Box, Typography } from '@mui/material';
import Checklist from './Checklist';
import { ChecklistValue } from 'src/features/bdsmChecklistSlice';
import { BDSMType } from 'src/types/bdsm/BDSMChecklist';

export interface ChecklistGroupProps {
  groupName: string
  typeArray: string[],
  checklistArray: ChecklistValue[]
  handleChange: ({ isMe, value, type }: { isMe: boolean, value: number, type: BDSMType }) => void
};

export default function ChecklistGroup({
  groupName,
  typeArray,
  checklistArray,
  handleChange,
}: ChecklistGroupProps) {

  return (
    <Box sx={{
      p: 2,
      borderRadius: '1rem',
    }}>
      <Typography>{groupName}</Typography>
      <Box sx={{
        mt: 2,
        backgroundColor: '#806967',
        borderRadius: '1rem',
      }}>
        {
          typeArray.map((item, index) => {
            const type = item;
            return (
              <Box key={item}>
                <Typography>{item}</Typography>
                <Checklist
                  label={item}
                  me={checklistArray[index].me}
                  you={checklistArray[index].you}
                  handleChange={
                    ({ isMe, value }) => {
                      handleChange({ isMe, value, type })
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
};
import { Box, Typography } from '@mui/material';
import Checklist from './Checklist';
import { ChecklistValue } from 'src/features/bdsmChecklistSlice';

export interface ChecklistGroupProps<T> {
  groupName: string
  typeArray: T[],
  checklistArray: ChecklistValue[]
  handleChange: ({ isMe, value }: { isMe: boolean, value: number }) => void
};

export default function ChecklistGroup<T>({
  groupName,
  typeArray,
  checklistArray,
  handleChange,
}: ChecklistGroupProps<T>) {
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
            const type = item as T;
            return (
              <Box>
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
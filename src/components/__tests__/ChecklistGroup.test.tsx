import { render } from '@testing-library/react';

import ChecklistGroup from 'src/components/ChecklistGroup';

import { ChecklistValue } from 'src/features/bdsmChecklistSlice';
import { erogenousArray } from 'src/types/bdsm/Erogenous';

const value: ChecklistValue = {
  me: 0,
  you: 0,
};

test('ChecklistGroup', () => {
  const groupName: string = 'groupname';
  const typeArray = erogenousArray;
  const checklistArray = erogenousArray.map((_) => value);
  const handleChange = jest.fn();

  render(
    <ChecklistGroup
      groupName={groupName}
      typeArray={typeArray}
      checklistArray={checklistArray}
      handleChange={handleChange}
    />,
  );
});

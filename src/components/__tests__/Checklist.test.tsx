import { render } from '@testing-library/react';
import Checklist from 'src/components/Checklist';

test('Checklist ', () => {
  const handleChange = jest.fn();

  render(
    <Checklist
      label='label'
      me={0}
      you={0}
      handleChange={handleChange}
    />
  );
});
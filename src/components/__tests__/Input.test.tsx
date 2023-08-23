import { fireEvent, render } from '@testing-library/react';

import Input from 'src/components/Input';

describe('Inpput', () => {
  it('renders value.', () => {
    const value: string = 'input value';
    const handleChange = jest.fn();

    const { getByRole } = render(
      <Input
        value={value}
        onChange={handleChange}
      />,
    );

    expect(getByRole('textbox')).toHaveProperty('value', value);
  });

  context('when textfield changes, ', () => {
    it('occurs onChange.', () => {
      const value: string = 'input value';
      const newValue: string = 'new value';

      const handleChange = jest.fn();

      const { getByRole } = render(
        <Input
          value={value}
          onChange={handleChange}
        />,
      );

      expect(getByRole('textbox')).toHaveProperty('value', value);

      fireEvent.change(getByRole('textbox'), { target: { value: newValue } });

      expect(handleChange).toHaveBeenCalled();
    });
  });

  context('when onKeyDown event occurs, ', () => {
    it('occurs onKeyDown.', () => {
      const handleChange = jest.fn();
      const handleKeyDown = jest.fn();

      const { getByRole } = render(
        <Input
          value="asdf"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />,
      );

      fireEvent.keyDown(getByRole('textbox'), {
        key: 'Enter',
        code: 'Enter',
        charCode: 13,
      });

      expect(handleKeyDown).toHaveBeenCalled();
    });
  });
});

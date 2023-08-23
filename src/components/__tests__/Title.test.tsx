import { render } from '@testing-library/react';

import Title from 'src/components/Title';

describe('Title', () => {
  it('renders text', () => {
    const text = 'asdfasdfasdfasdf';
    const { getByText } = render(<Title text={text} />);

    expect(getByText(text)).not.toBeNull();
  });
});

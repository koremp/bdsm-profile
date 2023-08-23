import { render } from '@testing-library/react';
import LinkButton from 'src/components/LinkButton';

describe('LinkButton', () => {
  it('renders name.', () => {
    const href: string = 'LinkButton Href';
    const name: string = 'LinkButton Name';

    const { getByText } = render(<LinkButton href={href} name={name} />);

    expect(getByText(name)).not.toBeNull();
  });

  it('href has href value.', () => {
    const href: string = 'LinkButton Href';
    const name: string = 'LinkButton Name';

    const { getByRole } = render(<LinkButton href={href} name={name} />);

    expect(getByRole('link', { name })).toHaveAttribute('href', href);
  });
});

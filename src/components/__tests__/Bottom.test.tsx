import { render } from '@testing-library/react';

import Bottom, { ButtonProps } from 'src/components/Bottom';

describe('Bottom', () => {
  describe('when middle is undefined,', () => {
    it('renders back and next button.', () => {
      const back: ButtonProps = {
        href: 'back-href',
        name: 'back-name',
      };

      const next: ButtonProps = {
        href: 'next-href',
        name: 'next-name',
      };

      const { getByText } = render(
        <Bottom
          back={back}
          middle={undefined}
          next={next}
        />,
      );

      expect(getByText(back.name)).not.toBeNull();
      expect(getByText(next.name)).not.toBeNull();
    });
  });

  describe('when middle is not undefined,', () => {
    it('renders back, middle, next buton.', () => {
      const back: ButtonProps = {
        href: 'back-href',
        name: 'back-name',
      };

      const middle: ButtonProps = {
        href: 'middle-href',
        name: 'middle-name',
      };

      const next: ButtonProps = {
        href: 'next-href',
        name: 'next-name',
      };
      const { getByText } = render(
        <Bottom
          back={{
            href: 'back-href',
            name: 'back-text',
          }}
          middle={{
            href: 'middle-href',
            name: 'middle-text',
          }}
          next={{
            href: 'next-href',
            name: 'next-text',
          }}
        />,
      );

      expect(getByText(back.name)).not.toBeNull();
      expect(getByText(middle.name)).not.toBeNull();
      expect(getByText(next.name)).not.toBeNull();
    });
  });
});

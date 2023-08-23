import { render } from '@testing-library/react';

import Page from 'src/components/Page';

import { BottomProps } from 'src/components/Bottom';

describe('Page', () => {
  it('renders titleText.', () => {
    const titleText: string = 'asdfasdfasdfasdf';
    const { getByText } = render(<Page titleText={titleText} />);

    expect(getByText(titleText)).not.toBeNull();
  });

  context('when props children ReactNode is not null, ', () => {
    it('renders children ReactNode.', () => {
      const testId = 'test-id';
      const children = <div data-testid={testId}>asdfasdf</div>;
      const { getByTestId } = render(<Page titleText="" children={children} />);

      expect(getByTestId(testId)).not.toBeNull();
    });
  });

  context('when props bottom is not null, ', () => {
    it('renders Bottom Component.', () => {
      const bottomProps: BottomProps = {
        backHref: 'backHref',
        backName: 'backName',
        nextHref: 'nextHref',
        nextName: 'nextName',
      };

      const { getByText } = render(<Page titleText="" bottom={bottomProps} />);

      expect(getByText(bottomProps.backName)).not.toBeNull();
      expect(getByText(bottomProps.nextName)).not.toBeNull();
    });
  });
});

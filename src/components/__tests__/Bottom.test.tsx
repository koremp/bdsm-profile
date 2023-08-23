import { render } from '@testing-library/react';

import Bottom from 'src/components/Bottom';

test('Bottom', () => {
  render(
    <Bottom
      backHref="backHref"
      backName="backName"
      nextHref="nextHref"
      nextName="nextName"
    />,
  );
});

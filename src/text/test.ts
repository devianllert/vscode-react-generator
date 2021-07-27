export const testFile = `
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { {component} } from '../{component}';

describe('<{component} />', () => {
  const children = '{component}';

  it('should render a children', () => {
    render(<{component}>{children}</{component}>);

    expect(screen.getByText(children)).toBeDefined();
  });
});
`;

export const testTemplate = `/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { {component} } from '../{fileComponent}';

describe('<{component} />', () => {
  const children = '{component}';
  
  it('should render a children', () => {
    render(<{component}>{children}</{component}>);
    
    expect(screen.getByText(children)).toBeDefined();
  });
});
`;
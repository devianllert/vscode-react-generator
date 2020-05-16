export const storiesFile = `
import React, { ReactElement } from 'react';

import {component} from '../{component}';

export default {
  title: 'Components/{component}',
  component: {component},
};

export const Basic = (): ReactElement => <{component}>Basic</{component}>;
`
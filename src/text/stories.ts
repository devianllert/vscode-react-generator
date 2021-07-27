export const storiesFile = `
import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { {component}, {component}Props } from '../{component}';

export default {
  title: 'Components/{component}',
  component: {component},
} as Meta;

const Template: Story<{component}Props> = (args) => <{component} {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: '{component}',
};
`;

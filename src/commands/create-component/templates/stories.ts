export const storiesTemplate = `import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { {component}, {component}Props } from '../{fileComponent}';

export default {
  title: '{component}',
  component: {component},
} as Meta;

const Template: Story<{component}Props> = (args) => <{component} {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: '{component}',
};
`;
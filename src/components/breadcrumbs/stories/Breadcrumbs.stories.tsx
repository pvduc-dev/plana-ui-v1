import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Breadcrumbs } from '../Breadcrumbs';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Component/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story/>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  items: [
    {
      to: '/',
      title: 'Home',
      isDisabled: false,
    },
    {
      to: '/',
      title: 'Settings',
      isDisabled: false,
    },
    {
      to: '/',
      title: 'Team',
      isDisabled: false,
    },
  ],
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Sent invites!',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Thành công',
  color: 'success',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Cancel',
  color: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Thông tin',
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Cảnh báo',
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Xoá',
  color: 'danger',
};

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
  children: 'Bắt đầu ngay',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Gửi',
  color: 'success',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Cancel',
  color: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Xem chi tiết',
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Tiếp tục',
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Xóa',
  color: 'danger',
};

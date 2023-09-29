import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PinCodeInput } from '../PinCodeInput';

export default {
  title: 'Component/PinCodeInput',
  component: PinCodeInput,
} as ComponentMeta<typeof PinCodeInput>;
const Template: ComponentStory<typeof PinCodeInput> = (args) => (
    <PinCodeInput {...args} />
);
export const PinCodeInputStory = Template.bind({});
PinCodeInputStory.storyName = 'Default';
PinCodeInputStory.args = {
  length: 6,
};

import React from 'react';

import type { ComponentStory } from '@storybook/react';
import { Popover } from '../Popover';

export default {
  title: 'Component/Popovers',
  component: Popover as any,
};

export const Story: ComponentStory<typeof Popover> = () => {
  return (
    <>
      <Popover/>
    </>
  );
};

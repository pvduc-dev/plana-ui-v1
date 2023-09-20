import React from 'react';

import type { ComponentStory } from '@storybook/react';
import { Popover } from '../Popover';
import { Card } from '../../card';

export default {
  title: 'Component/Popovers',
  component: Popover as any,
};

export const Story: ComponentStory<typeof Popover> = () => {
  return (
    <>
      <Card>
        <Popover/>
      </Card>
    </>
  );
};

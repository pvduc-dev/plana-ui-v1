import React, { useState } from 'react';

import { ComponentStory } from '@storybook/react';

import { OverlayProvider } from 'react-aria';
import { Dialog } from '../index';
import { usePreventScroll } from '../../../hooks/usePreventScroll';

export default {
  title: 'Component/Dialog',
  component: Dialog as any,
  decorators: [
    (Story: any) => (
      <OverlayProvider>
        <Story/>
      </OverlayProvider>
    ),
  ],
};

export const Story: ComponentStory<typeof Dialog> = () => {
  const [isOpen, setIsOpen] = useState(false);
  usePreventScroll({
    isDisabled: !isOpen,
  });
  const openClickHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button onClick={openClickHandler}>Click</button>
      <Dialog
        isOpen={isOpen}
        type="modal"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, totam?</p>
      </Dialog>
    </>
  );
};

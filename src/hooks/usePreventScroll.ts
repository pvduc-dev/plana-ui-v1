import { useLayoutEffect } from 'react';

interface PreventScrollOptions {
  isDisabled?: boolean
}

const SCROLL_KEYBOARD_CODE = [
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight',
  'PageUp',
  'PageDown',
];

function preventDefault(evt: Event) {
  evt.preventDefault();
}

function preventDefaultForScrollKeys(evt: KeyboardEvent) {
  if (SCROLL_KEYBOARD_CODE.includes(evt.code)) {
    preventDefault(evt);
  }
}

export function usePreventScroll(options: PreventScrollOptions = { isDisabled: false }) {
  const { isDisabled } = options;
  useLayoutEffect(() => {
    if (!isDisabled) {
      addEventListener('DOMMouseScroll', preventDefault, { passive: false });
      addEventListener('wheel', preventDefault, { passive: false });
      addEventListener('touchmove', preventDefault, { passive: false });
      addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
    } else {
      removeEventListener('DOMMouseScroll', preventDefault, false);
      removeEventListener('wheel', preventDefault);
      removeEventListener('touchmove', preventDefault);
      removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    return () => {
      removeEventListener('DOMMouseScroll', preventDefault, false);
      removeEventListener('wheel', preventDefault);
      removeEventListener('touchmove', preventDefault);
      removeEventListener('keydown', preventDefaultForScrollKeys, false);
    };
  }, [isDisabled]);
}

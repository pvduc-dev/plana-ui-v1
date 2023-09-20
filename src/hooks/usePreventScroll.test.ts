import { fireEvent, renderHook } from '@testing-library/react';
import { usePreventScroll } from './usePreventScroll';

describe('usePreventScroll', () => {
  it('should prevent scrolling', () => {
    const event = new Event('DOMMouseScroll');
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    renderHook(() => usePreventScroll());
    fireEvent(window, event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not prevent scrolling when unmount', () => {
    const { unmount } = renderHook(() => usePreventScroll());

    const scrollEvent = new Event('DOMMouseScroll');
    const preventDefaultSpy = jest.spyOn(scrollEvent, 'preventDefault');

    unmount();
    fireEvent(window, scrollEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should not prevent scrolling when isDisabled is true', () => {
    renderHook(() => usePreventScroll({ isDisabled: true }));

    const event = new Event('DOMMouseScroll');
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    fireEvent(window, event);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should prevent scrolling when scroll key press', () => {
    renderHook(() => usePreventScroll());

    const arrowDownKeyEvent = new KeyboardEvent('keydown', {
      code: 'ArrowDown',
    });
    const arrowDownKeyEventPreventSpy = jest.spyOn(arrowDownKeyEvent, 'preventDefault');

    fireEvent(window, arrowDownKeyEvent);

    expect(arrowDownKeyEventPreventSpy).toHaveBeenCalled();
  });

  it('should not prevent keydown when non-scroll key press', () => {
    renderHook(() => usePreventScroll({ isDisabled: false }));

    const enterKeyEvent = new KeyboardEvent('keydown', {
      code: 'Enter',
    });
    const preventDefaultSpy = jest.spyOn(enterKeyEvent, 'preventDefault');

    fireEvent(window, enterKeyEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });
});

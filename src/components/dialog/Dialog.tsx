import type { AriaDialogProps } from 'react-aria';
import type { ModalProps } from '@react-types/overlays';
import type { FC } from 'react';
import { useRef } from 'react';
import { OverlayContainer, useDialog, useModal, useOverlay } from 'react-aria';
import { CSSTransition } from 'react-transition-group';
import { mergeProps } from '@react-aria/utils';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

interface DialogProps extends AriaDialogProps, ModalProps {}

const Dialog: FC<DialogProps> = ({ isOpen, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({
    ...props,
    role: 'dialog',
  }, ref);
  return (
    <OverlayContainer>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 250 }}
        classNames={{
          enter: classNames(
            tailwindcss['opacity-0'],
          ),
          enterDone: classNames(
            tailwindcss['opacity-1'],
            tailwindcss['transition'],
            tailwindcss['ease-in'],
          ),
          exit: classNames(
            tailwindcss['opacity-0'],
            tailwindcss['transition'],
            tailwindcss['ease-out'],
          ),
        }}
        data-testid="dialog"
      >
        <div
          className={
            classNames(
              tailwindcss['fixed'],
              tailwindcss['inset-0'],
              tailwindcss['flex'],
              tailwindcss['justify-center'],
              tailwindcss['z-50'],
              tailwindcss['bg-slate-400/20'],
            )
          }
          {...underlayProps}
        >
          <CSSTransition
            in={isOpen}
            nodeRef={ref}
            timeout={{ enter: 0, exit: 250 }}
            classNames={{
              appear: classNames(
                tailwindcss['translate-y-2'],
              ),
              appearDone: classNames(
                tailwindcss['translate-y-0'],
                tailwindcss['transition'],
                tailwindcss['ease-in'],
              ),
              exit: classNames(
                tailwindcss['translate-y-2'],
                tailwindcss['transition'],
                tailwindcss['ease-out'],
              ),
            }}
          >
            <div
              {...mergeProps(overlayProps, dialogProps, modalProps)}
              ref={ref}
              className={
                classNames(
                  tailwindcss['focus:outline-none'],
                  tailwindcss['my-auto'],
                )
              }
            >
              {children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>

    </OverlayContainer>
  );
};

export { Dialog };

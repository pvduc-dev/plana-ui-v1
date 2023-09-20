import { Popover } from '@headlessui/react';
import { Float } from '@headlessui-float/react';
import { FC } from 'react';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';
import Button from '../button/Button';

const Popovers: FC = () => {
  return (
    <Popover
      data-testid="popover"
    >
      <Float
        portal
        placement="bottom-start"
        adaptiveWidth
        enter={
          classNames(
            tailwindcss['transition'],
            tailwindcss['duration-200'],
            tailwindcss['ease-out'],
          )
        }
        enterFrom={
          classNames(
            classNames(
              tailwindcss['opacity-0'],
              tailwindcss['-translate-y-1'],
            ),
          )
        }
        enterTo={
          classNames(
            tailwindcss['opacity-100'],
            tailwindcss['translate-y-0'],
          )
        }
        leave={
          classNames(
            tailwindcss['transition'],
            tailwindcss['duration-150'],
            tailwindcss['ease-in'],
          )
        }
        leaveFrom={
          classNames(
            tailwindcss['opacity-100'],
            tailwindcss['translate-y-0'],
          )
        }
        leaveTo={
          classNames(
            tailwindcss['opacity-0'],
            tailwindcss['-translate-y-1'],
          )
        }
      >
        {/*<Popover.Button*/}
        {/*  as="div"*/}
        {/*  className={*/}
        {/*    classNames(*/}
        {/*      tailwindcss['w-8'],*/}
        {/*      tailwindcss['h-8'],*/}
        {/*      tailwindcss['flex'],*/}
        {/*      tailwindcss['justify-center'],*/}
        {/*      tailwindcss['items-center'],*/}
        {/*      tailwindcss['bg-rose-50'],*/}
        {/*      tailwindcss['hover:bg-rose-100'],*/}
        {/*      tailwindcss['text-rose-500'],*/}
        {/*      tailwindcss['rounded'],*/}
        {/*    )*/}
        {/*  }*/}
        {/*>*/}
        {/*  121*/}
        {/*</Popover.Button>*/}
        <Popover.Button
          as="div"
          className={classNames(
            tailwindcss['inline-block'],
          )}
        >
          <Button canExecute>Test</Button>
        </Popover.Button>

        <Popover.Panel
          className={
            classNames(
              tailwindcss['w-[240px]'],
              tailwindcss['h-[70px]'],
              tailwindcss['bg-white'],
              tailwindcss['border'],
              tailwindcss['border-gray-200'],
              tailwindcss['rounded-md'],
              tailwindcss['focus:outline-none'],
            )
          }
        >
          <div
            className={
              classNames(
                tailwindcss['relative'],
                tailwindcss['h-full'],
                tailwindcss['bg-white'],
                tailwindcss['p-3'],
                tailwindcss['rounded-md'],
              )
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </Popover.Panel>
      </Float>
    </Popover>
  );
};

export { Popovers as Popover };

import type { FC, MouseEventHandler } from 'react';
import { NodeModel } from '@minoru/react-dnd-treeview';
import tailwindcss from '../../styles/tailwind.module.css';
import classNames from 'classnames';

interface TreeNodeProps {
  node: NodeModel;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel['id']) => void;
}

const TreeNode: FC<TreeNodeProps> = ({ node, depth, isOpen, onToggle }) => {
  const { text } = node;

  const handleToggle: MouseEventHandler = (evt) => {
    evt.stopPropagation();
    onToggle(node.id);
  };
  return (
    <div
      className={
        classNames(
          tailwindcss.flex,
        )
      }
    >
      <div
        className={classNames(
          tailwindcss.flex,
          tailwindcss['items-center'],
        )}
        style={{ paddingInlineStart: depth * 14 }}
      >
        <div
          className={classNames(
            tailwindcss['w-4'],
            tailwindcss['h-4'],
            tailwindcss['cursor-pointer'],
          )}
          onClick={handleToggle}
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-ignore*/}
          {(node.data.type === 'folder') && (
            <></>
            // <ChevronRight
            //   className={classNames(
            //     tailwindcss['transition-transform'],
            //     {
            //       [tailwindcss['rotate-90']]: isOpen,
            //     },
            //   )}
            //   width="16px"
            //   height="16px"
            //   onClick={handleToggle}
            // />
            // <AngleSmallRightIcon
            //   size="1rem"
            //   className={classNames(
            //     tailwindcss['transition-transform'],
            //     {
            //       [tailwindcss['rotate-90']]: isOpen,
            //     },
            //   )}
            // />
          )}
        </div>
        <div
          className={
            classNames(
              tailwindcss['mr-0.5'],
            )
          }
          onDoubleClick={handleToggle}
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-ignore*/}
          {node.data.type === 'folder' ? (
            isOpen ? (
              <></>
              // <OpenedFolderIcon
              //   width="24px"
              //   height="24px"
              // />
            ) : (
              // <FolderIcon
              //   width="24px"
              //   height="24px"
              // />
              <></>
            )
          ) : (
            <></>
            // <FileIcon
            //   width="24px"
            //   height="24px"
            // />
          )}
        </div>
        <div
          className={classNames(
            tailwindcss['text-sm'],
          )}
          onDoubleClick={handleToggle}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TreeNode;
// style={{paddingInlineStart: depth * 10}}

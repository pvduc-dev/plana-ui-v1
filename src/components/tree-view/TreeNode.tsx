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
      data-testid="tree-node"
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
          <>
            <div
              data-testid="toggle-button"
            >
              {'>'}
            </div>
          </>
        </div>
        <div
          className={
            classNames(
              tailwindcss['mr-0.5'],
            )
          }
          onDoubleClick={handleToggle}
        >
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

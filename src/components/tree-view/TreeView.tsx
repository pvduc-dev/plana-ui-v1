import type { DropOptions, NodeModel } from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';
import { Tree } from '@minoru/react-dnd-treeview';
import { HTML5Backend } from 'react-dnd-html5-backend';

import type { FC } from 'react';
import TreeNode from './TreeNode';

interface TreeViewProps {
  items: NodeModel[];
  rootId?: number | string;
  canDropDrag?: boolean;
  onDrop?: (items: NodeModel[], options: DropOptions) => void;
}

const TreeView: FC<TreeViewProps> = ({ items, rootId = 0, onDrop = () => {} }) => {
  return (
    <DndProvider
      backend={HTML5Backend}
    >
      <Tree
        tree={items}
        rootId={rootId as number | string}
        render={(node, { depth, isOpen, onToggle }) => (
          <TreeNode
            node={node}
            depth={depth}
            isOpen={isOpen}
            onToggle={onToggle}
          />
        )}
        enableAnimateExpand
        onDrop={onDrop}
        data-testid="tree-view"
      />
    </DndProvider>
  );
};

export { TreeView };

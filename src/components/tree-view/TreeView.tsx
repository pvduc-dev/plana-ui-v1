import type { DropOptions, NodeModel } from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';
import { Tree } from '@minoru/react-dnd-treeview';
import { HTML5Backend } from 'react-dnd-html5-backend';

import type { FC } from 'react';
import TreeNode from './TreeNode';
import { NodeRender } from '@minoru/react-dnd-treeview/dist/types';

interface TreeViewProps {
  items: NodeModel[];
  rootId?: number | string;
  canDropDrag?: boolean;
  onDrop?: (items: NodeModel[], options: DropOptions) => void;
  render?: NodeRender<unknown>;
}

const TreeView: FC<TreeViewProps> = ({
  items,
  rootId = 0,
  onDrop = () => {},
  render = (node, { depth, isOpen, onToggle }) => (
    <TreeNode
      node={node}
      depth={depth}
      isOpen={isOpen}
      onToggle={onToggle}
    />
  ),
}) => {
  return (
    <DndProvider
      backend={HTML5Backend}
      data-testid="tree-view"
    >
      <Tree
        tree={items}
        rootId={rootId as number | string}
        render={render}
        enableAnimateExpand
        onDrop={onDrop}
      />
    </DndProvider>
  );
};

export { TreeView };

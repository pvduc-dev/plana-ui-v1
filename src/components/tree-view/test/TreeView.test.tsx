import { TreeView } from '../TreeView';
import { fireEvent, render } from '@testing-library/react';
import { NodeRender } from '@minoru/react-dnd-treeview/dist/types';

describe('<TreeView/>', () => {
  const items = [
    {
      id: 1,
      parent: 0,
      droppable: true,
      text: 'Item 1',
    },
    {
      id: 2,
      parent: 1,
      text: 'Item 2',
    },
    {
      id: 3,
      parent: 1,
      text: 'Item 3',
    },
  ];
  const rootId = 0;
  it('should be render without errors', () => {
    const { getByText } = render(
      <TreeView
        items={items}
      />);
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Item 3')).toBeInTheDocument();
  });

  it('should render custom TreeNode components using render prop', () => {
    const customRender: NodeRender<unknown> = (
      node,
    ) => (
      <div data-testid={`custom-node-${node.id}`}>Custom Node: {node.text}</div>
    );

    const { getByTestId, getByText } = render(
      <TreeView
        items={items}
        rootId={rootId}
        render={customRender}
      ></TreeView>,
    );

    expect(getByTestId('custom-node-1')).toBeInTheDocument();
    expect(getByTestId('custom-node-2')).toBeInTheDocument();
    expect(getByText('Custom Node: Item 1')).toBeInTheDocument();
    expect(getByText('Custom Node: Item 2')).toBeInTheDocument();
  });
});

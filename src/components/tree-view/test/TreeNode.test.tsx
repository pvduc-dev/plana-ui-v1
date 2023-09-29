import { fireEvent, render } from '@testing-library/react';
import TreeNode from '../TreeNode';

describe('TreeNode Component', () => {
  const node = {
    id: '1',
    text: 'Test Node',
    data: { type: 'folder' },
  };
  const depth = 0;
  const isOpen = true;
  const onToggle = jest.fn();
  it('should be render without errors', () => {
    const { getByText } = render(
      <TreeNode
        node={node as never}
        depth={depth}
        isOpen={isOpen}
        onToggle={onToggle}
      />);
    expect(getByText('Test Node')).toBeInTheDocument();
  });
  it('should be calls onToggle when the toggle button is clicked', () => {
    const { getByTestId } = render(
      <TreeNode
        node={node as never}
        depth={depth}
        isOpen={isOpen}
        onToggle={onToggle}
      />,
    );
    fireEvent.click(getByTestId('toggle-button'));
    expect(onToggle).toHaveBeenCalledWith('1');
  });
});

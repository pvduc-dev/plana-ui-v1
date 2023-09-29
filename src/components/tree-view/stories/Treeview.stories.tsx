import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TreeView } from '../TreeView';

export default {
  title: 'Component/TreeView',
  component: TreeView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TreeView>;

const Template: ComponentStory<typeof TreeView> = (args) => <TreeView {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      'id': 1,
      'parent': 0,
      'droppable': true,
      'text': 'Folder 1',
      'data': {
        type: 'folder',
      },
    },
    {
      'id': 2,
      'parent': 1,
      'text': 'File 1-1',
      'data': {
        type: 'folder',
      },
    },
    {
      'id': 3,
      'parent': 1,
      'text': 'File 1-2',
      'data': {
        type: 'folder',
      },
    },
    {
      'id': 4,
      'parent': 0,
      'droppable': true,
      'text': 'Folder 2',
      'data': {
        type: 'folder',
      },
    },
    {
      'id': 5,
      'parent': 4,
      'droppable': true,
      'text': 'Folder 2-1',
      'data': {
        type: 'folder',
      },
    },
    {
      'id': 6,
      'parent': 5,
      'text': 'File 2-1-1',
      'data': {
        type: 'folder',
      },
    },
  ],
  rootId: 0,
};

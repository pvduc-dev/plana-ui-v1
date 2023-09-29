import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../Card';
import { Column, Container, Row } from '../../grid-system';

export default {
  title: 'Component/Card',
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => (
  <Container>
    <Row>
      <Column
        cols={3}
      >
        <Card
          {...args}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, tempore.
        </Card>
      </Column>
      <Column
        cols={3}
      >
        <Card
          className="custom-class"
          {...args}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, tempore.
        </Card>
      </Column>
      <Column
        cols={3}
      >
        <Card
          {...args}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, tempore.
        </Card>
      </Column>
    </Row>
  </Container>
);
export const CardStory = Template.bind({});
CardStory.storyName = 'Default';
CardStory.args = {};

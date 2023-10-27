import Tooltip from './Tooltip';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Tooltip>;

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Hover me!',
    content: 'This is really really really really long text for a tooltip.',
  },
};

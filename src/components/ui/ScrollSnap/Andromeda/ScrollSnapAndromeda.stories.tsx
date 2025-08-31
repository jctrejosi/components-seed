import type { Meta, StoryObj } from '@storybook/react';
import { ScrollSnapAndromeda } from './index';

const meta: Meta<typeof ScrollSnapAndromeda> = {
  title: 'Components/ScrollSnap/Andromeda',
  component: ScrollSnapAndromeda,
};
export default meta;

type Story = StoryObj<typeof ScrollSnapAndromeda>;

export const Default: Story = {
  args: {},
};

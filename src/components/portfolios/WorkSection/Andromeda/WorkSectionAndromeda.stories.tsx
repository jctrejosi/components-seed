import type { Meta, StoryObj } from '@storybook/react';
import { WorkSectionAndromeda } from './index';

const meta: Meta<typeof WorkSectionAndromeda> = {
  title: 'Components/WorkSection/Andromeda',
  component: WorkSectionAndromeda,
};
export default meta;

type Story = StoryObj<typeof WorkSectionAndromeda>;

export const Default: Story = {
  args: {},
};

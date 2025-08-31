import type { Meta, StoryObj } from '@storybook/react';
import { HeroSectionAndromeda } from './index';

const meta: Meta<typeof HeroSectionAndromeda> = {
  title: 'Components/HeroSection/Andromeda',
  component: HeroSectionAndromeda,
};
export default meta;

type Story = StoryObj<typeof HeroSectionAndromeda>;

export const Default: Story = {
  args: {},
};

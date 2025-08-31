import type { Meta, StoryObj } from '@storybook/react';
import { HeroSectionAndromeda } from './index';

const meta: Meta<any> = {
  title: 'Components/HeroSection/Andromeda',
  component: HeroSectionAndromeda,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--subtitle-size': { control: 'text', name: '--subtitle-size' },
    '--text-size': { control: 'text', name: '--text-size' },
    '--bg-secondary': { control: 'text', name: '--bg-secondary' }
  },
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    '--bg-primary': '',
    '--title-color': '',
    '--title-size': '',
    '--text-color': '',
    '--subtitle-color': '',
    '--subtitle-size': '',
    '--text-size': '',
    '--bg-secondary': ''
  }
};

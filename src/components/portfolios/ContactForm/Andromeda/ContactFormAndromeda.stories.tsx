import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormAndromeda } from './index';

const meta: Meta<any> = {
  title: 'Components/ContactForm/Andromeda',
  component: ContactFormAndromeda,
  argTypes: {
    '--title-color': { control: 'text', name: '--title-color' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--label-color': { control: 'text', name: '--label-color' },
    '--focus-color': { control: 'text', name: '--focus-color' },
    '--border-color': { control: 'text', name: '--border-color' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--dark-50': { control: 'text', name: '--dark-50' },
    '--border-focus-color': { control: 'text', name: '--border-focus-color' },
    '--btn-color': { control: 'text', name: '--btn-color' },
    '--btn-hover-color': { control: 'text', name: '--btn-hover-color' }
  },
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    '--title-color': '',
    '--subtitle-color': '',
    '--label-color': '',
    '--focus-color': '',
    '--border-color': '',
    '--text-color': '',
    '--dark-50': '',
    '--border-focus-color': '',
    '--btn-color': '',
    '--btn-hover-color': ''
  }
};

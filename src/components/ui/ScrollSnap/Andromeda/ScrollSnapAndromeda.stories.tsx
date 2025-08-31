import type { Meta, StoryObj } from '@storybook/react';
import { ScrollSnapAndromeda } from './index';

const meta: Meta<any> = {
  title: 'Components/ScrollSnap/Andromeda',
  component: ScrollSnapAndromeda,
  argTypes: {
    '--dot-color': { control: 'text', name: '--dot-color' },
    '--link-size': { control: 'text', name: '--link-size' },
    '--dot-active-color': { control: 'text', name: '--dot-active-color' }
  },
  render: (args) => {
    const cssVars: Record<string,string> = {}
    Object.keys(args).forEach((k) => {
      if (k.startsWith('--') && args[k]) {
        cssVars[k] = args[k] as string
      }
    })
    return (
      <div style={cssVars}>
        <ScrollSnapAndromeda />
      </div>
    )
  },
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    '--dot-color': '',
    '--link-size': '',
    '--dot-active-color': ''
  }
};

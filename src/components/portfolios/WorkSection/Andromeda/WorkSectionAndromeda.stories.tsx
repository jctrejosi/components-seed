import type { Meta, StoryObj } from '@storybook/react';
import { WorkSectionAndromeda } from './index';
import { defaults } from './defaults';

const meta: Meta<any> = {
  title: 'Components/WorkSection/Andromeda',
  component: WorkSectionAndromeda,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--object-fit-bg': { control: 'text', name: '--object-fit-bg' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--item-bg': { control: 'text', name: '--item-bg' },
    '--link-color': { control: 'text', name: '--link-color' },
    '--link-color-hover': { control: 'text', name: '--link-color-hover' }
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
        <WorkSectionAndromeda {...args} />
      </div>
    )
  },
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    ...defaults,
    '--bg-primary': '',
    '--object-fit-bg': '',
    '--title-color': '',
    '--subtitle-color': '',
    '--item-bg': '',
    '--link-color': '',
    '--link-color-hover': ''
  }
};

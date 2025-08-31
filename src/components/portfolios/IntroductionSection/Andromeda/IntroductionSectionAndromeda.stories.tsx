import type { Meta, StoryObj } from '@storybook/react';
import { IntroductionSectionAndromeda } from './index';

const meta: Meta<any> = {
  title: 'Components/IntroductionSection/Andromeda',
  component: IntroductionSectionAndromeda,
  argTypes: {
    '--bg-secondary': { control: 'text', name: '--bg-secondary' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--icon-hover-color': { control: 'text', name: '--icon-hover-color' }
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
        <IntroductionSectionAndromeda />
      </div>
    )
  },
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    '--bg-secondary': '',
    '--text-color': '',
    '--icon-color': '',
    '--icon-hover-color': ''
  }
};

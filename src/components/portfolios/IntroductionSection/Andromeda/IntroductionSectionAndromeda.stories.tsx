import type { Meta, StoryObj } from '@storybook/react';
import { IntroductionSectionAndromeda } from './index';
import defaults from './defaults';

const meta: Meta<any> = {
  title: 'Components/IntroductionSection/Andromeda',
  component: IntroductionSectionAndromeda,
  argTypes: {
    '--bg-image': { control: 'text', name: '--bg-image' },
    '--bg-container': { control: 'text', name: '--bg-container' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--highlight-color': { control: 'text', name: '--highlight-color' },
    '--social-color': { control: 'text', name: '--social-color' },
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
        <IntroductionSectionAndromeda {...args} />
      </div>
    )
  },
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    ...defaults,
    '--bg-image': '',
    '--bg-container': '',
    '--text-color': '',
    '--highlight-color': '',
    '--social-color': '',
    '--icon-color': '',
    '--icon-hover-color': ''
  }
};

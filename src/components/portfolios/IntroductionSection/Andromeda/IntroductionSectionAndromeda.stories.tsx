import type { Meta, StoryObj } from '@storybook/react';
import { IntroductionSectionAndromeda } from './index';
import { defaults } from './defaults';

const meta: Meta<any> = {
  title: 'Components/IntroductionSection/Andromeda',
  component: IntroductionSectionAndromeda,
  argTypes: {
    '--object-fit-bg': { control: 'text', name: '--object-fit-bg' },
    '--bg-container': { control: 'text', name: '--bg-container' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--p-color': { control: 'text', name: '--p-color' },
    '--p-size': { control: 'text', name: '--p-size' },
    '--highlight-color': { control: 'text', name: '--highlight-color' },
    '--social-color': { control: 'text', name: '--social-color' },
    '--social-size': { control: 'text', name: '--social-size' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--icon-color-hover': { control: 'text', name: '--icon-color-hover' }
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
    '--object-fit-bg': '',
    '--bg-container': '',
    '--text-color': '',
    '--title-size': '',
    '--p-color': '',
    '--p-size': '',
    '--highlight-color': '',
    '--social-color': '',
    '--social-size': '',
    '--icon-color': '',
    '--icon-color-hover': ''
  }
};

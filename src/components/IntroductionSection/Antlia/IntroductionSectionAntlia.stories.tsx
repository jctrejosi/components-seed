import type { Meta, StoryObj } from '@storybook/react'
import { IntroductionSectionAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/IntroductionSection/Antlia',
  component: IntroductionSectionAntlia,
  argTypes: {
    '--spacing-medium': { control: 'text', name: '--spacing-medium' },
    '--color-background-dark': {
      control: 'text',
      name: '--color-background-dark',
    },
    '--color-text-light': { control: 'text', name: '--color-text-light' },
    '--font-size-medium': { control: 'text', name: '--font-size-medium' },
    '--font-weight-bold': { control: 'text', name: '--font-weight-bold' },
    '--color-accent': { control: 'text', name: '--color-accent' },
    '--spacing-small': { control: 'text', name: '--spacing-small' },
    '--font-size-xlarge': { control: 'text', name: '--font-size-xlarge' },
    '--spacing-large': { control: 'text', name: '--spacing-large' },
    '--border-radius-medium': {
      control: 'text',
      name: '--border-radius-medium',
    },
    '--color-text-dark': { control: 'text', name: '--color-text-dark' },
    '--border-radius-small': { control: 'text', name: '--border-radius-small' },
  },
  render: (args) => {
    const cssVars: Record<string, string> = {}
    Object.keys(args).forEach((k) => {
      if (k.startsWith('--') && args[k]) {
        cssVars[k] = args[k] as string
      }
    })
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...cssVars,
        }}
      >
        <IntroductionSectionAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--spacing-medium': '',
    '--color-background-dark': '',
    '--color-text-light': '',
    '--font-size-medium': '',
    '--font-weight-bold': '',
    '--color-accent': '',
    '--spacing-small': '',
    '--font-size-xlarge': '',
    '--spacing-large': '',
    '--border-radius-medium': '',
    '--color-text-dark': '',
    '--border-radius-small': '',
  },
}

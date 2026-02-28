import type { Meta, StoryObj } from '@storybook/react'
import { IntroductionSectionAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/IntroductionSection/Antlia',
  component: IntroductionSectionAntlia,
  argTypes: {
    '--color-background-dark': {
      control: 'text',
      name: '--color-background-dark',
    },
    '--color-text-light': { control: 'text', name: '--color-text-light' },
    '--color-accent': { control: 'text', name: '--color-accent' },
    '--spacing-large': { control: 'text', name: '--spacing-large' },
    '--font-size-welcome-message': {
      control: 'text',
      name: '--font-size-welcome-message',
    },
    '--spacing-small': { control: 'text', name: '--spacing-small' },
    '--font-size-specialist-name': {
      control: 'text',
      name: '--font-size-specialist-name',
    },
    '--font-weight-bold': { control: 'text', name: '--font-weight-bold' },
    '--font-size-specialist-description': {
      control: 'text',
      name: '--font-size-specialist-description',
    },
    '--color-text-gray': { control: 'text', name: '--color-text-gray' },
    '--border-radius-medium': {
      control: 'text',
      name: '--border-radius-medium',
    },
    '--color-text-dark': { control: 'text', name: '--color-text-dark' },
    '--border-radius-small': { control: 'text', name: '--border-radius-small' },
    '--font-size-cta-button': {
      control: 'text',
      name: '--font-size-cta-button',
    },
    '--spacing-medium': { control: 'text', name: '--spacing-medium' },
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
    '--color-background-dark': '',
    '--color-text-light': '',
    '--color-accent': '',
    '--spacing-large': '',
    '--font-size-welcome-message': '',
    '--spacing-small': '',
    '--font-size-specialist-name': '',
    '--font-weight-bold': '',
    '--font-size-specialist-description': '',
    '--color-text-gray': '',
    '--border-radius-medium': '',
    '--color-text-dark': '',
    '--border-radius-small': '',
    '--font-size-cta-button': '',
    '--spacing-medium': '',
  },
}

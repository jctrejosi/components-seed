import type { Meta, StoryObj } from '@storybook/react'
import { IntroductionSectionAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/IntroductionSection/Antlia',
  component: IntroductionSectionAntlia,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--color-text': { control: 'text', name: '--color-text' },
    '--font-size-welcome-message': {
      control: 'text',
      name: '--font-size-welcome-message',
    },
    '--color-accent': { control: 'text', name: '--color-accent' },
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
    '--color-specialist-text': {
      control: 'text',
      name: '--color-specialist-text',
    },
    '--border-radius-medium': {
      control: 'text',
      name: '--border-radius-medium',
    },
    '--cta-bg': { control: 'text', name: '--cta-bg' },
    '--color-cta-text': { control: 'text', name: '--color-cta-text' },
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
    '--bg': '',
    '--color-text': '',
    '--font-size-welcome-message': '',
    '--color-accent': '',
    '--spacing-small': '',
    '--font-size-specialist-name': '',
    '--font-weight-bold': '',
    '--font-size-specialist-description': '',
    '--color-specialist-text': '',
    '--border-radius-medium': '',
    '--cta-bg': '',
    '--color-cta-text': '',
    '--border-radius-small': '',
    '--font-size-cta-button': '',
    '--spacing-medium': '',
  },
}

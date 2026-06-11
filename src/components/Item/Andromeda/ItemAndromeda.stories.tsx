import type { Meta, StoryObj } from '@storybook/react'
import { ItemAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Item/Andromeda',
  component: ItemAndromeda,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--font-size-xlarge': { control: 'text', name: '--font-size-xlarge' },
    '--font-weight-bold': { control: 'text', name: '--font-weight-bold' },
    '--color-text-dark': { control: 'text', name: '--color-text-dark' },
    '--font-size-large': { control: 'text', name: '--font-size-large' },
    '--font-weight-medium': { control: 'text', name: '--font-weight-medium' },
    '--color-accent': { control: 'text', name: '--color-accent' },
    '--font-size-medium': { control: 'text', name: '--font-size-medium' },
    '--color-text-secondary': {
      control: 'text',
      name: '--color-text-secondary',
    },
    '--quote-bg': { control: 'text', name: '--quote-bg' },
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
        <ItemAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg': '',
    '--font-size-xlarge': '',
    '--font-weight-bold': '',
    '--color-text-dark': '',
    '--font-size-large': '',
    '--font-weight-medium': '',
    '--color-accent': '',
    '--font-size-medium': '',
    '--color-text-secondary': '',
    '--quote-bg': '',
  },
}

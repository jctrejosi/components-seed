import type { Meta, StoryObj } from '@storybook/react'
import { ItemAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Item/Andromeda',
  component: ItemAndromeda,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--font-size-title': { control: 'text', name: '--font-size-title' },
    '--font-weight-bold': { control: 'text', name: '--font-weight-bold' },
    '--color-title': { control: 'text', name: '--color-title' },
    '--font-size-subtitle': { control: 'text', name: '--font-size-subtitle' },
    '--font-weight-medium': { control: 'text', name: '--font-weight-medium' },
    '--color-subtitle': { control: 'text', name: '--color-subtitle' },
    '--font-size-description': {
      control: 'text',
      name: '--font-size-description',
    },
    '--color-description': { control: 'text', name: '--color-description' },
    '--font-size-price': { control: 'text', name: '--font-size-price' },
    '--color-price': { control: 'text', name: '--color-price' },
    '--quote-bg': { control: 'text', name: '--quote-bg' },
    '--color-text-dark': { control: 'text', name: '--color-text-dark' },
    '--font-size-button': { control: 'text', name: '--font-size-button' },
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
    '--font-size-title': '',
    '--font-weight-bold': '',
    '--color-title': '',
    '--font-size-subtitle': '',
    '--font-weight-medium': '',
    '--color-subtitle': '',
    '--font-size-description': '',
    '--color-description': '',
    '--font-size-price': '',
    '--color-price': '',
    '--quote-bg': '',
    '--color-text-dark': '',
    '--font-size-button': '',
  },
}

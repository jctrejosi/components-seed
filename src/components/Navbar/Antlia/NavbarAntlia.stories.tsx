import type { Meta, StoryObj } from '@storybook/react'
import { NavbarAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/Navbar/Antlia',
  component: NavbarAntlia,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--border-color': { control: 'text', name: '--border-color' },
    '--max-width-navbar': { control: 'text', name: '--max-width-navbar' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--dropdown-bg': { control: 'text', name: '--dropdown-bg' },
    '--cta-bg': { control: 'text', name: '--cta-bg' },
    '--cta-text': { control: 'text', name: '--cta-text' },
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
        <NavbarAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg': '',
    '--border-color': '',
    '--max-width-navbar': '',
    '--text-color': '',
    '--dropdown-bg': '',
    '--cta-bg': '',
    '--cta-text': '',
  },
}

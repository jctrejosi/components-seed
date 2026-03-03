import type { Meta, StoryObj } from '@storybook/react'
import { NavbarAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/Navbar/Antlia',
  component: NavbarAntlia,
  argTypes: {
    '--navbar-bg': { control: 'text', name: '--navbar-bg' },
    '--navbar-border': { control: 'text', name: '--navbar-border' },
    '--navbar-text': { control: 'text', name: '--navbar-text' },
    '--navbar-cta-bg': { control: 'text', name: '--navbar-cta-bg' },
    '--navbar-cta-text': { control: 'text', name: '--navbar-cta-text' },
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
    '--navbar-bg': '',
    '--navbar-border': '',
    '--navbar-text': '',
    '--navbar-cta-bg': '',
    '--navbar-cta-text': '',
  },
}

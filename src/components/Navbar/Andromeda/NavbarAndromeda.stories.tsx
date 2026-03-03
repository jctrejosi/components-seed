import type { Meta, StoryObj } from '@storybook/react'
import { NavbarAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Navbar/Andromeda',
  component: NavbarAndromeda,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--navbar-color': { control: 'text', name: '--navbar-color' },
    '--navbar-font-size': { control: 'text', name: '--navbar-font-size' },
    '--navbar-color-hover': { control: 'text', name: '--navbar-color-hover' },
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
        <NavbarAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg': '',
    '--navbar-color': '',
    '--navbar-font-size': '',
    '--navbar-color-hover': '',
  },
}

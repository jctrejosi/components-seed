import type { Meta, StoryObj } from '@storybook/react'
import { NavbarAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Navbar/Andromeda',
  component: NavbarAndromeda,
  argTypes: {
    '--footer-bg': { control: 'text', name: '--footer-bg' },
    '--footer-color': { control: 'text', name: '--footer-color' },
    '--footer-font-size': { control: 'text', name: '--footer-font-size' },
    '--footer-icon-color': { control: 'text', name: '--footer-icon-color' },
    '--footer-social-color': { control: 'text', name: '--footer-social-color' },
    '--footer-social-hover': { control: 'text', name: '--footer-social-hover' },
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
    '--footer-bg': '',
    '--footer-color': '',
    '--footer-font-size': '',
    '--footer-icon-color': '',
    '--footer-social-color': '',
    '--footer-social-hover': '',
  },
}

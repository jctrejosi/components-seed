import type { Meta, StoryObj } from '@storybook/react'
import { SocialLinksAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/SocialLinks/Andromeda',
  component: SocialLinksAndromeda,
  argTypes: {
    '--icon-content-size': { control: 'text', name: '--icon-content-size' },
    '--border-radius': { control: 'text', name: '--border-radius' },
    '--icon-bg': { control: 'text', name: '--icon-bg' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--icon-size': { control: 'text', name: '--icon-size' },
    '--icon-bg-hover': { control: 'text', name: '--icon-bg-hover' },
    '--icon-color-hover': { control: 'text', name: '--icon-color-hover' },
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
        <SocialLinksAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--icon-content-size': '',
    '--border-radius': '',
    '--icon-bg': '',
    '--icon-color': '',
    '--icon-size': '',
    '--icon-bg-hover': '',
    '--icon-color-hover': '',
  },
}

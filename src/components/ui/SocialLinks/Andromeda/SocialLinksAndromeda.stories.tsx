import type { Meta, StoryObj } from '@storybook/react'
import { SocialLinksAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/SocialLinks/Andromeda',
  component: SocialLinksAndromeda,
  argTypes: {
    '--bg-link': { control: 'text', name: '--bg-link' },
    '--link-color': { control: 'text', name: '--link-color' },
    '--bg-link-hover': { control: 'text', name: '--bg-link-hover' },
    '--link-color-hover': { control: 'text', name: '--link-color-hover' },
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
    '--bg-link': '',
    '--link-color': '',
    '--bg-link-hover': '',
    '--link-color-hover': '',
  },
}

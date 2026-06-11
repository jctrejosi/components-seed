import type { Meta, StoryObj } from '@storybook/react'
import { AlertAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Alert/Andromeda',
  component: AlertAndromeda,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--color-text': { control: 'text', name: '--color-text' },
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
        <AlertAndromeda {...args} />
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
  },
}

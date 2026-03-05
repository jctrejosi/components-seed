import type { Meta, StoryObj } from '@storybook/react'
import { MapAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/Map/Antlia',
  component: MapAntlia,
  argTypes: {
    '--color-primary': { control: 'text', name: '--color-primary' },
    '--color-text': { control: 'text', name: '--color-text' },
    '--color-bg': { control: 'text', name: '--color-bg' },
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
        <MapAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--color-primary': '',
    '--color-text': '',
    '--color-bg': '',
  },
}

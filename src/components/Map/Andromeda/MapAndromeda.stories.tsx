import type { Meta, StoryObj } from '@storybook/react'
import { MapAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Map/Andromeda',
  component: MapAndromeda,
  argTypes: {
    '--color-accent': { control: 'text', name: '--color-accent' },
    '--color-text-dark': { control: 'text', name: '--color-text-dark' },
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
        <MapAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--color-accent': '',
    '--color-text-dark': '',
  },
}

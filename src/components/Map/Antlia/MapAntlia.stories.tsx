import type { Meta, StoryObj } from '@storybook/react'
import { MapAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/Map/Antlia',
  component: MapAntlia,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--color-primary': { control: 'text', name: '--color-primary' },
    '--color-text': { control: 'text', name: '--color-text' },
    '--cta-bg': { control: 'text', name: '--cta-bg' },
    '--color-bg': { control: 'text', name: '--color-bg' },
    '--font-size-btn': { control: 'text', name: '--font-size-btn' },
    '--map-bg': { control: 'text', name: '--map-bg' },
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
    '--bg': '',
    '--title-size': '',
    '--color-primary': '',
    '--color-text': '',
    '--cta-bg': '',
    '--color-bg': '',
    '--font-size-btn': '',
    '--map-bg': '',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { HeroSectionAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/HeroSection/Antlia',
  component: HeroSectionAntlia,
  argTypes: {
    '--bg-container': { control: 'text', name: '--bg-container' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--items-count': { control: 'text', name: '--items-count' },
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
        <HeroSectionAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-container': '',
    '--text-color': '',
    '--items-count': '',
  },
}

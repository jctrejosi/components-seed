import type { Meta, StoryObj } from '@storybook/react'
import { HeroSectionAntlia } from './index'

const meta: Meta<any> = {
  title: 'Components/HeroSection/Antlia',
  component: HeroSectionAntlia,
  argTypes: {
    '--bg-dark': { control: 'text', name: '--bg-dark' },
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
      <div style={cssVars}>
        <HeroSectionAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-dark': '',
    '--items-count': '',
  },
}

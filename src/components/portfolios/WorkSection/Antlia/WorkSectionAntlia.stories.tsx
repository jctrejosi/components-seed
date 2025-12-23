import type { Meta, StoryObj } from '@storybook/react'
import { WorkSectionAntlia } from './index'
import { defaults } from './defaults'

const meta: Meta<any> = {
  title: 'Components/WorkSection/Antlia',
  component: WorkSectionAntlia,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--bp-m': { control: 'text', name: '--bp-m' },
    '--item-bg': { control: 'text', name: '--item-bg' },
    '--anchor-color': { control: 'text', name: '--anchor-color' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--text-size': { control: 'text', name: '--text-size' },
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
        <WorkSectionAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    ...defaults,
    '--bg-primary': '',
    '--title-color': '',
    '--title-size': '',
    '--bp-m': '',
    '--item-bg': '',
    '--anchor-color': '',
    '--icon-color': '',
    '--subtitle-color': '',
    '--text-color': '',
    '--text-size': '',
  },
}

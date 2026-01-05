import type { Meta, StoryObj } from '@storybook/react'
import { WorkSectionAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/WorkSection/Antlia',
  component: WorkSectionAntlia,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--subtitle-size': { control: 'text', name: '--subtitle-size' },
    '--bp-m': { control: 'text', name: '--bp-m' },
    '--item-bg': { control: 'text', name: '--item-bg' },
    '--anchor-color': { control: 'text', name: '--anchor-color' },
    '--icon-color': { control: 'text', name: '--icon-color' },
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
        <WorkSectionAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-primary': '',
    '--title-color': '',
    '--title-size': '',
    '--subtitle-color': '',
    '--subtitle-size': '',
    '--bp-m': '',
    '--item-bg': '',
    '--anchor-color': '',
    '--icon-color': '',
    '--text-color': '',
    '--text-size': '',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { WorkSectionAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/WorkSection/Andromeda',
  component: WorkSectionAndromeda,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--object-fit-bg': { control: 'text', name: '--object-fit-bg' },
    '--opacity-bg': { control: 'text', name: '--opacity-bg' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--subtitle-size': { control: 'text', name: '--subtitle-size' },
    '--bg-item': { control: 'text', name: '--bg-item' },
    '--item-border-color': { control: 'text', name: '--item-border-color' },
    '--comany-size': { control: 'text', name: '--comany-size' },
    '--company-color': { control: 'text', name: '--company-color' },
    '--role-size': { control: 'text', name: '--role-size' },
    '--role-color': { control: 'text', name: '--role-color' },
    '--text-size': { control: 'text', name: '--text-size' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--lines-description': { control: 'text', name: '--lines-description' },
    '--chip-size': { control: 'text', name: '--chip-size' },
    '--subitem-color': { control: 'text', name: '--subitem-color' },
    '--subitem-bg': { control: 'text', name: '--subitem-bg' },
    '--link-color': { control: 'text', name: '--link-color' },
    '--link-size': { control: 'text', name: '--link-size' },
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
        <WorkSectionAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-primary': '',
    '--object-fit-bg': '',
    '--opacity-bg': '',
    '--title-color': '',
    '--title-size': '',
    '--subtitle-color': '',
    '--subtitle-size': '',
    '--bg-item': '',
    '--item-border-color': '',
    '--comany-size': '',
    '--company-color': '',
    '--role-size': '',
    '--role-color': '',
    '--text-size': '',
    '--text-color': '',
    '--lines-description': '',
    '--chip-size': '',
    '--subitem-color': '',
    '--subitem-bg': '',
    '--link-color': '',
    '--link-size': '',
    '--link-color-hover': '',
  },
}

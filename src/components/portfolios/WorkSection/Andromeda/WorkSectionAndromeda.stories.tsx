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
    '--link-color-hover': { control: 'text', name: '--link-color-hover' },
    '--comany-size': { control: 'text', name: '--comany-size' },
    '--company-color': { control: 'text', name: '--company-color' },
    '--role-size': { control: 'text', name: '--role-size' },
    '--role-color': { control: 'text', name: '--role-color' },
    '--text-size': { control: 'text', name: '--text-size' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--chip-size': { control: 'text', name: '--chip-size' },
    '--tech-border-color': { control: 'text', name: '--tech-border-color' },
    '--chip-bg': { control: 'text', name: '--chip-bg' },
    '--chip-color': { control: 'text', name: '--chip-color' },
    '--link-color': { control: 'text', name: '--link-color' },
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
    '--link-color-hover': '',
    '--comany-size': '',
    '--company-color': '',
    '--role-size': '',
    '--role-color': '',
    '--text-size': '',
    '--text-color': '',
    '--chip-size': '',
    '--tech-border-color': '',
    '--chip-bg': '',
    '--chip-color': '',
    '--link-color': '',
  },
}

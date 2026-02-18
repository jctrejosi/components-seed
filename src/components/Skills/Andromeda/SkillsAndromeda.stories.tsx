import type { Meta, StoryObj } from '@storybook/react'
import { SkillsAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Skills/Andromeda',
  component: SkillsAndromeda,
  argTypes: {
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--subtitle-size': { control: 'text', name: '--subtitle-size' },
    '--bg-item': { control: 'text', name: '--bg-item' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--icon-size': { control: 'text', name: '--icon-size' },
    '--item-title-size': { control: 'text', name: '--item-title-size' },
    '--item-title-color': { control: 'text', name: '--item-title-color' },
    '--label-size': { control: 'text', name: '--label-size' },
    '--label-color': { control: 'text', name: '--label-color' },
    '--value-color': { control: 'text', name: '--value-color' },
    '--bar-height': { control: 'text', name: '--bar-height' },
    '--bar-bg': { control: 'text', name: '--bar-bg' },
    '--gradient-start': { control: 'text', name: '--gradient-start' },
    '--gradient-end': { control: 'text', name: '--gradient-end' },
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
        <SkillsAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--title-color': '',
    '--title-size': '',
    '--subtitle-color': '',
    '--subtitle-size': '',
    '--bg-item': '',
    '--icon-color': '',
    '--icon-size': '',
    '--item-title-size': '',
    '--item-title-color': '',
    '--label-size': '',
    '--label-color': '',
    '--value-color': '',
    '--bar-height': '',
    '--bar-bg': '',
    '--gradient-start': '',
    '--gradient-end': '',
  },
}

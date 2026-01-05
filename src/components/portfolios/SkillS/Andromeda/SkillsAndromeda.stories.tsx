import type { Meta, StoryObj } from '@storybook/react'
import { SkillsAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Skills/Andromeda',
  component: SkillsAndromeda,
  argTypes: {
    '--bg-item': { control: 'text', name: '--bg-item' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--label-color': { control: 'text', name: '--label-color' },
    '--value-color': { control: 'text', name: '--value-color' },
    '--bg-bar': { control: 'text', name: '--bg-bar' },
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
    '--bg-item': '',
    '--icon-color': '',
    '--title-color': '',
    '--label-color': '',
    '--value-color': '',
    '--bg-bar': '',
    '--gradient-start': '',
    '--gradient-end': '',
  },
}

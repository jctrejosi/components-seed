import type { Meta, StoryObj } from '@storybook/react'
import { ProjectsAndromeda } from './index'

const meta: Meta<any> = {
  title: 'Components/Projects/Andromeda',
  component: ProjectsAndromeda,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--title-color': { control: 'text', name: '--title-color' },
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
        <ProjectsAndromeda {...args} />
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
  },
}

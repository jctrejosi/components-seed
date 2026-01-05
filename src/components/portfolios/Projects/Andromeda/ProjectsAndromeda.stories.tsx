import type { Meta, StoryObj } from '@storybook/react'
import { ProjectsAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Projects/Andromeda',
  component: ProjectsAndromeda,
  argTypes: {
    '--bg-section': { control: 'text', name: '--bg-section' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--link-color': { control: 'text', name: '--link-color' },
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
        <ProjectsAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-section': '',
    '--title-color': '',
    '--link-color': '',
    '--link-color-hover': '',
  },
}

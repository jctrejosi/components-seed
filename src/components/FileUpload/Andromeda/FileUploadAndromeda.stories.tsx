import type { Meta, StoryObj } from '@storybook/react'
import { FileUploadAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/FileUpload/Andromeda',
  component: FileUploadAndromeda,
  argTypes: {
    '--spacing-large': { control: 'text', name: '--spacing-large' },
    '--spacing-medium': { control: 'text', name: '--spacing-medium' },
    '--spacing-small': { control: 'text', name: '--spacing-small' },
    '--font-size-medium': { control: 'text', name: '--font-size-medium' },
    '--color-secondary': { control: 'text', name: '--color-secondary' },
    '--color-primary': { control: 'text', name: '--color-primary' },
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
        <FileUploadAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--spacing-large': '',
    '--spacing-medium': '',
    '--spacing-small': '',
    '--font-size-medium': '',
    '--color-secondary': '',
    '--color-primary': '',
  },
}

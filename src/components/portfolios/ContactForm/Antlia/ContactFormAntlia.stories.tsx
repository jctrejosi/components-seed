import type { Meta, StoryObj } from '@storybook/react'
import { ContactFormAntlia } from './index'

const meta: Meta<any> = {
  title: 'Components/ContactForm/Antlia',
  component: ContactFormAntlia,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--accent-color': { control: 'text', name: '--accent-color' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
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
        <ContactFormAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-primary': '',
    '--text-color': '',
    '--accent-color': '',
    '--title-color': '',
    '--subtitle-color': '',
  },
}

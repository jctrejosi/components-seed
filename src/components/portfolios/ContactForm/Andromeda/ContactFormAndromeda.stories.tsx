import type { Meta, StoryObj } from '@storybook/react'
import { ContactFormAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/ContactForm/Andromeda',
  component: ContactFormAndromeda,
  argTypes: {
    '--bg-container': { control: 'text', name: '--bg-container' },
    '--object-fit-bg': { control: 'text', name: '--object-fit-bg' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--introduction-color': { control: 'text', name: '--introduction-color' },
    '--field-color': { control: 'text', name: '--field-color' },
    '--input-focus-color': { control: 'text', name: '--input-focus-color' },
    '--input-text-color': { control: 'text', name: '--input-text-color' },
    '--placeholder-color': { control: 'text', name: '--placeholder-color' },
    '--field-focus-color': { control: 'text', name: '--field-focus-color' },
    '--btn-color': { control: 'text', name: '--btn-color' },
    '--btn-hover-color': { control: 'text', name: '--btn-hover-color' },
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
        <ContactFormAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--bg-container': '',
    '--object-fit-bg': '',
    '--title-color': '',
    '--introduction-color': '',
    '--field-color': '',
    '--input-focus-color': '',
    '--input-text-color': '',
    '--placeholder-color': '',
    '--field-focus-color': '',
    '--btn-color': '',
    '--btn-hover-color': '',
  },
}

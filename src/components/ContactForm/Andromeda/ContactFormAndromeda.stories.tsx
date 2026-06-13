import type { Meta, StoryObj } from '@storybook/react'
import { ContactFormAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/ContactForm/Andromeda',
  component: ContactFormAndromeda,
  argTypes: {
    '--bg': { control: 'text', name: '--bg' },
    '--object-fit-bg': { control: 'text', name: '--object-fit-bg' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--subtitle-size': { control: 'text', name: '--subtitle-size' },
    '--field-color': { control: 'text', name: '--field-color' },
    '--input-color-focus': { control: 'text', name: '--input-color-focus' },
    '--font-size-label': { control: 'text', name: '--font-size-label' },
    '--input-color-text': { control: 'text', name: '--input-color-text' },
    '--font-size-input': { control: 'text', name: '--font-size-input' },
    '--border-color': { control: 'text', name: '--border-color' },
    '--field-focus-color': { control: 'text', name: '--field-focus-color' },
    '--placeholder-color': { control: 'text', name: '--placeholder-color' },
    '--cta-bg': { control: 'text', name: '--cta-bg' },
    '--color-cta-text': { control: 'text', name: '--color-cta-text' },
    '--border-radius-small': { control: 'text', name: '--border-radius-small' },
    '--font-size-btn': { control: 'text', name: '--font-size-btn' },
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
    '--bg': '',
    '--object-fit-bg': '',
    '--title-color': '',
    '--title-size': '',
    '--subtitle-color': '',
    '--subtitle-size': '',
    '--field-color': '',
    '--input-color-focus': '',
    '--font-size-label': '',
    '--input-color-text': '',
    '--font-size-input': '',
    '--border-color': '',
    '--field-focus-color': '',
    '--placeholder-color': '',
    '--cta-bg': '',
    '--color-cta-text': '',
    '--border-radius-small': '',
    '--font-size-btn': '',
  },
}

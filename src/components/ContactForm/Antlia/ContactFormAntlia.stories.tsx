import type { Meta, StoryObj } from '@storybook/react'
import { ContactFormAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/ContactForm/Antlia',
  component: ContactFormAntlia,
  argTypes: {
    '--bg-primary': { control: 'text', name: '--bg-primary' },
    '--text-color': { control: 'text', name: '--text-color' },
    '--icon-size': { control: 'text', name: '--icon-size' },
    '--icon-color': { control: 'text', name: '--icon-color' },
    '--item-title-size': { control: 'text', name: '--item-title-size' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--item-subtitle-size': { control: 'text', name: '--item-subtitle-size' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--btn-size': { control: 'text', name: '--btn-size' },
    '--btn-color': { control: 'text', name: '--btn-color' },
    '--form-title-size': { control: 'text', name: '--form-title-size' },
    '--form-title-color': { control: 'text', name: '--form-title-color' },
    '--label-size': { control: 'text', name: '--label-size' },
    '--label-color': { control: 'text', name: '--label-color' },
    '--input-text-size': { control: 'text', name: '--input-text-size' },
    '--focus-color': { control: 'text', name: '--focus-color' },
    '--submit-bg': { control: 'text', name: '--submit-bg' },
    '--submit-color': { control: 'text', name: '--submit-color' },
    '--text-size': { control: 'text', name: '--text-size' },
    '--yellow-50': { control: 'text', name: '--yellow-50' },
    '--yellow-900': { control: 'text', name: '--yellow-900' },
    '--green-50': { control: 'text', name: '--green-50' },
    '--green-900': { control: 'text', name: '--green-900' },
    '--red-50': { control: 'text', name: '--red-50' },
    '--red-900': { control: 'text', name: '--red-900' },
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
    '--icon-size': '',
    '--icon-color': '',
    '--item-title-size': '',
    '--title-color': '',
    '--item-subtitle-size': '',
    '--subtitle-color': '',
    '--btn-size': '',
    '--btn-color': '',
    '--form-title-size': '',
    '--form-title-color': '',
    '--label-size': '',
    '--label-color': '',
    '--input-text-size': '',
    '--focus-color': '',
    '--submit-bg': '',
    '--submit-color': '',
    '--text-size': '',
    '--yellow-50': '',
    '--yellow-900': '',
    '--green-50': '',
    '--green-900': '',
    '--red-50': '',
    '--red-900': '',
  },
}

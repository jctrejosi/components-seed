import type { Meta, StoryObj } from '@storybook/react'
import { AppointmentFormAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/AppointmentForm/Andromeda',
  component: AppointmentFormAndromeda,
  argTypes: {
    '--color-accent': { control: 'text', name: '--color-accent' },
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
        <AppointmentFormAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--color-accent': '',
  },
}

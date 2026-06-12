import type { Meta, StoryObj } from '@storybook/react'
import { CalendarAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/Calendar/Antlia',
  component: CalendarAntlia,
  argTypes: {
    '--calendar-bg': { control: 'text', name: '--calendar-bg' },
    '--calendar-text': { control: 'text', name: '--calendar-text' },
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
        <CalendarAntlia {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--calendar-bg': '',
    '--calendar-text': '',
  },
}

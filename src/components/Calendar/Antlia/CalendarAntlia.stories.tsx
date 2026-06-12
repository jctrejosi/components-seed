import type { Meta, StoryObj } from '@storybook/react'
import { CalendarAntlia } from './index'
const meta: Meta<any> = {
  title: 'Components/Calendar/Antlia',
  component: CalendarAntlia,
  argTypes: {
    '--calendar-min-height': { control: 'text', name: '--calendar-min-height' },
    '--calendar-gap': { control: 'text', name: '--calendar-gap' },
    '--calendar-padding': { control: 'text', name: '--calendar-padding' },
    '--calendar-bg': { control: 'text', name: '--calendar-bg' },
    '--calendar-text': { control: 'text', name: '--calendar-text' },
    '--calendar-font-family': {
      control: 'text',
      name: '--calendar-font-family',
    },
    '--calendar-title-size': { control: 'text', name: '--calendar-title-size' },
    '--calendar-subtitle-size': {
      control: 'text',
      name: '--calendar-subtitle-size',
    },
    '--calendar-text-muted': { control: 'text', name: '--calendar-text-muted' },
    '--calendar-gap-sm': { control: 'text', name: '--calendar-gap-sm' },
    '--calendar-border': { control: 'text', name: '--calendar-border' },
    '--calendar-surface': { control: 'text', name: '--calendar-surface' },
    '--calendar-text-soft': { control: 'text', name: '--calendar-text-soft' },
    '--calendar-hover-bg': { control: 'text', name: '--calendar-hover-bg' },
    '--calendar-border-strong': {
      control: 'text',
      name: '--calendar-border-strong',
    },
    '--calendar-radius-sm': { control: 'text', name: '--calendar-radius-sm' },
    '--calendar-weekday-size': {
      control: 'text',
      name: '--calendar-weekday-size',
    },
    '--calendar-day-min-height': {
      control: 'text',
      name: '--calendar-day-min-height',
    },
    '--calendar-day-padding': {
      control: 'text',
      name: '--calendar-day-padding',
    },
    '--calendar-radius': { control: 'text', name: '--calendar-radius' },
    '--calendar-shadow': { control: 'text', name: '--calendar-shadow' },
    '--calendar-surface-alt': {
      control: 'text',
      name: '--calendar-surface-alt',
    },
    '--calendar-today-border': {
      control: 'text',
      name: '--calendar-today-border',
    },
    '--calendar-today-bg': { control: 'text', name: '--calendar-today-bg' },
    '--calendar-selected-outline': {
      control: 'text',
      name: '--calendar-selected-outline',
    },
    '--calendar-primary': { control: 'text', name: '--calendar-primary' },
    '--calendar-day-size': { control: 'text', name: '--calendar-day-size' },
    '--calendar-primary-contrast': {
      control: 'text',
      name: '--calendar-primary-contrast',
    },
    '--calendar-event-height': {
      control: 'text',
      name: '--calendar-event-height',
    },
    '--calendar-primary-soft': {
      control: 'text',
      name: '--calendar-primary-soft',
    },
    '--calendar-event-size': { control: 'text', name: '--calendar-event-size' },
    '--calendar-modal-overlay': {
      control: 'text',
      name: '--calendar-modal-overlay',
    },
    '--calendar-modal-bg': { control: 'text', name: '--calendar-modal-bg' },
    '--calendar-radius-lg': { control: 'text', name: '--calendar-radius-lg' },
    '--calendar-shadow-lg': { control: 'text', name: '--calendar-shadow-lg' },
    '--calendar-padding-lg': { control: 'text', name: '--calendar-padding-lg' },
    '--calendar-meta-size': { control: 'text', name: '--calendar-meta-size' },
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
    '--calendar-min-height': '',
    '--calendar-gap': '',
    '--calendar-padding': '',
    '--calendar-bg': '',
    '--calendar-text': '',
    '--calendar-font-family': '',
    '--calendar-title-size': '',
    '--calendar-subtitle-size': '',
    '--calendar-text-muted': '',
    '--calendar-gap-sm': '',
    '--calendar-border': '',
    '--calendar-surface': '',
    '--calendar-text-soft': '',
    '--calendar-hover-bg': '',
    '--calendar-border-strong': '',
    '--calendar-radius-sm': '',
    '--calendar-weekday-size': '',
    '--calendar-day-min-height': '',
    '--calendar-day-padding': '',
    '--calendar-radius': '',
    '--calendar-shadow': '',
    '--calendar-surface-alt': '',
    '--calendar-today-border': '',
    '--calendar-today-bg': '',
    '--calendar-selected-outline': '',
    '--calendar-primary': '',
    '--calendar-day-size': '',
    '--calendar-primary-contrast': '',
    '--calendar-event-height': '',
    '--calendar-primary-soft': '',
    '--calendar-event-size': '',
    '--calendar-modal-overlay': '',
    '--calendar-modal-bg': '',
    '--calendar-radius-lg': '',
    '--calendar-shadow-lg': '',
    '--calendar-padding-lg': '',
    '--calendar-meta-size': '',
  },
}

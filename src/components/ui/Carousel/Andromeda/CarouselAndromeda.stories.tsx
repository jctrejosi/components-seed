import type { Meta, StoryObj } from '@storybook/react'
import { CarouselAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/Carousel/Andromeda',
  component: CarouselAndromeda,
  argTypes: {
    '--carousel-gap': { control: 'text', name: '--carousel-gap' },
    '--items-per-view': { control: 'text', name: '--items-per-view' },
    '--bg-base': { control: 'text', name: '--bg-base' },
    '--dot-color': { control: 'text', name: '--dot-color' },
    '--dot-color-active': { control: 'text', name: '--dot-color-active' },
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
        <CarouselAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--carousel-gap': '',
    '--items-per-view': '',
    '--bg-base': '',
    '--dot-color': '',
    '--dot-color-active': '',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { HeroSectionAndromeda } from './index'
import { defaults } from './defaults'

const meta: Meta<any> = {
  title: 'Components/HeroSection/Andromeda',
  component: HeroSectionAndromeda,
  argTypes: {
    '--bg-left': { control: 'text', name: '--bg-left' },
    '--bg-secondary': { control: 'text', name: '--bg-secondary' },
    '--object-fit-bg': { control: 'text', name: '--object-fit-bg' },
    '--title-color': { control: 'text', name: '--title-color' },
    '--title-size': { control: 'text', name: '--title-size' },
    '--word-1-color': { control: 'text', name: '--word-1-color' },
    '--word-2-color': { control: 'text', name: '--word-2-color' },
    '--subtitle-color': { control: 'text', name: '--subtitle-color' },
    '--subtitle-size': { control: 'text', name: '--subtitle-size' },
    '--highlight-bg-color': { control: 'text', name: '--highlight-bg-color' },
    '--highlight-color': { control: 'text', name: '--highlight-color' },
    '--highlight-size': { control: 'text', name: '--highlight-size' },
    '--bg-right': { control: 'text', name: '--bg-right' },
    '--shadow-color': { control: 'text', name: '--shadow-color' },
    '--info-color': { control: 'text', name: '--info-color' },
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
        <HeroSectionAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    ...defaults,
    '--bg-left': '',
    '--bg-secondary': '',
    '--object-fit-bg': '',
    '--title-color': '',
    '--title-size': '',
    '--word-1-color': '',
    '--word-2-color': '',
    '--subtitle-color': '',
    '--subtitle-size': '',
    '--highlight-bg-color': '',
    '--highlight-color': '',
    '--highlight-size': '',
    '--bg-right': '',
    '--shadow-color': '',
    '--info-color': '',
  },
}

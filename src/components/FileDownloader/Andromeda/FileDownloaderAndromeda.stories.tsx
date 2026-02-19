import type { Meta, StoryObj } from '@storybook/react'
import { FileDownloaderAndromeda } from './index'
const meta: Meta<any> = {
  title: 'Components/FileDownloader/Andromeda',
  component: FileDownloaderAndromeda,
  argTypes: {
    '--downloader-gap': { control: 'text', name: '--downloader-gap' },
    '--downloader-bg': { control: 'text', name: '--downloader-bg' },
    '--downloader-color': { control: 'text', name: '--downloader-color' },
    '--shadow-color': { control: 'text', name: '--shadow-color' },
    '--downloader-size': { control: 'text', name: '--downloader-size' },
    '--offset-y': { control: 'text', name: '--offset-y' },
    '--offset-x': { control: 'text', name: '--offset-x' },
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
        <FileDownloaderAndromeda {...args} />
      </div>
    )
  },
}
export default meta

type Story = StoryObj<any>

export const Default: Story = {
  args: {
    '--downloader-gap': '',
    '--downloader-bg': '',
    '--downloader-color': '',
    '--shadow-color': '',
    '--downloader-size': '',
    '--offset-y': '',
    '--offset-x': '',
  },
}

import type { BasePropComponents } from '@/types'
import type { ReactNode } from 'react'

export type FloatingPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type FileItemAndromeda = {
  url: string
  name?: string
  label?: string
  icon?: ReactNode
}

export type FilesLayout = 'horizontal' | 'vertical'

export type FileDownloaderAndromedaProps = BasePropComponents & {
  files: FileItemAndromeda[]
  position?: FloatingPosition
  layout?: FilesLayout
  offset?: {
    x?: number
    y?: number
  }
  defaultIcon?: ReactNode
  title?: string
}

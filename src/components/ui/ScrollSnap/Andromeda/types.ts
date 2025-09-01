import type { BasePropComponents } from '@/types'

export type ScrollSnapAndromedaProps = BasePropComponents & {
  sections?: {
    component?: React.ReactNode
    dotLabel?: string
    dotColor?: string
    backgroundColor?: string
  }[]
}

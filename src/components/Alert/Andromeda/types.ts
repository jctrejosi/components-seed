import type { BasePropComponents } from '@/types'

export type AlertTypeAndromeda = 'success' | 'error' | 'warning'

export type AlertAndromedaProps = BasePropComponents & {
  title?: string
  message?: string
  type?: AlertTypeAndromeda
  visible?: boolean
  onClose?: () => void
}

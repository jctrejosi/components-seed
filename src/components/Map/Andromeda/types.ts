import type { BasePropComponents } from '@/types'

export type MapAndromedaProps = BasePropComponents & {
  address: string
  apiKey: string
  logoUrl?: string
  height?: string
  width?: string
  onButtonClick?: () => void
}

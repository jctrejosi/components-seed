import type { BasePropComponents } from '@/types'

export type MapAntliaProps = BasePropComponents & {
  apiKey: string
  address: string
  phone?: string
  email?: string
  logoUrl?: string
  height?: string
  onOpenMaps?: () => void
}

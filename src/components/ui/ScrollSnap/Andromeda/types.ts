import type { BasePropComponents } from '@/types'

export type ScrollSnapAndromedaProps = BasePropComponents & {
  components: {
    component: React.ReactNode
    dotLabel?: string
  }[]
}

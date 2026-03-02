import type { BasePropComponents } from '@/types'

type InfoItemAndromeda = {
  title: string
  subtitle: string
  description: string
  price: string
  beforeImageUrl: string
  afterImageUrl: string
  buttonText: string
  onButtonClick?: () => void
}

export type InfoItemAndromedaProps = BasePropComponents & {
  items: InfoItemAndromeda[]
}

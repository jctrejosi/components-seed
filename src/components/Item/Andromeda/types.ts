import type { BasePropComponents } from '@/types'

type InfoItemAndromeda = {
  title: string
  subtitle: string
  description: string
  price: string
  images: string[]
  buttonText: string
  onButtonClick?: () => void
}

export type InfoItemAndromedaProps = BasePropComponents & {
  items: InfoItemAndromeda[]
}

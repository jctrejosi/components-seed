import type { BasePropComponents } from '@/types'

export type CarouselItemsPerView =
  | number
  | {
      desktop?: number
      tablet?: number
      mobile?: number
    }

export type CarouselAndromedaProps = BasePropComponents & {
  items?: {
    component: React.ReactNode
  }[]

  showArrows?: boolean
  showDots?: boolean

  autoplay?: boolean
  autoplayInterval?: number
  pauseOnHover?: boolean

  gap?: number

  itemsPerView?: CarouselItemsPerView
}

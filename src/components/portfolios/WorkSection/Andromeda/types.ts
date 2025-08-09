import type { BasePropComponents } from '@/types'

export type ItemWorkSection = {
  name?: string
  logo?: string
  link?: {
    url: string
    text: string
  }
}

export type WorkSectionAndromedaProps = BasePropComponents & {
  items: ItemWorkSection[]
}

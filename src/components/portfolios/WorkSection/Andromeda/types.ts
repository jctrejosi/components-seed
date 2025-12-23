import type { BasePropComponents } from '@/types'

export type WorkItem = {
  name: string
  logo: string
  role?: string
  description?: string
  technologies?: string[]
  link?: {
    url: string
    text: string
  }
}

export type WorkSectionAndromedaProps = BasePropComponents & {
  items?: WorkItem[]
  translations?: any
  style?: React.CSSProperties
  backgroundImage?: string
  className?: string
}

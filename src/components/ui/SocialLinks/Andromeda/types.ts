import type { ReactNode, CSSProperties } from 'react'

export type SocialLinkItem = {
  url: string
  icon: ReactNode
  label?: string
}

export type SocialLinksAndromedaProps = {
  items?: SocialLinkItem[]
  className?: string
  style?: CSSProperties
}

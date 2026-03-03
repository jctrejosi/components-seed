import type { BasePropComponents } from '@/types'

export type SocialLinks = {
  facebook?: string
  instagram?: string
  tiktok?: string
}

export type NavbarAndromedaProps = BasePropComponents & {
  email?: string
  phone?: string
  address?: string
  socialLinks?: SocialLinks
}

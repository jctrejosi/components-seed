import { type BasePropComponents } from '@/types'

interface SocialIconsProps {
  twitter?: string
  github?: string
  instagram?: string
  linkedin?: string
  email?: string
}

export type IntroductionSectionAndromedaProps = BasePropComponents & {
  backgroundImage?: string
  socialIcons?: SocialIconsProps
}

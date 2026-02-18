import { type BasePropComponents } from '@/types'
export type FeaturedIconItem = {
  image: string
  text: string
  url?: string
  alt?: string
}

export type HeroFeaturedAntliaProps = BasePropComponents & {
  /** logos para el carousel */
  items?: FeaturedIconItem[]
  /** fondo */
  backgroundImage?: string
  className?: string
  /** logo del título */
  logo: string
}

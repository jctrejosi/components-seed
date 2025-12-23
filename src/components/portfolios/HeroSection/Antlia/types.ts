export interface FeaturedIconItem {
  image: string
  url?: string
  alt?: string
}

export interface HeroFeaturedAntliaProps {
  /** texto grande principal (por ejemplo "TAMAL SEN") */
  mainTitle: string
  /** subtítulo (p. ej. "Software engineer, ...") */
  subtitle?: string
  /** logos para el carousel */
  items?: FeaturedIconItem[]
  /** fondo */
  backgroundImage?: string
  /** traducciones (featuredTitle debe existir) */
  translations: {
    featuredTitle: Record<string, string>
  }
  className?: string
}

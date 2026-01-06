import type { BasePropComponents } from '@/types'
import type { IconType } from 'react-icons'

export type WorkSectionAntliaProps = BasePropComponents & {
  className?: string
  icons: string[]
  items: WorkSectionAntliaItem[]
}

export type WorkSectionAntliaItem = {
  icon: IconType
  title: string
  subtitle?: string
  description: string
}

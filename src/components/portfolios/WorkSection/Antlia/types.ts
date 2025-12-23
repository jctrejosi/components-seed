import type { BasePropComponents } from '@/types'
import type { TranslationResourceT } from '@/utils'
import type { IconType } from 'react-icons'

export type WorkSectionAntliaProps = BasePropComponents & {
  className?: string
  icons: string[]
  items: WorkSectionAntliaItem[]
}

export type WorkSectionAntliaItem = {
  icon: IconType
  title: TranslationResourceT
  subtitle?: TranslationResourceT
  description: TranslationResourceT
}

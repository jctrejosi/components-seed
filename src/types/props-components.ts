import { type TranslationResourceT } from '@/utils'

export type BasePropComponents = {
  translations?: Record<string, TranslationResourceT>
  className?: string
  style?: React.CSSProperties
}

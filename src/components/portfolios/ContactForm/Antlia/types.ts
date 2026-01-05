import type { BasePropComponents } from '@/types'
import type { ReactNode } from 'react'

export type ContactType = 'phone' | 'email' | 'whatsapp' | 'other'

export type ContactItem = {
  key: string
  type: ContactType
  title: string
  subtitle?: string
  actionText?: string
  url: string
  icon: ReactNode
  targetBlank?: boolean
}

export type ContactFormAntliaProps = BasePropComponents & {
  items?: ContactItem[]
  translations: {
    title: Record<string, string>
  }
  className?: string
}

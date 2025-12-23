import type { ReactNode } from 'react'

export type ContactType = 'phone' | 'email' | 'whatsapp' | 'other'

export interface ContactItem {
  key: string
  type: ContactType
  title: string
  subtitle?: string
  actionText?: string
  url: string
  icon: ReactNode
  targetBlank?: boolean
}

export interface ContactFormAntliaProps {
  items?: ContactItem[]
  translations: {
    title: Record<string, string>
  }
  className?: string
}

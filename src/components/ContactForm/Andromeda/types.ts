import type { BasePropComponents } from '@/types'

export type ContactFormData = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export type ContactFormAndromedaProps = BasePropComponents & {
  sendTo?: string
  backgroundImage?: string
  onSubmit?: (data: ContactFormData) => void

  showName?: boolean
  showEmail?: boolean
  showPhone?: boolean
  showMessage?: boolean
}

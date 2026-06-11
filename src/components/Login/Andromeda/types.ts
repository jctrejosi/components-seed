import type { BasePropComponents } from '@/types'

export type LoginSubmitDataAndromeda = {
  email: string
  password: string
}

export type LoginAndromedaProps = BasePropComponents & {
  title?: string
  subtitle?: string

  emailPlaceholder?: string
  passwordPlaceholder?: string
  loginButtonText?: string

  showGoogle?: boolean
  showMicrosoft?: boolean
  showApple?: boolean

  onSubmit?: (data: LoginSubmitDataAndromeda) => void

  onGoogleLogin?: () => void
  onMicrosoftLogin?: () => void
  onAppleLogin?: () => void
}

import type { CSSProperties, ReactNode } from 'react'

export type NavbarApusModule = {
  key: string
  label: string
  icon?: ReactNode
}

export type NavbarApusUser = {
  name?: string
  role?: string
}

export type NavbarApusProps = {
  brand?: string
  modules?: NavbarApusModule[]
  activeModule?: string
  onNavigate?: (moduleKey: string) => void
  user?: NavbarApusUser
  notificationsCount?: number
  onNotificationsClick?: () => void
  onUserClick?: () => void
  onSettingsClick?: () => void
  className?: string
  style?: CSSProperties
}

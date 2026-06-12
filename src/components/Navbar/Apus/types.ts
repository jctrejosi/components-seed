import type { ReactNode } from 'react'

export type NavbarApusModuleKey = string

export type NavbarApusModule = {
  key: NavbarApusModuleKey
  label: string
  icon?: ReactNode
}

export type NavbarApusUser = {
  name?: string
  role?: string
}

export type NavbarApusProps = {
  brand?: string
  modules: NavbarApusModule[]
  activeModule?: NavbarApusModuleKey
  onNavigate?: (moduleKey: NavbarApusModuleKey) => void
  user?: NavbarApusUser
  onUserClick?: () => void
  onSettingsClick?: () => void
}

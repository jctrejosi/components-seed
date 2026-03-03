import type { BasePropComponents } from '@/types'

export type NavbarDropdownItem = {
  label: string
  href: string
}

export type NavbarLink = {
  label: string
  items: NavbarDropdownItem[]
}

export type NavbarAntliaProps = BasePropComponents & {
  logo?: string
  links: NavbarLink[]
  onAction: () => void
}

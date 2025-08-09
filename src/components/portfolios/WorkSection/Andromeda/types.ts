import type { BasePropComponents } from '@/types'

export type Project = {
  name: string
  logo: string
  url?: string
}

export type WorkSectionAndromedaProps = BasePropComponents & {
  projects: Project[]
}

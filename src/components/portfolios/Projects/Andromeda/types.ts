import { type BasePropComponents } from '@/types'
export type WorkProjectItem = {
  name: string
  type: string
  image: string
  url: string
}

export type WorkSectionProjectsProps = BasePropComponents & {
  items?: WorkProjectItem[]
}

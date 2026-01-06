import type { IconType } from 'react-icons'
import { type BasePropComponents } from '@/types'

export type SkillItem = {
  label: string
  value: number
}

export type SkillSection = {
  title: string
  icon?: IconType
  items?: SkillItem[]
}

export type SkillSectionProps = BasePropComponents & {
  items: SkillSection[]
}

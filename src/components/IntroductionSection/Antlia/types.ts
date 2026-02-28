import { type BasePropComponents } from '@/types'

export type IntroductionSectionAntliaProps = BasePropComponents & {
  onCtaClick?: () => void
}

export type StatisticItem = {
  value: string
  label: string
}

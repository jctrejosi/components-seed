import { type BasePropComponents } from '@/types'

export type IntroductionSectionAntliaProps = BasePropComponents & {
  onCtaClick: () => void
  image: string
}

export type StatisticItem = {
  value: string
  label: string
}

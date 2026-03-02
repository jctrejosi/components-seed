import type { BasePropComponents } from '@/types'

export type Slot = {
  date: string // 'YYYY-MM-DD'
  times: string[]
}

export type CalendarAndromedaProps = BasePropComponents & {
  // acepta ambos formatos:
  // - Slot[]  -> [{ date: '2026-03-10', times: ['09:00', '10:00'] }]
  // - string[] -> ['2026-03-10', '2026-03-11']
  availableSlots?: Slot[] | string[]
  value?: string // fecha seleccionada 'YYYY-MM-DD'
  onChange?: (date: string, time?: string) => void
  minDate?: string
  maxDate?: string
  style?: React.CSSProperties
  className?: string
}

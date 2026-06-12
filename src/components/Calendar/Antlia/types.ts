import type { BasePropComponents } from '@/types'

export type CalendarEventAntlia = {
  id: string
  title: string
  date: string | Date
  startTime?: string
  endTime?: string
  description?: string
  location?: string
  color?: string
  allDay?: boolean
}

export type CalendarAntliaProps = BasePropComponents & {
  title?: string
  events?: CalendarEventAntlia[]
  initialDate?: Date | string
  locale?: string
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  onDateClick?: (date: Date, events: CalendarEventAntlia[]) => void
  onEventClick?: (event: CalendarEventAntlia) => void
}

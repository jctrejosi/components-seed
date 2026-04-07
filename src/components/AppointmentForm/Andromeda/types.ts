import type { SlotCalendarAndromeda } from '@/components/Calendar/Andromeda/types'
import type { BasePropComponents } from '@/types'

export type AppointmentType = {
  id: string
  label: string
  price: number
}

export type AppointmentSubmitPayload = {
  name: string
  document: string
  phone: string
  date: string
  time: string
  appointmentTypeId: string
  price: number
}

export type AppointmentFormAndromedaProps = BasePropComponents & {
  availableSlots?: SlotCalendarAndromeda[]
  appointmentTypes?: AppointmentType[]
  onSubmit: (payload: AppointmentSubmitPayload) => void
  selectedServiceDefault?: string
  style?: React.CSSProperties
  className?: string
  position?: 'static' | 'sticky' | 'fixed'
}

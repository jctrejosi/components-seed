import type { AppointmentType } from './types'

export const availableSlotsExample = [
  { date: '2026-03-05', times: ['09:00', '10:00'] },
  { date: '2026-03-08', times: ['14:00', '15:30'] },
  { date: '2026-03-12', times: ['08:00'] },
]

export const appointmentTypesExample: AppointmentType[] = [
  { id: 'basic', label: 'Diagnóstico', price: 50000 },
  { id: 'premium', label: 'Tratamiento completo', price: 120000 },
]

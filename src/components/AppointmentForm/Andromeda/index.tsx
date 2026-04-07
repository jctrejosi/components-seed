import { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.css'
import type { AppointmentFormAndromedaProps } from './types'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'
import { availableSlotsExample, appointmentTypesExample } from './examples'
import { CalendarAndromeda } from '@/components/Calendar/Andromeda'

export const AppointmentFormAndromeda = ({
  availableSlots = availableSlotsExample,
  appointmentTypes = appointmentTypesExample,
  onSubmit,
  selectedServiceDefault,
  position = 'static',
  style,
  className = 'appointment-form-andromeda',
}: AppointmentFormAndromedaProps) => {
  const [name, setName] = useState('')
  const [document, setDocument] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState<string | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)

  const [appointmentTypeId, setAppointmentTypeId] = useState(
    selectedServiceDefault ?? ''
  )

  // sincroniza cuando cambia desde afuera
  useEffect(() => {
    if (selectedServiceDefault) {
      setAppointmentTypeId(selectedServiceDefault)
    }
  }, [selectedServiceDefault])

  const selectedType = useMemo(
    () => appointmentTypes.find((t) => t.id === appointmentTypeId),
    [appointmentTypeId, appointmentTypes]
  )

  const handleCalendarChange = (
    selectedDate: string,
    selectedTime?: string
  ) => {
    setDate(selectedDate)
    setTime(selectedTime)
  }

  const handleSubmit = () => {
    if (!name || !document || !phone || !date || !time || !selectedType) {
      return
    }

    onSubmit?.({
      name,
      document,
      phone,
      date,
      time,
      appointmentTypeId: selectedType.id,
      price: selectedType.price,
    })
  }

  return (
    <div
      className={`${styles.container} ${styles[position]} ${className}`}
      style={style}
    >
      <input
        placeholder={returnTranslation(translationsSources.name_placeholder)}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder={returnTranslation(
          translationsSources.document_placeholder
        )}
        value={document}
        onChange={(e) => setDocument(e.target.value)}
      />

      <input
        placeholder={returnTranslation(translationsSources.phone_placeholder)}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className={styles.containerCalendar}>
        <CalendarAndromeda
          availableSlots={availableSlots}
          value={date}
          onChange={handleCalendarChange}
        />
      </div>

      <select
        value={appointmentTypeId}
        onChange={(e) => setAppointmentTypeId(e.target.value)}
      >
        <option value="">
          {returnTranslation(translationsSources.select_appointment_type)}
        </option>

        {appointmentTypes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>

      {selectedType && (
        <div className={styles.price}>
          {returnTranslation(translationsSources.price_label)}: $
          {selectedType.price}
        </div>
      )}

      {date && time && (
        <div className={styles.summary}>
          {returnTranslation(translationsSources.selected_date_label)}: {date}{' '}
          {time}
        </div>
      )}

      <button onClick={handleSubmit}>
        {returnTranslation(translationsSources.submit_button)}
      </button>
    </div>
  )
}

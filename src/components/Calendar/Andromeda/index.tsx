import { useMemo, useState } from 'react'
import styles from './styles.module.css'
import type { CalendarAndromedaProps, SlotCalendarAndromeda } from './types'
import { availableSlotsExample } from './examples'

const formatDate = (date: Date) => date.toISOString().split('T')[0]

export const CalendarAndromeda = ({
  availableSlots = availableSlotsExample,
  value,
  onChange,
  minDate,
  maxDate,
  style,
  className = 'calendar-andromeda',
}: CalendarAndromedaProps) => {
  const [currentMonth, setCurrentMonth] = useState(() =>
    value ? new Date(value) : new Date()
  )
  const [selectedDate, setSelectedDate] = useState<string | undefined>(value)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  )

  // normaliza availableSlots a un Map<date, times[]>
  const slotsMap = useMemo(() => {
    const map = new Map<string, string[]>()

    if (!availableSlots) return map

    // primer caso: array de strings
    if (availableSlots.length && typeof availableSlots[0] === 'string') {
      ;(availableSlots as string[]).forEach((d) => map.set(d, []))
      return map
    }

    // caso: array de slots
    ;(availableSlots as SlotCalendarAndromeda[]).forEach((s) => {
      map.set(s.date, Array.isArray(s.times) ? s.times : [])
    })
    return map
  }, [availableSlots])

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)

  const startWeekDay = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const days = useMemo(() => {
    const result: (Date | null)[] = []
    for (let i = 0; i < startWeekDay; i++) result.push(null)
    for (let i = 1; i <= daysInMonth; i++) result.push(new Date(year, month, i))
    return result
  }, [year, month, startWeekDay, daysInMonth])

  const isAvailable = (date: Date) => slotsMap.has(formatDate(date))

  const isDisabledByRange = (date: Date) => {
    const d = formatDate(date)
    if (minDate && d < minDate) return true
    if (maxDate && d > maxDate) return true
    return false
  }

  const handleSelect = (date: Date) => {
    const formatted = formatDate(date)

    if (!isAvailable(date)) {
      alert('Fecha no disponible')
      return
    }

    if (isDisabledByRange(date)) return

    setSelectedDate(formatted)
    setSelectedTime(undefined)

    // notifica la selección de fecha (sin hora)
    onChange?.(formatted, undefined)
  }

  const handleSelectTime = (time: string) => {
    if (!selectedDate) return
    setSelectedTime(time)
    onChange?.(selectedDate, time)
  }

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(year, month + offset, 1))
  }

  const availableTimesForSelected = selectedDate
    ? (slotsMap.get(selectedDate) ?? [])
    : []

  return (
    <div className={`${styles.calendar} ${className}`} style={style}>
      <div className={styles.header}>
        <button type="button" onClick={() => changeMonth(-1)}>
          ‹
        </button>
        <span className={styles.monthLabel}>
          {currentMonth.toLocaleDateString(undefined, {
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <button type="button" onClick={() => changeMonth(1)}>
          ›
        </button>
      </div>

      <div className={styles.weekdays}>
        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((d, i) => (
          <div key={i} className={styles.weekday}>
            {d}
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {days.map((date, i) => {
          if (!date) return <div key={i} />
          const formatted = formatDate(date)
          const available = isAvailable(date)
          const selected = value === formatted || selectedDate === formatted
          const disabled = !available || isDisabledByRange(date)

          return (
            <button
              key={i}
              type="button"
              className={`
                ${styles.day}
                ${available ? styles.available : styles.unavailable}
                ${selected ? styles.selected : ''}
              `}
              disabled={disabled}
              onClick={() => handleSelect(date)}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      {/* panel de horas */}
      <div className={styles.timesPanel}>
        {selectedDate ? (
          availableTimesForSelected.length ? (
            <>
              <div className={styles.timesLabel}>Horas disponibles</div>
              <div className={styles.timesGrid}>
                {availableTimesForSelected.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`${styles.timeButton} ${selectedTime === t ? styles.timeSelected : ''}`}
                    onClick={() => handleSelectTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noTimes}>No hay horas para esta fecha</div>
          )
        ) : (
          <div className={styles.hint}>Selecciona una fecha disponible</div>
        )}
      </div>
    </div>
  )
}

import { useEffect, useMemo, useState } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiX,
} from 'react-icons/fi'
import styles from './styles.module.css'
import type { CalendarAntliaProps, CalendarEventAntlia } from './types'

function toLocalDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseDate(value: string | Date) {
  return value instanceof Date ? new Date(value) : new Date(`${value}T00:00:00`)
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function formatTime(value?: string) {
  if (!value) return ''
  return value
}

function addDays(date: Date, amount: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + amount)
  return next
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function startOfCalendarGrid(date: Date, weekStartsOn: number) {
  const firstDay = startOfMonth(date)
  const offset = (firstDay.getDay() - weekStartsOn + 7) % 7
  return addDays(firstDay, -offset)
}

function endOfCalendarGrid(date: Date, weekStartsOn: number) {
  const lastDay = endOfMonth(date)
  const offset = (weekStartsOn + 6 - lastDay.getDay() + 7) % 7
  return addDays(lastDay, offset)
}

function chunkDates(dates: Date[], chunkSize = 7) {
  const chunks: Date[][] = []
  for (let i = 0; i < dates.length; i += chunkSize) {
    chunks.push(dates.slice(i, i + chunkSize))
  }
  return chunks
}

export const CalendarAntlia = ({
  title = 'Calendario',
  events = [],
  initialDate = new Date(),
  locale = 'es-CO',
  weekStartsOn = 1,
  className = 'calendar-andromeda',
  style,
  onDateClick,
  onEventClick,
}: CalendarAntliaProps) => {
  const initial =
    initialDate instanceof Date ? initialDate : parseDate(initialDate)

  const [currentDate, setCurrentDate] = useState<Date>(initial)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const formatter = useMemo(
    () => ({
      monthYear: new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
      }),
      weekday: new Intl.DateTimeFormat(locale, { weekday: 'short' }),
      dayLabel: new Intl.DateTimeFormat(locale, { day: 'numeric' }),
      modalDate: new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    }),
    [locale]
  )

  const visibleMonthLabel = formatter.monthYear.format(currentDate)

  const daysOfWeek = useMemo(() => {
    const base = new Date(2024, 0, 1) // lunes 1 de enero de 2024
    return Array.from({ length: 7 }, (_, index) => {
      const offset = (weekStartsOn + index) % 7
      const day = new Date(base)
      day.setDate(base.getDate() + ((offset - base.getDay() + 7) % 7))
      return formatter.weekday.format(day)
    })
  }, [formatter.weekday, weekStartsOn])

  const gridDates = useMemo(() => {
    const start = startOfCalendarGrid(currentDate, weekStartsOn)
    const end = endOfCalendarGrid(currentDate, weekStartsOn)

    const dates: Date[] = []
    let cursor = new Date(start)

    while (cursor <= end) {
      dates.push(new Date(cursor))
      cursor = addDays(cursor, 1)
    }

    return dates
  }, [currentDate, weekStartsOn])

  const weeks = useMemo(() => chunkDates(gridDates, 7), [gridDates])

  const eventsByDay = useMemo(() => {
    const map = new Map<string, CalendarEventAntlia[]>()

    for (const event of events) {
      const eventDate = parseDate(event.date)
      const key = toLocalDateKey(eventDate)
      const list = map.get(key) ?? []
      list.push(event)
      map.set(key, list)
    }

    return map
  }, [events])

  const selectedDayEvents = useMemo(() => {
    if (!selectedDate) return []
    return eventsByDay.get(toLocalDateKey(selectedDate)) ?? []
  }, [eventsByDay, selectedDate])

  const closeModal = () => setSelectedDate(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const goToPreviousMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    )
  }

  const goToNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    )
  }

  const goToToday = () => {
    const today = new Date()
    setCurrentDate(today)
    setSelectedDate(today)
  }

  const handleDayClick = (date: Date) => {
    setSelectedDate(date)
    onDateClick?.(date, eventsByDay.get(toLocalDateKey(date)) ?? [])
  }

  return (
    <section className={`${styles.container} ${className}`} style={style}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{visibleMonthLabel}</p>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.actionButton}
            onClick={goToToday}
          >
            Hoy
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={goToPreviousMonth}
            aria-label="Mes anterior"
          >
            <FiChevronLeft />
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={goToNextMonth}
            aria-label="Mes siguiente"
          >
            <FiChevronRight />
          </button>
        </div>
      </header>

      <div className={styles.calendar}>
        <div className={styles.weekdays}>
          {daysOfWeek.map((day, index) => (
            <div key={`${day}-${index}`} className={styles.weekday}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {weeks.map((week, weekIndex) =>
            week.map((date) => {
              const dateKey = toLocalDateKey(date)
              const dayEvents = eventsByDay.get(dateKey) ?? []
              const isCurrentMonth = date.getMonth() === currentDate.getMonth()
              const isToday = isSameDay(date, new Date())
              const isSelected = selectedDate
                ? isSameDay(date, selectedDate)
                : false
              const visibleEvents = dayEvents.slice(0, 3)
              const hiddenCount = dayEvents.length - visibleEvents.length

              return (
                <button
                  key={`${weekIndex}-${dateKey}`}
                  type="button"
                  className={[
                    styles.dayCell,
                    !isCurrentMonth ? styles.outsideMonth : '',
                    isToday ? styles.today : '',
                    isSelected ? styles.selected : '',
                  ].join(' ')}
                  onClick={() => handleDayClick(date)}
                >
                  <div className={styles.dayTop}>
                    <span className={styles.dayNumber}>
                      {formatter.dayLabel.format(date)}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className={styles.badge}>{dayEvents.length}</span>
                    )}
                  </div>

                  <div className={styles.events}>
                    {visibleEvents.map((event) => (
                      <div
                        key={event.id}
                        className={styles.event}
                        style={{ backgroundColor: event.color ?? undefined }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDate(date)
                          onEventClick?.(event)
                        }}
                      >
                        <span className={styles.eventDot} />
                        <span className={styles.eventText}>{event.title}</span>
                      </div>
                    ))}

                    {hiddenCount > 0 && (
                      <div className={styles.moreEvents}>
                        +{hiddenCount} más
                      </div>
                    )}
                  </div>
                </button>
              )
            })
          )}
        </div>
      </div>

      {selectedDate && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
          role="presentation"
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>
                  {formatter.modalDate.format(selectedDate)}
                </h3>
                <p className={styles.modalSubtitle}>
                  {selectedDayEvents.length > 0
                    ? `${selectedDayEvents.length} evento(s)`
                    : 'Sin eventos programados'}
                </p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                <FiX />
              </button>
            </div>

            <div className={styles.modalBody}>
              {selectedDayEvents.length === 0 ? (
                <div className={styles.emptyState}>
                  <FiCalendar className={styles.emptyIcon} />
                  <p>No hay eventos para esta fecha.</p>
                </div>
              ) : (
                <div className={styles.eventList}>
                  {selectedDayEvents.map((event) => (
                    <article key={event.id} className={styles.eventCard}>
                      <div
                        className={styles.eventCardBar}
                        style={{ backgroundColor: event.color ?? undefined }}
                      />
                      <div className={styles.eventCardContent}>
                        <h4 className={styles.eventCardTitle}>{event.title}</h4>

                        <div className={styles.meta}>
                          {(event.startTime || event.endTime) && (
                            <div className={styles.metaItem}>
                              <FiClock />
                              <span>
                                {formatTime(event.startTime)}
                                {event.endTime
                                  ? ` - ${formatTime(event.endTime)}`
                                  : ''}
                              </span>
                            </div>
                          )}

                          {event.location && (
                            <div className={styles.metaItem}>
                              <FiMapPin />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>

                        {event.description && (
                          <p className={styles.description}>
                            {event.description}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

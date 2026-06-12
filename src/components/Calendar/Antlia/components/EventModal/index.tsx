import { useEffect, useMemo, useState } from 'react'
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPlus,
  FiSave,
  FiTrash2,
  FiX,
} from 'react-icons/fi'
import styles from './styles.module.css'
import type { CalendarEventAntlia, CalendarModalAntliaProps } from '../../types'

function padHour(hour: number) {
  return String(hour).padStart(2, '0')
}

function hourLabel(hour: number) {
  return `${padHour(hour)}:00`
}

function getHourFromTime(time?: string) {
  if (!time) return 0
  const [h] = time.split(':')
  const parsed = Number(h)
  return Number.isFinite(parsed) ? parsed : 0
}

function createDraft(date: Date, hour = 9): CalendarEventAntlia {
  const start = hourLabel(hour)
  const end = hourLabel(Math.min(hour + 1, 23))

  return {
    id: crypto.randomUUID(),
    title: '',
    date,
    startTime: start,
    endTime: end,
    description: '',
    location: '',
    color: '#2563eb',
    allDay: false,
  }
}

export const EventModal = ({
  open,
  date,
  events,
  locale = 'es-CO',
  onClose,
  onEventClick,
  onSaveEvent,
  onDeleteEvent,
}: CalendarModalAntliaProps) => {
  const formatter = useMemo(
    () => ({
      modalDate: new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    }),
    [locale]
  )

  const [draftEvent, setDraftEvent] = useState<CalendarEventAntlia | null>(null)
  const [editingEventId, setEditingEventId] = useState<string | null>(null)

  const timelineEvents = useMemo(() => {
    return [...events]
      .filter((event) => !event.allDay)
      .sort(
        (a, b) => getHourFromTime(a.startTime) - getHourFromTime(b.startTime)
      )
  }, [events])

  useEffect(() => {
    if (!open) return

    const firstEvent = events[0]

    if (firstEvent) {
      setDraftEvent(firstEvent)
      setEditingEventId(firstEvent.id)
    } else {
      setDraftEvent(createDraft(date, 9))
      setEditingEventId(null)
    }
  }, [date, events, open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, open])

  if (!open) return null

  const handleHourClick = (hour: number) => {
    setDraftEvent(createDraft(date, hour))
    setEditingEventId(null)
  }

  const handleEventClick = (event: CalendarEventAntlia) => {
    onEventClick?.(event)
    setEditingEventId(event.id)
    setDraftEvent({
      ...event,
      date,
    })
  }

  const handleSave = () => {
    if (!draftEvent || !draftEvent.title.trim()) return

    const payload: CalendarEventAntlia = {
      ...draftEvent,
      date,
      title: draftEvent.title.trim(),
      startTime: draftEvent.startTime || '09:00',
      endTime: draftEvent.endTime || '10:00',
    }

    onSaveEvent?.(payload)
  }

  const handleDelete = () => {
    if (!draftEvent?.id) return
    onDeleteEvent?.(draftEvent.id)
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.modalHeader}>
          <div>
            <h3 className={styles.modalTitle}>
              {formatter.modalDate.format(date)}
            </h3>
            <p className={styles.modalSubtitle}>
              {events.length > 0
                ? `${events.length} evento(s)`
                : 'Sin eventos programados'}
            </p>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <FiX />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalLayout}>
            <div className={styles.timelinePanel}>
              <div className={styles.timelineHeader}>
                <FiCalendar />
                <span>agenda de 24 horas</span>
              </div>

              <div className={styles.timeline}>
                {Array.from({ length: 24 }, (_, hour) => {
                  const hourEvents = timelineEvents.filter(
                    (event) => getHourFromTime(event.startTime) === hour
                  )

                  return (
                    <button
                      type="button"
                      key={hour}
                      className={styles.timelineRow}
                      onClick={() => handleHourClick(hour)}
                    >
                      <div className={styles.hourLabel}>{hourLabel(hour)}</div>

                      <div className={styles.hourCell}>
                        {hourEvents.length === 0 ? (
                          <div className={styles.hourEmpty}>
                            <FiPlus />
                            <span>asignar evento</span>
                          </div>
                        ) : (
                          <div className={styles.hourEvents}>
                            {hourEvents.map((event) => (
                              <article
                                key={event.id}
                                className={styles.timelineEvent}
                                style={{
                                  backgroundColor: event.color ?? undefined,
                                }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleEventClick(event)
                                }}
                              >
                                <div className={styles.timelineEventHead}>
                                  <strong>{event.title}</strong>
                                  <span>
                                    {event.startTime}
                                    {event.endTime ? ` - ${event.endTime}` : ''}
                                  </span>
                                </div>

                                {(event.location || event.description) && (
                                  <div className={styles.timelineEventMeta}>
                                    {event.location && (
                                      <span className={styles.timelineMetaItem}>
                                        <FiMapPin />
                                        {event.location}
                                      </span>
                                    )}
                                    {event.description && (
                                      <span className={styles.timelineMetaText}>
                                        {event.description}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </article>
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <aside className={styles.editorPanel}>
              <div className={styles.editorHeader}>
                <h4 className={styles.editorTitle}>
                  {editingEventId ? 'editar evento' : 'nuevo evento'}
                </h4>
                <p className={styles.editorSubtitle}>
                  Modifica la hora y los datos del evento aquí.
                </p>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Título</label>
                <input
                  className={styles.input}
                  value={draftEvent?.title ?? ''}
                  onChange={(e) =>
                    setDraftEvent((prev) =>
                      prev ? { ...prev, title: e.target.value } : prev
                    )
                  }
                  placeholder="Nombre del evento"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Inicio</label>
                  <input
                    className={styles.input}
                    type="time"
                    value={draftEvent?.startTime ?? '09:00'}
                    onChange={(e) =>
                      setDraftEvent((prev) =>
                        prev ? { ...prev, startTime: e.target.value } : prev
                      )
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Fin</label>
                  <input
                    className={styles.input}
                    type="time"
                    value={draftEvent?.endTime ?? '10:00'}
                    onChange={(e) =>
                      setDraftEvent((prev) =>
                        prev ? { ...prev, endTime: e.target.value } : prev
                      )
                    }
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Lugar</label>
                <input
                  className={styles.input}
                  value={draftEvent?.location ?? ''}
                  onChange={(e) =>
                    setDraftEvent((prev) =>
                      prev ? { ...prev, location: e.target.value } : prev
                    )
                  }
                  placeholder="Consultorio 2"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Descripción</label>
                <textarea
                  className={styles.textarea}
                  value={draftEvent?.description ?? ''}
                  onChange={(e) =>
                    setDraftEvent((prev) =>
                      prev ? { ...prev, description: e.target.value } : prev
                    )
                  }
                  placeholder="Notas del evento"
                  rows={5}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Color</label>
                <input
                  className={styles.colorInput}
                  type="color"
                  value={draftEvent?.color ?? '#2563eb'}
                  onChange={(e) =>
                    setDraftEvent((prev) =>
                      prev ? { ...prev, color: e.target.value } : prev
                    )
                  }
                />
              </div>

              <div className={styles.editorActions}>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={handleSave}
                  disabled={!draftEvent?.title?.trim()}
                >
                  <FiSave />
                  guardar
                </button>

                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => setDraftEvent(createDraft(date))}
                >
                  <FiPlus />
                  limpiar
                </button>

                {editingEventId && (
                  <button
                    type="button"
                    className={styles.dangerButton}
                    onClick={handleDelete}
                  >
                    <FiTrash2 />
                    eliminar
                  </button>
                )}
              </div>

              <div className={styles.helperBox}>
                <FiClock />
                <span>
                  Haz clic sobre una hora para crear un evento en ese bloque.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

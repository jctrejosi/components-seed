import styles from './styles.module.css'
import type { AlertAndromedaProps } from './types'

export const AlertAndromeda = ({
  title = 'Cita agendada correctamente',
  message = 'Tu solicitud fue enviada con éxito. Pronto nos pondremos en contacto contigo.',
  type = 'success',
  visible = true,
  onClose,
  className = 'alert-andromeda',
  style,
}: AlertAndromedaProps) => {
  if (!visible) return null

  return (
    <div
      className={`${styles.overlay} ${className}`}
      style={style}
      onClick={onClose}
    >
      <div
        className={`${styles.alert} ${styles[type]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.icon}>
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'warning' && '⚠'}
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.message}>{message}</p>
        </div>

        {onClose && (
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        )}
      </div>
    </div>
  )
}

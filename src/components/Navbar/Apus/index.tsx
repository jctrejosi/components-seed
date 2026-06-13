import { FiBell, FiSettings, FiUser } from 'react-icons/fi'
import styles from './styles.module.css'
import { modulesExamples } from './examples'
import type { NavbarApusProps } from './types'

export const NavbarApus = ({
  brand = 'apus',
  modules = modulesExamples,
  activeModule,
  onNavigate,
  user,
  notificationsCount = 0,
  onNotificationsClick,
  onUserClick,
  onSettingsClick,
  className,
  style,
}: NavbarApusProps) => {
  const hasNotifications = notificationsCount > 0

  return (
    <header
      className={[styles.navbar, className].filter(Boolean).join(' ')}
      style={style}
    >
      <div className={styles.left}>
        <div className={styles.brand}>{brand}</div>

        <nav className={styles.modules} aria-label="navegación principal">
          {modules.map((module) => {
            const isActive = activeModule === module.key

            return (
              <button
                key={module.key}
                type="button"
                className={`${styles.moduleButton} ${isActive ? styles.active : ''}`}
                onClick={() => onNavigate?.(module.key)}
                aria-current={isActive ? 'page' : undefined}
              >
                {module.icon && (
                  <span className={styles.icon}>{module.icon}</span>
                )}
                <span className={styles.label}>{module.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className={styles.right}>
        <div className={styles.actionsGroup} aria-label="acciones globales">
          <button
            type="button"
            className={styles.iconButton}
            onClick={onNotificationsClick}
            aria-label={
              hasNotifications
                ? `notificaciones, ${notificationsCount} pendientes`
                : 'notificaciones'
            }
          >
            <FiBell className={styles.actionIcon} />
            {hasNotifications && (
              <span className={styles.badge}>{notificationsCount}</span>
            )}
          </button>

          <button
            type="button"
            className={styles.userButton}
            onClick={onUserClick}
            aria-label={user?.name ? `usuario ${user.name}` : 'usuario'}
          >
            <span className={styles.userAvatar}>
              {user?.name ? (
                user.name.charAt(0).toUpperCase()
              ) : (
                <FiUser className={styles.avatarIcon} />
              )}
            </span>

            <span className={styles.userText}>
              <strong className={styles.userTitle}>
                {user?.name ?? 'usuario'}
              </strong>
              <span className={styles.userSubtitle}>
                {user?.role ?? 'perfil'}
              </span>
            </span>
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={onSettingsClick}
            aria-label="configuración"
          >
            <FiSettings className={styles.actionIcon} />
          </button>
        </div>
      </div>
    </header>
  )
}

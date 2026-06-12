import { FiSettings } from 'react-icons/fi'
import { modulesExamples } from './examples'
import styles from './styles.module.css'
import type { NavbarApusProps } from './types'

export const NavbarApus = ({
  brand = 'apus',
  modules = modulesExamples,
  activeModule,
  onNavigate,
  user,
  onUserClick,
  onSettingsClick,
}: NavbarApusProps) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.brand}>{brand}</div>

        <nav className={styles.modules} aria-label="navegación principal">
          {modules.map((module) => {
            const isActive = activeModule === module.key

            return (
              <button
                key={module.key}
                type="button"
                className={`${styles.moduleButton} ${
                  isActive ? styles.active : ''
                }`}
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
        <div
          className={styles.configGroup}
          aria-label="acciones de configuración"
        >
          <button
            type="button"
            className={styles.configButton}
            onClick={onUserClick}
          >
            <span className={styles.userAvatar}>
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </span>

            <span className={styles.configText}>
              <strong className={styles.configTitle}>
                {user?.name ?? 'usuario'}
              </strong>
              <span className={styles.configSubtitle}>
                {user?.role ?? 'perfil'}
              </span>
            </span>
          </button>

          <button
            type="button"
            className={styles.settingsButton}
            onClick={onSettingsClick}
            aria-label="configuración"
          >
            <FiSettings /> configuración
          </button>
        </div>
      </div>
    </header>
  )
}

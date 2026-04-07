import { useState } from 'react'
import { FaCalendarCheck } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './styles.module.css'
import type { NavbarAntliaProps } from './types'
import { returnTranslation } from '@/utils'
import { translationsSources } from './translations'

export const NavbarAntlia = ({
  logo,
  links,
  translations = translationsSources,
  onAction = () => {},
  className = 'navbar-antlia',
  style,
}: NavbarAntliaProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className={`${styles.navbar} ${className}`} style={style}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>

        {/* menú */}
        <div
          className={`${styles.center} ${mobileOpen ? styles.mobileOpen : ''}`}
        >
          {/* botón cerrar */}
          <button
            className={styles.closeButton}
            onClick={() => setMobileOpen(false)}
          >
            <FiX size={22} />
          </button>

          {links.map((link) => (
            <div
              key={link.label}
              className={styles.dropdown}
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={styles.linkButton}
                onClick={() => toggleDropdown(link.label)}
              >
                {link.label}
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  openDropdown === link.label ? styles.show : ''
                }`}
              >
                {link.items.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <button className={styles.ctaButton} onClick={onAction}>
            <FaCalendarCheck size={14} />
            {returnTranslation(translations.action_btn)}
          </button>
        </div>

        {/* botón abrir */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(true)}
        >
          <FiMenu size={22} />
        </button>
      </div>
    </nav>
  )
}

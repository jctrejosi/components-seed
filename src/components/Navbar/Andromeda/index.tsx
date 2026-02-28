import styles from './styles.module.css'
import type { NavbarAndromedaProps } from './types'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

export const NavbarAndromeda = ({
  email = 'contacto@odontosana.com',
  phone = '3137448700',
  address = 'Calle 38A #34-40',
  socialLinks = {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
  },
}: NavbarAndromedaProps) => {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.item}>
          <FiMail className={styles.icon} />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={styles.item}>
          <FiPhone className={styles.icon} />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className={styles.item}>
          <FiMapPin className={styles.icon} />
          <span>{address}</span>
        </div>
      </div>

      <div className={styles.socials}>
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
          <FaFacebookF className={styles.socialIcon} />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
          <FaInstagram className={styles.socialIcon} />
        </a>
        <a href={socialLinks.tiktok} target="_blank" rel="noreferrer">
          <SiTiktok className={styles.socialIcon} />
        </a>
      </div>
    </div>
  )
}

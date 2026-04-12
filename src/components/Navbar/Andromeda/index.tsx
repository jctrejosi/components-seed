import styles from './styles.module.css'
import type { NavbarAndromedaProps } from './types'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

export const NavbarAndromeda = ({
  email,
  phone,
  address,
  facebook,
  instagram,
  tiktok,
  style,
}: NavbarAndromedaProps) => {
  const hasEmail = Boolean(email?.trim())
  const hasPhone = Boolean(phone?.trim())
  const hasAddress = Boolean(address?.trim())

  const hasFacebook = Boolean(facebook?.trim())
  const hasInstagram = Boolean(instagram?.trim())
  const hasTiktok = Boolean(tiktok?.trim())

  const hasSocialLinks = hasFacebook || hasInstagram || hasTiktok

  return (
    <div className={styles.footer} style={style}>
      <div className={styles.contact}>
        {hasEmail && (
          <div className={styles.item}>
            <FiMail className={styles.icon} />
            <a className={styles.link} href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}

        {hasPhone && (
          <div className={styles.item}>
            <FiPhone className={styles.icon} />
            <a className={styles.link} href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        )}

        {hasAddress && (
          <div className={styles.item}>
            <FiMapPin className={styles.icon} />
            <span className={styles.link}>{address}</span>
          </div>
        )}
      </div>

      {hasSocialLinks && (
        <div className={styles.socials}>
          {hasFacebook && (
            <a href={facebook} target="_blank" rel="noreferrer">
              <FaFacebookF className={styles.socialIcon} />
            </a>
          )}

          {hasInstagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <FaInstagram className={styles.socialIcon} />
            </a>
          )}

          {hasTiktok && (
            <a href={tiktok} target="_blank" rel="noreferrer">
              <SiTiktok className={styles.socialIcon} />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

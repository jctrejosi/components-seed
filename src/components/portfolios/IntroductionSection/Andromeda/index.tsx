import { returnTranslation } from '@/utils'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import styles from './styles.module.css'
import { translationsSources } from './translations'
import { type IntroductionSectionAndromedaProps } from './types'

export const IntroductionSectionAndromeda = ({
  className,
  translations = translationsSources,
  backgroundImage,
  socialIcons,
  style,
}: IntroductionSectionAndromedaProps) => {
  return (
    <div className={styles.main_container} style={style}>
      {backgroundImage && (
        <img className={styles.backgroundImage} src={backgroundImage} />
      )}
      <section className={`${styles.container} ${className}`}>
        <h1 className={styles.title}>
          {returnTranslation(translations.hi_there)}
        </h1>
        <p className={styles.paragraph}>
          {returnTranslation(translations.i_am)}
          <span className={styles.highlight}>
            {returnTranslation(translations.name)}
          </span>
          <span>{returnTranslation(translations.developer_focus)}.</span>
          <br />
          <span>{returnTranslation(translations.slogan)}</span>
        </p>
        <div className={styles.social}>
          <span>{returnTranslation(translations.find_me_on)}</span>
          <div className={styles.icons}>
            {socialIcons?.github && (
              <a
                href={socialIcons.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}
            {socialIcons?.linkedin && (
              <a
                href={socialIcons?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            )}
            {socialIcons?.twitter && (
              <a
                href={socialIcons.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            )}
            {socialIcons?.instagram && (
              <a
                href={socialIcons.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            )}
            {socialIcons?.email && (
              <a href={`mailto:${socialIcons?.email}`}>
                <FaEnvelope />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

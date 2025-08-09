import { returnTranslation } from '@/utils'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

import styles from './styles.module.css'
import { translationsSources } from './translations'
import { type PropsIntroductionSectionAndromeda } from './types'

const defaultStyles = {
  '--highlight-color': 'var(--base-color-6)',
  '--icons-color': 'var(--base-color-3)',
  '--icons-hover-color': 'var(--base-color-2)',
  '--text-color': 'var(--base-color-1)',
  '--bg-secondary': 'var(--base-color-8)',
  '--title-color': 'var(--base-color-8)',
  '--subtitle-color': 'var(--base-color-3)',
} as React.CSSProperties

export const IntroductionSectionAndromeda = ({
  className,
  translations = translationsSources,
  style,
}: PropsIntroductionSectionAndromeda) => {
  return (
    <section
      className={`${styles.container} ${className}`}
      style={{
        ...defaultStyles,
        ...style,
      }}
    >
      <h1 className={styles.heading}>
        {returnTranslation(translations.hi_there)}
      </h1>
      <p className={styles.paragraph}>
        {returnTranslation(translations.i_am)}
        <span className={styles.highlight}>
          {returnTranslation(translations.name)}
        </span>
        {returnTranslation(translations.developer_focus)}.
        <br />
        {returnTranslation(translations.digital_garden)}
      </p>

      <div className={styles.social}>
        <span>{returnTranslation(translations.find_me_on)}</span>
        <div className={styles.icons}>
          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-carlos-trejos-26605b142/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:jctrejosi@unal.edu.co">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}

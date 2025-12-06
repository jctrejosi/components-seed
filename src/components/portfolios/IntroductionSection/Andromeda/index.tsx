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
import { type IntroductionSectionAndromedaProps } from './types'

export const IntroductionSectionAndromeda = ({
  className,
  translations = translationsSources,
  backgroundImage,
  style,
}: IntroductionSectionAndromedaProps) => {
  return (
    <div className={styles.main_container}>
      {backgroundImage && (
        <img className={styles.backgroundImage} src={backgroundImage} />
      )}
      <section className={`${styles.container} ${className}`} style={style}>
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
    </div>
  )
}

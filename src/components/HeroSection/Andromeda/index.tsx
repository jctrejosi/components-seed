import { returnTranslation } from '@/utils'

import styles from './styles.module.css'
import { translationsDefault } from './translations'
import type { HeroSectionAndromedaProps } from './types'

export const HeroSectionAndromeda = ({
  className = 'hero-section-andromeda',
  backgroundLogo,
  backgroundImage,
  backgroundImageRight,
  style,
  imageProfile,
  translations = translationsDefault,
}: HeroSectionAndromedaProps) => {
  return (
    <section className={`${styles.hero} ${className}`} style={{ ...style }}>
      <div className={styles.left}>
        {backgroundLogo && <img className={styles.logo} src={backgroundLogo} />}
        {backgroundImage && (
          <img className={styles.backgroundImage} src={backgroundImage} />
        )}
        <h1 className={styles.title}>
          <span className={styles.word_1}>
            {returnTranslation(translations.title_web)}
          </span>
          <span className={styles.word_2}>
            {returnTranslation(translations.title_developer)}
          </span>
        </h1>
        <p className={styles.subtitle}>
          {returnTranslation(translations.subtitle)}
        </p>

        <div className={styles.highlights}>
          <p>{returnTranslation(translations.highlight_1)}</p>
          <p>{returnTranslation(translations.highlight_2)}</p>
        </div>
      </div>
      <div className={styles.right}>
        {backgroundImage && (
          <img
            className={styles.backgroundImageright}
            src={backgroundImageRight}
          />
        )}
        <img src={imageProfile} alt="Profile" className={styles.imageProfile} />
        <div className={styles.info}>
          <p className={styles.name}>{returnTranslation(translations.name)}</p>
          <p className={styles.address}>
            {returnTranslation(translations.address)}
          </p>
          <p className={styles.email}>
            {returnTranslation(translations.email)}
          </p>
          <p className={styles.phone}>
            {returnTranslation(translations.phone)}
          </p>
        </div>
      </div>
    </section>
  )
}

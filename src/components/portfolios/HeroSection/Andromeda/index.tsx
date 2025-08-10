import { returnTranslation } from '@/utils'

import styles from './styles.module.css'
import { translationsDefault } from './translations'
import type { HeroSectionAndromedaProps } from './types'

export const HeroSectionAndromeda = ({
  className = 'hero-section-andromeda',
  backgroundImage = '',
  style,
  imageProfile,
  translations = translationsDefault,
}: HeroSectionAndromedaProps) => {
  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{
        ...style,
      }}
    >
      <div
        className={styles.overlay}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <span className={styles.highlight_1}>
            {returnTranslation(translations.title_web)}
          </span>{' '}
          <span className={styles.highlight_2}>
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
        <img src={imageProfile} alt="Profile" className={styles.image} />
      </div>
    </section>
  )
}

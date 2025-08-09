import styles from './styles.module.css'
import type { HeroSectionAndromedaProps } from './types'
import { translationsDefault } from './translations'
import { returnTranslation } from '@/utils'

const defaultStyle = {
  '--highlight-1-color': 'var(--base-color-5)',
  '--highlight-2-color': 'var(--base-color-3)',
  '--subtitle-color': 'var(--base-color-4)',
  '--highlight-text-color': 'var(--base-color-2)',
  '--bg-left': 'var(--bg-main)',
  '--bg-right': 'var(--bg-secondary)',
} as React.CSSProperties

export const HeroSectionAndromeda = ({
  className = 'hero-section-andromeda',
  backgroundImage = '',
  style = {},
  imageProfile,
  translations = translationsDefault,
}: HeroSectionAndromedaProps) => {
  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{ ...defaultStyle, ...style }}
    >
      <div
        className={styles.overlay}
        style={{ backgroundImage: `url(${backgroundImage})` }}
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

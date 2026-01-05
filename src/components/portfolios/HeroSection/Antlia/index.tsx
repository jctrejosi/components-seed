import React from 'react'
import styles from './styles.module.css'
import type { HeroFeaturedAntliaProps } from './types'
import { returnTranslation } from '@/utils'
import { translationsSoruces } from './translations'

export const HeroSectionAntlia = ({
  items = [],
  style,
  backgroundImage,
  translations = translationsSoruces,
  className = '',
  logo,
}: HeroFeaturedAntliaProps) => {
  // duplicamos items para crear el loop continuo en el track CSS
  const loopItems = [...items, ...items]

  return (
    <section
      className={`${styles.container} ${className}`}
      aria-label={returnTranslation(translations.featuredTitle)}
      style={style}
    >
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden
          className={styles.backgroundImage}
        />
      )}

      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={styles.heroTitle}>
            {returnTranslation(translations.title)}
          </h1>
          <img src={logo} alt="Logo personal" className={styles.titleLogo} />
        </div>
        {
          <div className={styles.heroSubtitle}>
            {returnTranslation(translations.subtitle)}
          </div>
        }

        <div className={styles.featuredBlock}>
          <div className={styles.featuredTitle}>
            {returnTranslation(translations.featuredTitle)}
          </div>

          <div className={styles.carousel} role="list" aria-hidden={false}>
            <div
              className={styles.track}
              style={{ '--items-count': items.length } as React.CSSProperties}
            >
              {loopItems.map((it, idx) => (
                <a
                  key={`${it.alt ?? it.image}-${idx}`}
                  className={styles.logoLink}
                  href={it.url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={it.image}
                    alt={it.alt ?? it.image}
                    className={styles.logo}
                  />
                  <p className={styles.logoText}>{it.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

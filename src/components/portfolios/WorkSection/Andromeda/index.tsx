import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import { translationsSources } from './translations'
import type { WorkSectionAndromedaProps } from './types'

const defaultStyles = {
  '--item-bg': 'var(--bg-secondary)',
  '--link-color': 'var(--anchor-color)',
  '--subtitle-color': 'var(--base-color-4)',
}

export const WorkSectionAndromeda = ({
  items,
  translations = translationsSources,
  style,
}: WorkSectionAndromedaProps) => {
  return (
    <section
      className={styles.workSection}
      style={{
        ...defaultStyles,
        ...style,
      }}
    >
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>
      <p className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
      </p>

      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.name} className={styles.card}>
            <img src={item.logo} alt={item.name} className={styles.logo} />
            <div className={styles.info}>
              <strong>{item.name}</strong>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

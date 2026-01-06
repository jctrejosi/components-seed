import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import type { WorkSectionProjectsProps } from './types'
import { translationsSources } from './translations'

const projects = [
  {
    name: 'Flight Local (B2B Travel Solution)',
    type: 'web development',
    image: '',
    url: 'https://flightlocal.com',
  },
  {
    name: 'AI Lab Granada',
    type: 'web development',
    image: '',
    url: 'https://ailabgranada.com',
  },
  {
    name: 'Khora – Urban Thinkers Consulting',
    type: 'web development',
    image: '',
    url: 'https://khora.consulting',
  },
]

export const ProjectsAndromeda = ({
  items = projects,
  translations = translationsSources,
  className = '',
  style,
}: WorkSectionProjectsProps) => {
  return (
    <section className={`${styles.section} ${className}`} style={style}>
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>
      <h5 className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
      </h5>

      <div className={styles.grid}>
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </div>

            <div className={styles.info}>
              <strong className={styles.name}>{item.name}</strong>

              <span className={styles.type}>
                <span className={styles.typeDefault}>{item.type}</span>
                <span className={styles.typeHover}>
                  {returnTranslation(translations.show)}{' '}
                  <span className={styles.arrow}>→</span>
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

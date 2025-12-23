import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import { translationsSources } from './translations'
import type { WorkSectionAndromedaProps } from './types'

export const WorkSectionAndromeda = ({
  items = [],
  translations = translationsSources,
  style,
  backgroundImage,
  className = 'work-section-andromeda',
}: WorkSectionAndromedaProps) => {
  return (
    <div className={styles.container}>
      {backgroundImage && (
        <img className={styles.backgroundImage} src={backgroundImage} alt="" />
      )}

      <section className={`${styles.workSection} ${className}`} style={style}>
        <h2 className={styles.title}>
          {returnTranslation(translations.title)}
        </h2>
        <p className={styles.subtitle}>
          {returnTranslation(translations.subtitle)}
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.name} className={styles.card}>
              <header className={styles.header}>
                <img src={item.logo} alt={item.name} className={styles.logo} />
                <div>
                  <h3 className={styles.company}>{item.name}</h3>
                  {item.role && (
                    <span className={styles.role}>{item.role}</span>
                  )}
                </div>
              </header>

              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}

              {item.technologies && (
                <ul className={styles.techList}>
                  {item.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}

              {item.link && (
                <a
                  className={styles.link}
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.text}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
